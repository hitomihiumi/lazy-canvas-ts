import * as jimp from 'jimp';
import { createCanvas, loadImage, SKRSContext2D, Image } from '@napi-rs/canvas';
import * as fs from 'fs';
import { LazyCanvasGradient } from "../types/LazyCanvasGradient";
import { LazyCanvasLayer } from "../types/LazyCanvasLayer";
import { LazyCanvasData } from "../types/LazyCanvasData";

/**
 * @description Checks the string or gradient object provided to it for validity.
 * @example
 * const { isValidColor } = require('@hitomihiumi/lazy-canvas')
 * //...
 * console.log(isValidColor(`#ff8a8a`)) 
 * // returns true
 */
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

/**
 * @description Checks the validity of the image link.
 * @example
 * const { isImageUrlValid } = require('@hitomihiumi/lazy-canvas')
 * //...
 * console.log(isImageUrlValid(`https://i.pinimg.com/1200x/f3/32/19/f332192b2090f437ca9f49c1002287b6.jpg`)) 
 * // returns true
 */
export function isImageUrlValid(url: any) {
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
        else if (colorParam.gradientType === 'conic') gradient = ctx.createConicGradient(colorParam.startAngle, colorParam.points[0].x, colorParam.points[0].y);
        for (const colors of colorParam.colorPoints) {
            // @ts-ignore
            gradient.addColorStop(colors.position, colors.color);
        }
        return gradient;
    } else {
        return colorParam;
    }
}

/**
 * @description Does a preload of the image.
 * @example
 * const { lazyLoadImage } = require('@hitomihiumi/lazy-canvas')
 * //...
 * console.log(lazyLoadImage(`https://i.pinimg.com/1200x/f3/32/19/f332192b2090f437ca9f49c1002287b6.jpg`)) 
 * // returns Promise<Image>
 * console.log(await lazyLoadImage(`https://i.pinimg.com/1200x/f3/32/19/f332192b2090f437ca9f49c1002287b6.jpg`)) 
 * // returns image
 */
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

/**
 * @description Returns a object that contains information about the measured text (such as its width, for example)
 * @example
 * const { textMetrics, TextLayer } = require('@hitomihiumi/lazy-canvas')
 * //...
 * let text = new TextLayer()
 * .setText(`Hello, World!`)
 *
 * console.log(textMetrics(text))
 * // returns {
 * //      width: 70,
 * //      actualBoundingBoxLeft: 0,
 * //      actualBoundingBoxRight: 71,
 * //      actualBoundingBoxAscent: 9,
 * //      actualBoundingBoxDescent: 2,
 * //      emHeightAscent: 11,
 * //      emHeightDescent: 3,
 * //      alphabeticBaseline: -1
 * //  }
 */
export function textMetrics(value: string | LazyCanvasLayer | LazyCanvasData, width= 500, height= 500) {
    if (!value) throw new Error('Value must be provided');
    if (typeof value !== 'object') throw new Error('Value must be a object');

    if ("type" in value && (value.toJSON().structureType === 'layer' && value.toJSON().type === 'text')) {

        const canvas = createCanvas(width, height);
        const ctx = canvas.getContext('2d');

        // @ts-ignore
        ctx.font = `${value.toJSON().weight} ${value.toJSON().size}px ${value.toJSON().font}`;
        // @ts-ignore
        return ctx.measureText(value.toJSON().text);

    } else if (value.toJSON().structureType === 'canvas') {
        // @ts-ignore
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

/**
 * @description Saves LazyCanvas as a file.
 * @example
 * const { saveFile, LazyCanvas } = require('@hitomihiumi/lazy-canvas')
 * //...
 * let lazy = new LazyCanvas()
 * //...
 * let data = lazy.renderImage()
 * await saveFile(data, `png`)
 */
export async function saveFile(buffer: any, extension: 'png' | 'jpeg' | 'webp' | 'jpg', name: string) {
    if (!buffer) throw new Error('Buffer must be provided');
    if (!extension) throw new Error('Extension must be provided');

    fs.writeFileSync(`${name === undefined ? generateRandomName() : name }.${extension}`, buffer);
}

/**
 * @description Generates a random string.
 * @example
 * const { generateRandomName } = require('@hitomihiumi/lazy-canvas')
 * console.log(generateRandomName())
 * // returns random string, example: 'w68i9u4xbo8sp3fwdqxsz' 
 */
export function generateRandomName() {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}

export function drawMultilineText(ctx: SKRSContext2D, text: string, opts: any) {
    if(!opts)
        opts = {}
    if (!opts.font)
        opts.font = 'sans-serif'
    if (typeof opts.stroke == 'undefined')
        opts.stroke = false
    if (!opts.rect)
        opts.rect = {
            x: 0,
            y: 0,
            width: ctx.canvas.width,
            height: ctx.canvas.height
        }
    if (!opts.lineHeight)
        opts.lineHeight = 1.1
    if (!opts.minFontSize)
        opts.minFontSize = 30
    if (!opts.maxFontSize)
        opts.maxFontSize = 100
    if (!opts.rect.width)
        opts.rect.width = ctx.canvas.width - opts.rect.x
    if (!opts.rect.height)
        opts.rect.height = ctx.canvas.height - opts.rect.y

    //console.log(opts)

    const words = text.split(' ')

    let lines = []

    for (var fontSize = opts.minFontSize; fontSize <= opts.maxFontSize; fontSize++) {

        let lineHeight = fontSize * opts.lineHeight

        ctx.font = ' ' + fontSize + 'px ' + opts.font

        let x = opts.rect.x
        let y = opts.rect.y
        lines = []
        let line = ''

        for (let word of words) {
            let linePlus = line + word + ' '
            if (ctx.measureText(linePlus).width > (opts.rect.width)) {
                lines.push({ text: line, x: x, y: y })
                line = word + ' '
                y += lineHeight
            } else {
                line = linePlus
            }
        }

        lines.push({ text: line, x: x, y: y })

        if (y > y + opts.rect.height)
            break

    }

    for (let { text: text1, x, y } of lines) {
        if (opts.stroke) {
            ctx.strokeText(text1.trim(), x, y)
        } else {
            ctx.fillText(text1.trim(), x, y)
        }

    }

    return ctx
}