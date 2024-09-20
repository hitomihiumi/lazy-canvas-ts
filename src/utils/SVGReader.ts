import { parse } from 'svgson';
import { promises as fs } from 'fs';
import { ImageLayer, Path2DLayer, RectangleLayer, EllipseLayer, CircleLayer, LineLayer, Gradient, Pattern, PatternType, LazyCanvas, TextLayer, TextAlign, TextBaseline, TextDirection } from "../index";

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

        imageLayer.data.x = Number(svg.attributes.x) || 0;
        imageLayer.data.y = Number(svg.attributes.y) || 0;
        imageLayer.data.centering = 'legacy';
        imageLayer.data.width = Number(svg.attributes.width);
        imageLayer.data.height = Number(svg.attributes.height);
        imageLayer.data.fromSVG = true;
        return imageLayer;
    }

    private static async createEllipseImageLayer(svg: any, path: string): Promise<ImageLayer> {
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

        ellipseImageLayer.data.x = Number(svg.attributes.x) || 0;
        ellipseImageLayer.data.y = Number(svg.attributes.y) || 0;
        ellipseImageLayer.data.centering = 'legacy';
        ellipseImageLayer.data.width = Number(svg.attributes.width);
        ellipseImageLayer.data.height = Number(svg.attributes.height);
        ellipseImageLayer.data.path = path;
        ellipseImageLayer.data.fromSVG = true;
        return ellipseImageLayer;
    }

    private static async createRectLayer(svg: any, svgObject: any): Promise<RectangleLayer> {
        let rectLayer;
        if (svg.attributes.rx || svg.attributes.ry) {
            rectLayer = new EllipseLayer();
            rectLayer.data.radius = Math.min(Number(svg.attributes.rx) || 0, Number(svg.attributes.ry) || 0);
        } else {
            rectLayer = new RectangleLayer();
        }
        rectLayer.data.id = svg.attributes.id || `RectangleLayer-${Math.random().toString(36).substring(2, 15)}`;
        if (svg.attributes.fill && svg.attributes.fill !== 'none') {
            let id = SVGReader.extractIdFromUrl(svg.attributes.fill)
            if (id) {
                let element = SVGReader.findElementById(svgObject, id)
                if (element.name === "pattern") {
                    rectLayer.data.color = await SVGReader.createPattern(element, svgObject, svg)
                } else if (['linearGradient', 'radialGradient'].includes(element.name)) {
                    rectLayer.data.color = await SVGReader.createGradient(element, svgObject, svg)
                }
            } else {
                rectLayer.data.color = svg.attributes.fill === 'none' ? svg.attributes.stroke : svg.attributes.fill || 'black';
            }
        } else {
            rectLayer.data.color = svg.attributes.fill === 'none' ? svg.attributes.stroke : svg.attributes.fill || 'black';
        }
        rectLayer.data.fill = svg.attributes.fill !== 'none'
        if (svg.attributes['fill-opacity']) rectLayer.data.alpha = Number(svg.attributes['fill-opacity']);
        rectLayer.data.x = Number(svg.attributes.x) || 0;
        rectLayer.data.y = Number(svg.attributes.y) || 0;
        rectLayer.data.centering = 'legacy';
        rectLayer.data.width = Number(svg.attributes.width);
        rectLayer.data.height = Number(svg.attributes.height);

        return rectLayer;
    }

    private static async createEllipseLayer(svg: any, svgObject: any): Promise<EllipseLayer> {
        const ellipseLayer = new EllipseLayer();
        ellipseLayer.data.id = svg.attributes.id || `EllipseLayer-${Math.random().toString(36).substring(2, 15)}`;
        if (svg.attributes.fill && svg.attributes.fill !== 'none') {
            let id = SVGReader.extractIdFromUrl(svg.attributes.fill)
            if (id) {
                let element = SVGReader.findElementById(svgObject, id)
                if (element.name === "pattern") {
                    ellipseLayer.data.color = await SVGReader.createPattern(element, svgObject, svg)
                } else if (['linearGradient', 'radialGradient'].includes(element.name)) {
                    ellipseLayer.data.color = await SVGReader.createGradient(element, svgObject, svg)
                }
            } else {
                ellipseLayer.data.color = svg.attributes.fill === 'none' ? svg.attributes.stroke : svg.attributes.fill || 'black';
            }
        } else {
            ellipseLayer.data.color = svg.attributes.fill === 'none' ? svg.attributes.stroke : svg.attributes.fill || 'black';
        }
        ellipseLayer.data.fill = svg.attributes.fill !== 'none';
        if (svg.attributes['fill-opacity']) ellipseLayer.data.alpha = Number(svg.attributes['fill-opacity']);
        ellipseLayer.data.x = Number(svg.attributes.x) || 0;
        ellipseLayer.data.y = Number(svg.attributes.y) || 0;
        ellipseLayer.data.centering = 'legacy';
        ellipseLayer.data.width = Number(svg.attributes.width);
        ellipseLayer.data.height = Number(svg.attributes.height);

        return ellipseLayer
    }

    private static async createCircleLayer(svg: any, svgObject: any): Promise<CircleLayer> {
        const circleLayer = new CircleLayer();
        circleLayer.data.id = svg.attributes.id || `CircleLayer-${Math.random().toString(36).substring(2, 15)}`;
        if (svg.attributes.fill && svg.attributes.fill !== 'none') {
            let id = SVGReader.extractIdFromUrl(svg.attributes.fill)
            if (id) {
                let element = SVGReader.findElementById(svgObject, id)
                if (element.name === "pattern") {
                    circleLayer.data.color = await SVGReader.createPattern(element, svgObject, svg)
                } else if (['linearGradient', 'radialGradient'].includes(element.name)) {
                    circleLayer.data.color = await SVGReader.createGradient(element, svgObject, svg)
                }
            } else {
                circleLayer.data.color = svg.attributes.fill === 'none' ? svg.attributes.stroke : svg.attributes.fill || 'black';
            }
        } else {
            circleLayer.data.color = svg.attributes.fill === 'none' ? svg.attributes.stroke : svg.attributes.fill || 'black';
        }
        circleLayer.data.fill = svg.attributes.fill !== 'none';
        if (svg.attributes['fill-opacity']) circleLayer.data.alpha = Number(svg.attributes['fill-opacity']);
        circleLayer.data.x = Number(svg.attributes.cx) || 0;
        circleLayer.data.y = Number(svg.attributes.cy) || 0;
        circleLayer.data.radius = Number(svg.attributes.r);

        return circleLayer;
    }

    private static async createLineLayer(svg: any, svgObject: any): Promise<LineLayer> {
        const lineLayer = new LineLayer();
        lineLayer.data.id = svg.attributes.id || `LineLayer-${Math.random().toString(36).substring(2, 15)}`;
        if (svg.attributes.fill && svg.attributes.fill !== 'none') {
            let id = SVGReader.extractIdFromUrl(svg.attributes.fill)
            if (id) {
                let element = SVGReader.findElementById(svgObject, id)
                if (element.name === "pattern") {
                    lineLayer.data.color = await SVGReader.createPattern(element, svgObject, svg)
                } else if (['linearGradient', 'radialGradient'].includes(element.name)) {
                    lineLayer.data.color = await SVGReader.createGradient(element, svgObject, svg)
                }
            } else {
                lineLayer.data.color = svg.attributes.fill === 'none' ? svg.attributes.stroke : svg.attributes.fill || 'black';
            }
        } else {
            lineLayer.data.color = svg.attributes.fill === 'none' ? svg.attributes.stroke : svg.attributes.fill || 'black';
        }
        lineLayer.data.fill = svg.attributes.fill !== 'none';
        if (svg.attributes['fill-opacity']) lineLayer.data.alpha = Number(svg.attributes['fill-opacity']);
        for (let i = 0; i < 2; i++) {
            lineLayer.data.points.push({
                x: Number(svg.attributes[`x${i + 1}`]),
                y: Number(svg.attributes[`y${i + 1}`])
            });
        }

        return lineLayer;
    }

    private static async createGradient(svg: any, svgObject: any, parent: any): Promise<Gradient> {
        const gradient = new Gradient();
        gradient.data.id = svg.attributes.id || `Gradient-${Math.random().toString(36).substring(2, 15)}`;
        gradient.data.gradientType = svg.name === 'linearGradient' ? 'linear' : 'radial';
        let baseXOne = (parent.attributes.x !== undefined
            ? Number(parent.attributes.x)
            : (parent.attributes.x1 !== undefined
                ? Number(parent.attributes.x1)
                : Number(parent.attributes.cx) - Number(parent.attributes.r)));
        let baseYOne = (parent.attributes.y !== undefined
            ? Number(parent.attributes.y)
            : (parent.attributes.y1 !== undefined
                ? Number(parent.attributes.y1)
                : Number(parent.attributes.cy) - Number(parent.attributes.r)));
        let baseXTwo = (parent.attributes.x !== undefined
            ? Number(parent.attributes.x)
            : (parent.attributes.x2 !== undefined
                ? Number(parent.attributes.x2)
                : Number(parent.attributes.cx) - Number(parent.attributes.r)));
        let baseYTwo = (parent.attributes.y !== undefined
            ? Number(parent.attributes.y)
            : (parent.attributes.y2 !== undefined
                ? Number(parent.attributes.y2)
                : Number(parent.attributes.cy) - Number(parent.attributes.r)));
        gradient.data.points = [
            {
                x: baseXOne + (
                    svg.attributes.x1 !== undefined
                        ? (parent.attributes.width !== undefined ? parent.attributes.width * Number(svg.attributes.x1) : baseXOne * Number(svg.attributes.x1))
                        : Number(svg.attributes.fx) * (parent.attributes.width !== undefined ? Number(parent.attributes.width) : Number(parent.attributes.r) * 2)),
                y: baseYOne + (
                    svg.attributes.y1 !== undefined
                        ? (parent.attributes.height !== undefined ? parent.attributes.height * Number(svg.attributes.y1) : baseYOne * Number(svg.attributes.y1))
                        : Number(svg.attributes.fy) * (parent.attributes.height !== undefined ? Number(parent.attributes.height) : Number(parent.attributes.r) * 2))
            },
            {
                x: baseXTwo + (
                    svg.attributes.x2 !== undefined
                        ? (parent.attributes.width !== undefined ? parent.attributes.width * Number(svg.attributes.x2) : baseXTwo * Number(svg.attributes.x2))
                        : Number(svg.attributes.cx) * (parent.attributes.width !== undefined ? Number(parent.attributes.width) : Number(parent.attributes.r) * 2)),
                y: baseYTwo + (
                    svg.attributes.y2 !== undefined
                        ? (parent.attributes.height !== undefined ? parent.attributes.height * Number(svg.attributes.y2) : baseYTwo * Number(svg.attributes.y2))
                        : Number(svg.attributes.cy) * (parent.attributes.height !== undefined ? Number(parent.attributes.height) : Number(parent.attributes.r) * 2))
            }
        ]
        if (svg.name === "radialGradient") {
            gradient.data.radius = Number(parent.attributes.r) ? (Number(parent.attributes.r) * Number(svg.attributes.r)) * 2 : Math.min((Number(parent.attributes.width) * Number(svg.attributes.r)), (Number(parent.attributes.height) * Number(svg.attributes.r)));
        }
        for (const colorStop of svg.children) {
            let color = colorStop.attributes['stop-color']
            let offset = colorStop.attributes['offset'].replace('%', '')
            gradient.data.colorPoints.push({ color, position: Number(offset) / 100 });
        }

        return gradient;
    }

    private static async createPattern(svg: any, svgObject: any, parent: any): Promise<Pattern> {
        const pattern = new Pattern()
        pattern.data.id = svg.attributes.id || `Pattern-${Math.random().toString(36).substring(2, 15)}`;
        pattern.data.patternType = PatternType.repeat

        let layers = []
        for (const child of svg.children) {
            let layer;
            switch (child.name) {
                case 'image':
                    layer = await SVGReader.createImageLayer(child);
                    break;
                case 'path':
                    layer = await SVGReader.createPath2DLayer(child, svgObject);
                    break;
                case 'g':
                    const group = await SVGReader.createGroupLayer(child, svgObject);
                    layers.push(...group);
                    break;
                case 'clipPath':
                    layer = await SVGReader.createClipPathLayer(child);
                    break;
                case 'use':
                    layer = await SVGReader.handleUseElement(child, svgObject, svg);
                    break;
                case 'rect':
                    layer = await SVGReader.createRectLayer(child, svgObject);
                    break;
                case 'ellipse':
                    layer = await SVGReader.createEllipseLayer(child, svgObject);
                    break;
                case 'circle':
                    layer = await SVGReader.createCircleLayer(child, svgObject);
                    break;
                case 'line':
                    layer = await SVGReader.createLineLayer(child, svgObject);
                    break;
                default:
                    console.warn(`Unsupported SVG element: ${child.name}`);
            }
            if (layer) {
                layers.push(layer);
            }
        }

        let width = Number(svg.attributes['width'])
        let height = Number(svg.attributes['height'])

        width = width < 1 ? width * (Number(parent.attributes['width']) ? Number(parent.attributes['width']) : (Number(parent.attributes['r']) * 2)) : width
        height = height < 1 ? height * (Number(parent.attributes['height']) ? Number(parent.attributes['height']) : (Number(parent.attributes['r']) * 2)) : height

        pattern.data.pattern = {
            data: new LazyCanvas()
                .createNewCanvas(width, height)
                .addLayers(
                    ...layers
                ),
            type: "canvas"
        }

        return pattern
    }

    private static async createPath2DLayer(svg: any, svgObject: any): Promise<Path2DLayer> {
        const path2DLayer = new Path2DLayer(svg.attributes.d);
        path2DLayer.data.id = svg.attributes.id || `Path2DLayer-${Math.random().toString(36).substring(2, 15)}`;
        if (svg.attributes.fill && svg.attributes.fill !== 'none') {
            let id = SVGReader.extractIdFromUrl(svg.attributes.fill)
            if (id) {
                let element = SVGReader.findElementById(svgObject, id)
                if (element.name === "pattern") {
                    path2DLayer.data.color = await SVGReader.createPattern(element, svgObject, svg)
                } else if (['linearGradient', 'radialGradient'].includes(element.name)) {
                    path2DLayer.data.color = await SVGReader.createGradient(element, svgObject, svg)
                }
            } else {
                path2DLayer.data.fillStyle = svg.attributes.fill === 'none' ? svg.attributes.stroke : svg.attributes.fill || 'black';
            }
        } else {
            path2DLayer.data.fillStyle = svg.attributes.fill === 'none' ? svg.attributes.stroke : svg.attributes.fill || 'black';
        }
        path2DLayer.data.filled = svg.attributes.fill !== 'none';
        if (svg.attributes['fill-opacity']) path2DLayer.data.alpha = Number(svg.attributes['fill-opacity']);
        path2DLayer.data.lineWidth = svg.attributes['stroke-width'] ? Number(svg.attributes['stroke-width']) : 1;
        return path2DLayer;
    }

    private static async createClipPathLayer(svg: any): Promise<Path2DLayer> {
        const clipPathLayer = new Path2DLayer(svg.children.map((child: any) => child.attributes.d).join(' '));
        clipPathLayer.data.clipPath = true;
        clipPathLayer.data.id = svg.attributes.id || `Path2DLayer-${Math.random().toString(36).substring(2, 15)}`;
        return clipPathLayer;
    }

    //private static async createTextLayer(svg: any, parent: any): Promise<any[] | TextLayer> {
    //    if (svg.children.length !== 0) {
    //        const textGroup = []
    //                    for (const child of svg.children) {
    //            let layer;
    //            switch (child.name) {
    //                case 'text':
    //                    layer = await SVGReader.createTextLayer(child, svg);
    //                    break;
    //                case 'tspan':
    //                    console.log(child)
    //                    layer = await SVGReader.createTextLayer(child, svg);
    //                    break;
    //                default:
    //                    console.warn(`Unsupported SVG element: ${child.name}`);
    //            }
    //            if (layer) {
    //                // @ts-ignore
    //                textGroup.push(...layer);
    //            }
    //        }
    //        return textGroup
    //    } else {
    //        const textLayer = new TextLayer()
    //        textLayer.data.id = svg.attributes.id || `TextLayer-${Math.random().toString(36).substring(2, 15)}`;
    //        textLayer.data.x = svg.attributes.x || parent.attributes.x || 0
    //        textLayer.data.y = svg.attributes.y || parent.attributes.y || 0
    //        textLayer.data.size = svg.attributes['font-size'] || parent.attributes['font-size'] || 20
    //        textLayer.data.align = svg.attributes['anchor'] || parent.attributes['anchor'] || 'left'
    //
    //        return textLayer
    //    }
    //}

    private static async createGroupLayer(svg: any, svgObject: any): Promise<any[]> {
        const groupLayers = [];
        for (const child of svg.children) {
            let layer;
            switch (child.name) {
                case 'image':
                    layer = await SVGReader.createImageLayer(child);
                    break;
                case 'path':
                    layer = await SVGReader.createPath2DLayer(child, svgObject);
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
                case 'rect':
                    layer = await SVGReader.createRectLayer(child, svgObject);
                    break;
                case 'ellipse':
                    layer = await SVGReader.createEllipseLayer(child, svgObject);
                    break;
                case 'circle':
                    layer = await SVGReader.createCircleLayer(child, svgObject);
                    break;
                case 'line':
                    layer = await SVGReader.createLineLayer(child, svgObject);
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
        const translateMatch = transform.match(/translate\(([^)]+)\)/);
        const rotateMatch = transform.match(/rotate\(([^)]+)\)/);

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
        } else if (translateMatch) {
            const [tx, ty] = translateMatch[1].split(' ').map(Number);
            layer.data.x = (layer.data.x || 0) + tx;
            layer.data.y = (layer.data.y || 0) + ty;
        } else if (rotateMatch) {
            const [angle, cx, cy] = rotateMatch[1].split(' ').map(Number);
            layer.data.x = (layer.data.x || 0) + cx;
            layer.data.y = (layer.data.y || 0) + cy;
            layer.data.angle = angle
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
                    layer = await SVGReader.createEllipseImageLayer(referencedElement, element.children[0].attributes.d);
                } else {
                    layer = await SVGReader.createImageLayer(referencedElement);
                }
                break;
            case 'path':
                layer = await SVGReader.createPath2DLayer(referencedElement, svgObject);
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
                    layer = await SVGReader.createPath2DLayer(svgElement, svgObject);
                    break;
                case 'g':
                    const group = await SVGReader.createGroupLayer(svgElement, svgObject);
                    for (const element of group) {
                        let search = layers.find((l) => l.data.id === element.data.id);
                        if (!search) layers.push(element);
                        else {
                            layers.splice(layers.indexOf(search), 1, element);
                        }
                    }
                    break;
                case 'clipPath':
                    layer = await SVGReader.createClipPathLayer(svgElement);
                    break;
                case 'use':
                    layer = await SVGReader.handleUseElement(svgElement, svgObject, svgObject);
                    break;
                case 'rect':
                    layer = await SVGReader.createRectLayer(svgElement, svgObject);
                    break;
                case 'ellipse':
                    layer = await SVGReader.createEllipseLayer(svgElement, svgObject);
                    break;
                case 'circle':
                    layer = await SVGReader.createCircleLayer(svgElement, svgObject);
                    break;
                case 'line':
                    layer = await SVGReader.createLineLayer(svgElement, svgObject);
                    break;
                //case 'text':
                //    const textGroup = await SVGReader.createTextLayer(svgElement, svgObject);
                //    if (Array.isArray(textGroup)) {
                //        for (const element of textGroup) {
                //            let search = layers.find((l) => l.data.id === element.data.id);
                //            if (!search) layers.push(element);
                //            else {
                //                layers.splice(layers.indexOf(search), 1, element);
                //            }
                //        }
                //    } else {
                //        layer = textGroup;
                //    }
                //    break;
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
