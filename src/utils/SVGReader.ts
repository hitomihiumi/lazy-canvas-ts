import { parse } from 'svgson';
import { promises as fs } from 'fs';
import { ImageLayer, Path2DLayer } from "../index";

export class SVGReader {
    private static async parseSVG(svg: string): Promise<any> {
        let loadedSVG = await fs.readFile(svg);
        return parse(loadedSVG.toString());
    }

    private static async createImageLayer(svg: any): Promise<ImageLayer> {
        const imageLayer = new ImageLayer();
        const src = svg.attributes['xlink:href'] || svg.attributes.href;
        imageLayer.data.id = svg.attributes.id;
        if (svg.attributes['fill-opacity']) imageLayer.data.alpha = Number(svg.attributes['fill-opacity']);

        if (src.startsWith('data:image')) {
            const base64Data = src.replace(/^data:image\/\w+;base64,/, "");
            const buffer = Buffer.from(base64Data, 'base64');
            imageLayer.data.image = buffer;
        } else {
            imageLayer.data.image = src;
        }

        imageLayer.data.width = Number(svg.attributes.width);
        imageLayer.data.height = Number(svg.attributes.height);
        imageLayer.data.fromSVG = true;
        return imageLayer;
    }

    private static async EllipseImageLayer(svg: any, path: string): Promise<ImageLayer> {
        const ellipseImageLayer = new ImageLayer();
        const src = svg.attributes['xlink:href'] || svg.attributes.href;
        ellipseImageLayer.data.id = svg.attributes.id;
        if (svg.attributes['fill-opacity']) ellipseImageLayer.data.alpha = Number(svg.attributes['fill-opacity']);

        if (src.startsWith('data:image')) {
            const base64Data = src.replace(/^data:image\/\w+;base64,/, "");
            const buffer = Buffer.from(base64Data, 'base64');
            ellipseImageLayer.data.image = buffer;
        } else {
            ellipseImageLayer.data.image = src;
        }

        ellipseImageLayer.data.width = Number(svg.attributes.width);
        ellipseImageLayer.data.height = Number(svg.attributes.height);
        ellipseImageLayer.data.path = path;
        ellipseImageLayer.data.fromSVG = true;
        return ellipseImageLayer;
    }

    private static async createPath2DLayer(svg: any): Promise<Path2DLayer> {
        const path2DLayer = new Path2DLayer(svg.attributes.d);
        path2DLayer.data.id = svg.attributes.id || `Path2DLayer-${Math.random().toString(36).substring(2, 15)}`;
        path2DLayer.data.fillStyle = svg.attributes['fill'] === 'none' ? svg.attributes['stroke'] : svg.attributes['fill'] || 'black';
        path2DLayer.data.filled = svg.attributes.fill !== 'none';
        if (svg.attributes['fill-opacity']) path2DLayer.data.alpha = Number(svg.attributes['fill-opacity']);
        path2DLayer.data.lineWidth = svg.attributes['stroke-width'] ? Number(svg.attributes['stroke-width']) : 1;
        return path2DLayer;
    }

    private static async createClipPathLayer(svg: any): Promise<Path2DLayer> {
        const clipPathLayer = new Path2DLayer(svg.children.map((child: any) => child.attributes.d).join(' '));
        clipPathLayer.data.clipPath = true;
        return clipPathLayer;
    }

    private static async createGroupLayer(svg: any, svgObject: any): Promise<any[]> {
        const groupLayers = [];
        for (const child of svg.children) {
            let layer;
            switch (child.name) {
                case 'image':
                    layer = await SVGReader.createImageLayer(child);
                    break;
                case 'path':
                    layer = await SVGReader.createPath2DLayer(child);
                    break;
                case 'g':
                    const group = await SVGReader.createGroupLayer(child, svgObject);
                    groupLayers.push(...group);
                    break;
                case 'clipPath':
                    layer = await SVGReader.createClipPathLayer(child);
                    break;
                case 'use':
                    layer = await SVGReader.handleUseElement(child, svgObject, svg);
                    break;
                default:
                    console.warn(`Unsupported SVG element: ${child.name}`);
            }
            if (layer) {
                groupLayers.push(layer);
            }
        }
        return groupLayers;
    }

