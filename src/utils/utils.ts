import * as jimp from 'jimp';
import {createCanvas, loadImage, SKRSContext2D, Image } from '@napi-rs/canvas';
import { createConicalGradient } from './createConicGradient'
import * as fs from 'fs';
import { LazyCanvasGradient } from "../types/LazyCanvasGradient";
import { LazyCanvasLayer } from "../types/LazyCanvasLayer";
import {LazyCanvasData} from "../types/LazyCanvasData";

export function isValidColor(color: any) {
    if (/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(color)) {
        return true;
    }
    const verbalColorNames = [
        'black', 'silver', 'gray', 'white', 'maroon', 'red', 'purple', 'fuchsia',
        'green', 'lime', 'olive', 'yellow', 'navy', 'blue', 'teal', 'aqua'
    ];
    if (typeof color === "string" && verbalColorNames.includes(color.toLowerCase())) {
        return true;
    }
    else if (typeof color === "object" && [ "gradient", "pattern" ].includes(color.toJSON().type)) {
        return true;
    }
    return false;
}

export function isImageUrlValid(url: string) {
    try {
        jimp.read(url);
        return true;
    } catch (error) {
        return false;
    }
}

export async function color(ctx: SKRSContext2D, colorParam: string | LazyCanvasGradient) {
    if (typeof colorParam === 'object') {
        colorParam = colorParam.toJSON();
        let gradient;
        if (colorParam.gradientType === 'linear') gradient = ctx.createLinearGradient(colorParam.points[0].x, colorParam.points[0].y, colorParam.points[1].x, colorParam.points[1].y);
        else if (colorParam.gradientType === 'radial') gradient = ctx.createRadialGradient(colorParam.points[0].x, colorParam.points[0].y, 0, colorParam.points[0].x, colorParam.points[0].y, colorParam.radius);
        else if (colorParam.gradientType === 'conic') gradient = await createConicalGradient(ctx, colorParam.colorPoints, colorParam.points[0].x, colorParam.points[0].y, -Math.PI, Math.PI, false);
        if (colorParam.gradientType !== 'conic') {
            for (const colors of colorParam.colorPoints) {
                // @ts-ignore
                gradient.addColorStop(colors.position, colors.color);
            }
        }
        return gradient;
    } else {
        return colorParam;
    }
}

export async function lazyLoadImage(url: any): Promise<Image> {
    return new Promise(async (resolve, reject) => {
        if (!url) reject('URL must be provided');
        if (!await isImageUrlValid(url)) reject('Invalid URL');
        jimp.read(url, async (err, image) => {
            if (err) reject(err);
            // @ts-ignore
            image = await image.getBufferAsync(jimp.MIME_PNG);
            // @ts-ignore
            image = await loadImage(image);
            // @ts-ignore
            resolve(image);
        });
    });
}

export function textMetrics(value: string | LazyCanvasLayer | LazyCanvasData, width= 500, height= 500) {
    if (!value) throw new Error('Value must be provided');
    if (typeof value !== 'object') throw new Error('Value must be a object');

    if ("type" in value && (value.toJSON().structureType === 'layer' && value.toJSON().type === 'text')) {

        const canvas = createCanvas(width, height);
        const ctx = canvas.getContext('2d');

        ctx.font = `${value.toJSON().weight} ${value.toJSON().size}px ${value.toJSON().font}`;
        return ctx.measureText(value.toJSON().text);

    } else if (value.toJSON().structureType === 'canvas') {

        const canvas = createCanvas(value.toJSON().width, value.toJSON().height);
        const ctx = canvas.getContext('2d');

        if (!("layers" in value)) throw new Error('Layers must be provided');

        if (!value.toJSON().layers) throw new Error('Layers must be provided');

        let layers = value.toJSON().layers.filter(layer => layer.type === 'text');

        let metrics = [];

        for (const layer of layers) {
            ctx.font = `${layer.weight} ${layer.size}px ${layer.font}`;
            metrics.push(ctx.measureText(layer.text));
        }

        return metrics;
    }
}

export async function saveFile(buffer: any, extension: 'png' | 'jpeg' | 'webp' | 'jpg', name: string) {
    if (!buffer) throw new Error('Buffer must be provided');
    if (!extension) throw new Error('Extension must be provided');

    fs.writeFileSync(`${name === undefined ? generateRandomName() : name }.${extension}`, buffer);
}

export function generateRandomName() {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}