    private static applyTransform(transform: string, layer: any): void {
        const matrixMatch = transform.match(/matrix\(([^)]+)\)/);
        const scaleMatch = transform.match(/scale\(([^)]+)\)/);

        if (matrixMatch) {
            const [a, b, c, d, e, f] = matrixMatch[1].split(' ').map(Number);
            layer.data.x = (layer.data.x || 0) + e;
            layer.data.y = (layer.data.y || 0) + f;
            layer.data.width *= a;
            layer.data.height *= d;
            layer.data.centering = 'legacy';
        } else if (scaleMatch) {
            const [sx, sy] = scaleMatch[1].split(' ').map(Number);
            layer.data.width *= sx;
            layer.data.height *= sy;
            layer.data.x = (layer.data.x || 0) + (layer.data.width / 2);
            layer.data.y = (layer.data.y || 0) + (layer.data.height / 2);
        }
    }

    private static findElementById(svgObject: any, id: string): any {
        const queue = [svgObject];
        while (queue.length > 0) {
            const current = queue.shift();
            if (current.attributes && current.attributes.id === id) {
                return current;
            }
            if (current.children) {
                queue.push(...current.children);
            }
        }
        throw new Error(`Element with id ${id} not found`);
    }

    private static extractIdFromUrl(url: string): string | null {
        const regex = /url\(#([^)]+)\)/;
        const match = url.match(regex);
        return match ? match[1] : null;
    }

    private static async handleUseElement(svg: any, svgObject: any, from: any): Promise<any> {
        const href = svg.attributes['xlink:href'] || svg.attributes.href;
        const clipPath = from.attributes['clip-path'];
        const id = href.replace('#', '');
        const referencedElement = SVGReader.findElementById(svgObject, id);
        let layer;

        switch (referencedElement.name) {
            case 'image':
                if (clipPath) {
                    let id = SVGReader.extractIdFromUrl(from.attributes['clip-path']);
                    if (!id) return console.warn(`Could not extract id from clipPath: ${from.attributes['clip-path']}`);
                    let element = SVGReader.findElementById(svgObject, id);
                    layer = await SVGReader.EllipseImageLayer(referencedElement, element.children[0].attributes.d);
                } else {
                    layer = await SVGReader.createImageLayer(referencedElement);
                }
                break;
            case 'path':
                layer = await SVGReader.createPath2DLayer(referencedElement);
                break;
            default:
                throw new Error(`Unsupported element referenced by <use>: ${referencedElement.name}`);
        }

        if (svg.attributes.transform) {
            SVGReader.applyTransform(svg.attributes.transform, layer);
        }

        return layer;
    }

    public static async readSVG(svg: string): Promise<any> {
        const svgObject = await SVGReader.parseSVG(svg);
        const layers = [];
        for (const svgElement of svgObject.children) {
            let layer;
            switch (svgElement.name) {
                case 'defs':
                    for (const child of svgElement.children) {
                        if (child.name === 'image') {
                            layer = await SVGReader.createImageLayer(child);
                        } else if (child.name === 'clipPath') {
                            layer = await SVGReader.createClipPathLayer(child);
                        }
                    }
                    break;
                case 'path':
                    layer = await SVGReader.createPath2DLayer(svgElement);
                    break;
                case 'g':
                    const group = await SVGReader.createGroupLayer(svgElement, svgObject);
                    layers.push(...group);
                    break;
                case 'clipPath':
                    layer = await SVGReader.createClipPathLayer(svgElement);
                    break;
                case 'use':
                    layer = await SVGReader.handleUseElement(svgElement, svgObject, svgObject);
                    break;
                default:
                    console.warn(`Unsupported SVG element: ${svgElement.name}`);
            }
            if (layer) {
                let search = layers.find((l) => l.data.id === layer.data.id);
                if (!search) layers.push(layer);
                else {
                    layers.splice(layers.indexOf(search), 1, layer);
                }
            }
        }
        return layers;
    }
}