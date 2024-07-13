import { createCanvas, loadImage, GlobalFonts, SKRSContext2D } from '@napi-rs/canvas';
import * as jimp from 'jimp';
import { resolve } from 'path';
// @ts-ignore
import { isImageUrlValid, isValidColor, color, lazyLoadImage, drawMultilineText } from './utils/utils';
import { LazyCanvasPlugin } from './types/LazyCanvasPlugin';
import { LazyCanvasData } from './types/LazyCanvasData';
import { LazyCanvasLayer } from "./types/LazyCanvasLayer";
import { LazyCanvasFont } from "./types/LazyCanvasFont";
import { LazyError, LazyLog } from "./types/LazyUtils";
import { LazyCanvasPattern } from "./types/LazyCanvasPattern";
import { LazyCanvasFilter } from "./types/LazyCanvasFilter";
import { Font } from "./utils/Font";``
import { BaseMethod } from "./api/BaseMethod";

export enum RenderOutput {
    Buffer,
    Context
};
export type StringRenderOutput = "buffer" | "ctx";

/**
 * @example
 * const { LazyCanvas, EllipseImageLayer, EllipseLayer, TextLayer, Font, CircleLayer } = require('@hitomihiumi/lazy-canvas')
 * const fs = require('fs')
 *
 * let font = new Font()
 * .setFamily("JoeKubert")
 * .setWeight("regular")
 * .setPath("./fonts/v_CCJoeKubert-Doubled_v1.3.ttf")
 *
 * let background = new EllipseImageLayer()
 * .setX(0)
 * .setY(0)
 * .setWidth(600)
 * .setHeight(200)
 * .setRadius(50)
 * .setImage('https://static.zerochan.net/Otosora.full.3420604.jpg')
 *
 * let blackout = new EllipseLayer()
 * .setX(0)
 * .setY(0)
 * .setWidth(600)
 * .setHeight(200)
 * .setRadius(50)
 * .setColor('#000')
 * .setAlpha(0.4)
 *
 * let border = new EllipseLayer()
 * .setX(1)
 * .setY(1)
 * .setWidth(598)
 * .setHeight(198)
 * .setRadius(50)
 * .setColor('#fff')
 * .setFilled(false)
 * .setStroke(2)
 *
 * let avatar = new EllipseImageLayer()
 * .setX(25)
 * .setY(25)
 * .setWidth(150)
 * .setHeight(150)
 * .setRadius(50)
 * .setImage('https://i.pinimg.com/1200x/f3/32/19/f332192b2090f437ca9f49c1002287b6.jpg')
 *
 * let avatarBorder = new EllipseLayer()
 * .setX(25)
 * .setY(25)
 * .setWidth(150)
 * .setHeight(150)
 * .setRadius(50)
 * .setColor('#fff')
 * .setFilled(false)
 * .setStroke(1.5)
 *
 * let bgprogress = new EllipseLayer()
 * .setX(190)
 * .setY(125)
 * .setWidth(365)
 * .setHeight(35)
 * .setRadius(17.5)
 * .setColor('#fff')
 *
 * let progress = new EllipseLayer()
 * .setX(192.5)
 * .setY(127.5)
 * .setWidth(180)
 * .setHeight(30)
 * .setRadius(15)
 * .setColor('#ff8a8a')
 *
 * let lvlbg = new CircleLayer()
 * .setX(140)
 * .setY(140)
 * .setRadius(20)
 * .setColor('#ff8a8a')
 *
 * let lvlborder = new CircleLayer()
 * .setX(140)
 * .setY(140)
 * .setRadius(20)
 * .setColor('#fff')
 * .setFilled(false)
 * .setStroke(1.5)
 *
 * let name = new TextLayer()
 * .setX(200)
 * .setY(120)
 * .setText('LazyCanvas')
 * .setFont("JoeKubert")
 * .setFontSize(25)
 * .setColor('#fff')
 * .setAlign('left')
 *
 * let xp = new TextLayer()
 * .setX(550)
 * .setY(120)
 * .setText('50/100')
 * .setFont("JoeKubert")
 * .setFontSize(20)
 * .setColor('#fff')
 * .setAlign('right')
 *
 * let lvl = new TextLayer()
 * .setX(159)
 * .setY(172)
 * .setText('1')
 * .setFont("JoeKubert")
 * .setFontSize(33)
 * .setColor('#fff')
 * .setAlign('center')
 *
 * const lazy = new LazyCanvas()
 * .createNewCanvas(600, 200)
 * .loadFonts(font)
 * .addLayers(background, blackout, border, avatar, avatarBorder, bgprogress, progress, lvlbg, lvlborder, name, xp, lvl)
 *
 * async function main() {
 *   const pngData = await lazy.renderImage()
 *   fs.writeFileSync('example.png', pngData)
 * }
 *
 * main()
 */
export class LazyCanvas {

    private data: LazyCanvasData;
    public plugins: LazyCanvasPlugin[] | undefined;

    constructor(options?: { plugins?: LazyCanvasPlugin[], data?: LazyCanvasData }) {
        // @ts-ignore
        this.data = options?.data ? { ...options.data } : {
            layers: [],
            methods: [],
            width: 0,
            height: 0,
            errorImage: null,
            structureType: "canvas"
        };
        // @ts-ignore
        this.plugins ??= options?.plugins ? options.plugins : undefined;

        if (this.plugins) {
            for (const plugin of Object.values(this.plugins)) {
                if (plugin.constructor.name !== "LazyCanvasPlugin") throw new LazyError("Invalid plugin provided");
                if (plugin.onload) {
                    plugin.onload(this);
                }
            }
        }
    }

    /**
     * @param data - The main array with all data
     * If you want to create a new canvas, you can use the createNewCanvas method
     */
    setData(data: LazyCanvasData) {
        if (!data) throw new LazyError("No data provided");
        this.data = data;
        return this;
    }

    /**
     * @param width - The width of the canvas
     * @param height - The height of the canvas
     * Creates a new canvas with the provided width and height
     */
    createNewCanvas(width: number, height: number) {
        if (!width || !height) throw new LazyError("No width or height provided");
        this.data.width = width;
        this.data.height = height;
        return this;
    }

    addLayers(...layers: Partial<LazyCanvasLayer>[]) {
        if (!layers) throw new LazyError("No layers data provided");
        for (const l of layers) {
            // @ts-ignore
            this.data.layers.push(l.toJSON());
        }
        return this;
    }

    removeLayer(data: LazyCanvasLayer) {
        if (!data) throw new LazyError("No data provided");
        this.data.layers = this.data.layers.filter(l => l !== data);
        return this;
    }

    moveLayer(data: LazyCanvasLayer, index: number) {
        if (!data || !index) throw new LazyError("No data or index provided");
        this.data.layers.splice(index, 0, this.data.layers.splice(this.data.layers.indexOf(data), 1)[0]);
        return this;
    }

    modifyLayer(index: number, param: string, newData: any) {
        if ((!index && index !== 0) || !param || (!newData && newData !== 0)) throw new LazyError("No index or param or newData provided");
        if (!this.data.layers[index]) throw new LazyError("No layer found with that index");
        if (!(param in this.data.layers[index])) throw new LazyError("Invalid param provided");
        switch (param) {
            case "x":
                this.data.layers[index].x = newData;
                if (isNaN(newData)) throw new LazyError("X must be a number");
                break;
            case "y":
                this.data.layers[index].y = newData;
                if (isNaN(newData)) throw new LazyError("Y must be a number");
                break;
            case "width":
                if (isNaN(newData)) throw new LazyError("Width must be a number");
                this.data.layers[index].width = newData;
                break;
            case "height":
                if (isNaN(newData)) throw new LazyError("Height must be a number");
                this.data.layers[index].height = newData;
                break;
            case "radius":
                if (isNaN(newData)) throw new LazyError("Radius must be a number");
                this.data.layers[index].radius = newData;
                break;
            case "stroke":
                if (isNaN(newData)) throw new LazyError("Stroke must be a number");
                this.data.layers[index].stroke = newData;
                break;
            case "color":
                if (!isValidColor(newData)) throw new LazyError("Color must be a valid color");
                this.data.layers[index].color = newData;
                break;
            case "text":
                this.data.layers[index].text = newData;
                break;
            case "size":
                if (isNaN(newData)) throw new LazyError("Size must be a number");
                this.data.layers[index].size = newData;
                break;
            case "font":
                this.data.layers[index].font = newData;
                break;
            case "align":
                if (['start', 'end', 'left', 'right', 'center'].includes(newData) === false) throw new LazyError("Align must be start, end, left, right or center");
                this.data.layers[index].align = newData;
                break;
            case "weight":
                if (['normal', 'bold', 'italic', 'bold italic', 'regular'].includes(newData) === false) throw new LazyError("Weight must be bold, italic or regular");
                this.data.layers[index].weight = newData;
                break;
            case "multiline":
                if (typeof newData !== "boolean") throw new LazyError("Multiline must be a true or false value");
                this.data.layers[index].multiline = newData;
                break;
            case "image":
                if (!isImageUrlValid(newData)) throw new LazyError("Image must be a valid URL");
                this.data.layers[index].image = newData;
                break;
            case "fill":
                if (typeof newData !== "boolean") throw new LazyError("Filled must be a true or false value");
                this.data.layers[index].fill = newData;
                break;
            case "points":
                if (!newData) throw new LazyError("No points provided");
                this.data.layers[index].points = newData;
                break;
            case "sides":
                if (isNaN(newData)) throw new LazyError("Sides must be a number");
                this.data.layers[index].sides = newData;
                break;
            case "shadowBlur":
                if (isNaN(newData)) throw new LazyError("ShadowBlur must be a number");
                this.data.layers[index].shadow.shadowBlur = newData;
                break;
            case "shadowColor":
                if (!isValidColor(newData)) throw new LazyError("ShadowColor must be a valid color");``
                this.data.layers[index].shadow.shadowColor = newData;
                break;
            case "shadowOffsetX":
                if (isNaN(newData)) throw new LazyError("ShadowOffsetX must be a number");
                this.data.layers[index].shadow.shadowOffsetX = newData;
                break;
            case "shadowOffsetY":
                if (isNaN(newData)) throw new LazyError("ShadowOffsetY must be a number");
                this.data.layers[index].shadow.shadowOffsetY = newData;
                break;
            case "alpha":
                if (isNaN(newData)) throw new LazyError("Alpha must be a number");
                if (newData > 1 || newData < 0) throw new LazyError("Alpha must be between 0 and 1");
                this.data.layers[index].alpha = newData;
                break;
            case "angle":
                if (isNaN(newData)) throw new LazyError("Angle must be a number");
                this.data.layers[index].angle = newData;
                break;
            case "filter":
                this.data.layers[index].filter = newData.toJSON();
                break;
            case "angles":
                if (!newData) throw new LazyError("No angles provided");
                this.data.layers[index].angles = newData;
                break;
            case "clockwise":
                if (typeof newData !== "boolean") throw new LazyError("Clockwise must be a true or false value");
                this.data.layers[index].clockwise = newData;
                break;
            case "controlPoints":
                if (!newData) throw new LazyError("No control points provided");
                this.data.layers[index].controlPoints = newData;
                break;
            case "controlPoint":
                if (!newData) throw new LazyError("No control point provided");
                this.data.layers[index].controlPoint = newData;
                break;
            default:
                throw new LazyError("Invalid param provided");
        }

        return this;
    }

    getLayer(index: number) {
        if (!index && index !== 0) throw new LazyError("No index provided");
        return this.data.layers[index];
    }

    getIndexOfLayer(data: LazyCanvasLayer) {
        if (!data) throw new LazyError("No data provided");
        return this.data.layers.indexOf(data);
    }

    clearCanvas() {
        this.data.layers = [];
        return this;
    }

    setName(name: string) {
        if (!name) throw new LazyError("No name provided");
        this.data.name = name;
        return this;
    }

    setDescription(description: string) {
        if (!description) throw new LazyError("No description provided");
        this.data.description = description;
        return this;
    }

    setEmoji(emoji: string) {
        if  (!emoji) throw new LazyError("No emoji provided");
        this.data.emoji = emoji;
        return this;
    }

    getData() {
        return { ...this.data };
    }

    loadFonts(...fonts: Array<Font>) {
        if (!fonts) throw new LazyError("No fonts provided");
        for (const font of fonts) {
            let load = font.toJSON()
            if (!load.path) throw new LazyError("No path provided");
            if (!load.family) throw new LazyError("No family provided");
            if (!load.weight) throw new LazyError("No weight provided");
            GlobalFonts.registerFromPath(resolve(load.path), load.family);
        }
        return this;
    }

    set404Image(image: string) {
        if (!image) throw new LazyError("No image provided");
        this.data.errorImage = image;
        return this;
    }

    loadMethods(...methods: BaseMethod[]) {
        if (!methods) throw new LazyError("No methods provided");
        for (const method of methods) {
            let load = method.toJSON();
            if (!load.name) throw new LazyError("No name provided");
            if (!load.method) throw new LazyError("No method provided");
            this.data.methods.push({ name: load.name, method: load.method });
        }
        return this;
    }

    toJSON() {
        return { ...this.data };
    }

    clipper(ctx: SKRSContext2D, img: any, x: number, y: number, w: number, h: number, r: number){
        if (r > w / 2 || r > h / 2) r = Math.min(w / 2, h / 2);
        ctx.beginPath();
        ctx.moveTo(x + (w /2), y);
        ctx.arcTo(x + w, y, x + w, y + (h / 2), r);
        ctx.arcTo(x + w, y + h, x + (w / 2), y + h, r);
        ctx.arcTo(x, y + h, x, y + (h / 2), r);
        ctx.arcTo(x, y, x + (w / 2), y, r);
        ctx.closePath();
        ctx.save();
        ctx.clip();
        ctx.globalAlpha = 1
        ctx.drawImage(img,x,y,w,h);
        ctx.restore();
    }

    fillRoundedRect(ctx: SKRSContext2D, x: number, y: number, w: number, h: number, r: number){
        if (r > w / 2 || r > h / 2) r = Math.min(w / 2, h / 2);
        ctx.beginPath();
        ctx.moveTo(x + (w /2), y);
        ctx.arcTo(x + w, y, x + w, y + (h / 2), r);
        ctx.arcTo(x + w, y + h, x + (w / 2), y + h, r);
        ctx.arcTo(x, y + h, x, y + (h / 2), r);
        ctx.arcTo(x, y, x + (w / 2), y, r);
        ctx.closePath();
        ctx.fill();
    }

    outerlineRounded(ctx: SKRSContext2D, x: number, y: number, w: number, h: number, r: number, s = 1){
        if (r > w / 2 || r > h / 2) r = Math.min(w / 2, h / 2);
        ctx.beginPath();
        ctx.lineWidth = s;
        ctx.moveTo(x + (w /2), y);
        ctx.arcTo(x + w, y, x + w, y + (h / 2), r);
        ctx.arcTo(x + w, y + h, x + (w / 2), y + h, r);
        ctx.arcTo(x, y + h, x, y + (h / 2), r);
        ctx.arcTo(x, y, x + (w / 2), y, r);
        ctx.closePath();
        ctx.stroke();
    }

    circle(ctx: SKRSContext2D, data: LazyCanvasLayer, filled = true) {
        ctx.beginPath();
        if (filled === true) {
            this.fillRoundedRect(ctx, data.x, data.y, data.radius * 2, data.radius * 2, data.radius);
        } else {
            this.outerlineRounded(ctx, data.x, data.y, data.radius * 2, data.radius * 2, data.radius, data.stroke);
        }
        ctx.closePath();
    }

    ellipse(ctx: SKRSContext2D, data: LazyCanvasLayer, filled = true) {
        ctx.beginPath();
        ctx.save();
        ctx.translate(data.x + data.width / 2, data.y + data.height / 2);
        ctx.rotate((Math.PI/180) * data.angle);
        ctx.translate(-(data.x + data.width / 2), -(data.y + data.height / 2));
        if (filled === true) {
            this.fillRoundedRect(ctx, data.x, data.y, data.width, data.height, data.radius);
        } else {
            this.outerlineRounded(ctx, data.x, data.y, data.width, data.height, data.radius, data.stroke);
        }
        ctx.restore();
        ctx.closePath();
    }

    square(ctx: SKRSContext2D, data: LazyCanvasLayer, filled = true) {
        ctx.beginPath();
        ctx.save();
        ctx.translate(data.x + data.width / 2, data.y + data.width / 2);
        ctx.rotate((Math.PI/180) * data.angle);
        ctx.translate(-(data.x + data.width / 2), -(data.y + data.width / 2));
        if (filled === true) {
            ctx.fillRect(data.x, data.y, data.width, data.width);
        } else {
            ctx.strokeRect(data.x, data.y, data.width, data.width);
        }
        ctx.restore();
        ctx.closePath();
    }

    rectangle(ctx: SKRSContext2D, data: LazyCanvasLayer, filled = true) {
        ctx.beginPath();
        ctx.save();
        ctx.translate(data.x + data.width / 2, data.y + data.height / 2);
        ctx.rotate((Math.PI/180) * data.angle);
        ctx.translate(-(data.x + data.width / 2), -(data.y + data.height / 2));
        if (filled) {
            ctx.fillRect(data.x, data.y, data.width, data.height);
        } else {
            ctx.strokeRect(data.x, data.y, data.width, data.height);
        }
        ctx.restore();
        ctx.closePath();
    }

    ngon(ctx: SKRSContext2D, data: LazyCanvasLayer, filled = true) {
        ctx.beginPath();
        ctx.moveTo(data.x + data.radius * Math.cos(0 + data.angle), data.y + data.radius * Math.sin(0 + data.angle));
        for (let i = 1; i < data.sides + 1; i++) {
            ctx.lineTo(data.x + data.radius * Math.cos(i * 2 * Math.PI / data.sides + data.angle), data.y + data.radius * Math.sin(i * 2 * Math.PI / data.sides + data.angle));
        }
        if (filled === true) {
            ctx.fill();
        } else {
            ctx.lineWidth = data.stroke;
            ctx.stroke();
        }
        ctx.closePath();
    }

    line(ctx: SKRSContext2D, data: LazyCanvasLayer) {
        ctx.beginPath();
        ctx.save();
        ctx.translate((data.points[0].x + data.points[1].x) / 2, (data.points[0].y + data.points[1].y) / 2);
        ctx.rotate((Math.PI/180) * data.angle);
        ctx.translate(-((data.points[0].x + data.points[1].x) / 2), -((data.points[0].y + data.points[1].y) / 2));
        ctx.lineWidth = data.stroke;
        if (data.lineDash) ctx.setLineDash(data.lineDash);
        ctx.moveTo(data.points[0].x, data.points[0].y);
        ctx.lineTo(data.points[1].x, data.points[1].y);
        ctx.stroke();
        ctx.restore();
        ctx.closePath();
    }

    textRender(ctx: SKRSContext2D, data: LazyCanvasLayer) {
        ctx.beginPath();
        ctx.save();
        if (data.multiline) {
            ctx.translate(data.x + data.width / 2, data.y + data.height / 2);
            ctx.rotate((Math.PI/180) * data.angle);
            ctx.translate(-(data.x + data.width / 2), -(data.y + data.height / 2));
            ctx.textAlign = data.align;
            if (data.baseline) ctx.textBaseline = data.baseline;
            if (data.direction) ctx.direction = data.direction;
            ctx = drawMultilineText(ctx, data.text, {
                rect: {
                    x: data.x,
                    y: data.y,
                    width: data.width,
                    height: data.height
                },
                font: data.font,
                style: data.weight,
                lineHeight: 1,
                minFontSize: 1,
                maxFontSize: Number(data.size),
                stroke: !data.fill
            })
        } else {
            if (data.align === "center") {
                ctx.translate(data.x, data.y);
                ctx.rotate((Math.PI/180) * data.angle);
                ctx.translate(-data.x, -data.y);
            } else if (data.align === "left" || data.align === "start") {
                ctx.translate(data.x + (data.size * data.text.length) / 2, data.y);
                ctx.rotate((Math.PI/180) * data.angle);
                ctx.translate(-(data.x + (data.size * data.text.length) / 2), -data.y);
            } else if (data.align === "right" || data.align === "end") {
                ctx.translate(data.x - (data.size * data.text.length) / 2, data.y);
                ctx.rotate((Math.PI/180) * data.angle);
                ctx.translate(-(data.x - (data.size * data.text.length) / 2), -data.y);
            }
            ctx.font = `${data.weight} ${Number(data.size)}px ${data.font}`;
            ctx.textAlign = data.align;
            if (data.baseline) ctx.textBaseline = data.baseline;
            if (data.direction) ctx.direction = data.direction;
            if (data.fill) {
                ctx.fillText(data.text, data.x, data.y, data.width);
            } else {
                ctx.strokeText(data.text, data.x, data.y, data.width);
            }
        }
        ctx.restore();
        ctx.closePath();
    }

    async filterApply(image: any, filter: LazyCanvasFilter) {
        if (filter) {
            switch (filter.type) {
                case "grayscale":
                    image = await image.grayscale();
                    break;
                case "blur":
                    if (!filter.option) {
                        filter.option = 3;
                        LazyLog.log(`Value for filter ${filter.type} not found, used default value (${filter.option})`, "warn");
                    }
                    image = await image.blur(filter.option);
                    break;
                case "gaussian":
                    if (!filter.option) {
                        filter.option = 3;
                        LazyLog.log(`Value for filter ${filter.type} not found, used default value (${filter.option})`, "warn");
                    }
                    image = await image.gaussian(filter.option);
                    break;
                case "invert":
                    image = await image.invert();
                    break;
                case "sepia":
                    image = await image.sepia();
                    break;
                case "brightness":
                    if (!filter.option) {
                        filter.option = 0;
                        LazyLog.log(`Value for filter ${filter.type} not found, used default value (${filter.option})`, "warn");
                    }
                    image = await image.brightness(filter.option);
                    break;
                case "contrast":
                    if (!filter.option) {
                        filter.option = 0;
                        LazyLog.log(`Value for filter ${filter.type} not found, used default value (${filter.option})`, "warn");
                    }
                    image = await image.contrast(filter.option);
                    break;
                case "normalize":
                    image = await image.normalize();
                    break;
                case "dither565":
                    image = await image.dither565();
                    break;
            }
        }
    }

    arc(ctx: SKRSContext2D, data: LazyCanvasLayer, filled = true) {
        ctx.beginPath();
        ctx.save();
        ctx.translate(data.x, data.y);
        ctx.rotate((Math.PI/180) * data.angle);
        ctx.translate(-data.x, -data.y);
        ctx.arc(data.x, data.y, data.radius, data.angles[0], data.angles[1], data.clockwise);
        if (filled) {
            ctx.fill();
        } else {
            if (data.stroke) ctx.lineWidth = data.stroke;
            ctx.stroke();
        }
        ctx.restore();
        ctx.closePath();
    }

    arcTo(ctx: SKRSContext2D, data: LazyCanvasLayer) {
        ctx.beginPath();
        ctx.save();
        ctx.translate((data.points[0].x + data.points[2].x), (data.points[0].y + data.points[2].y));
        ctx.rotate((Math.PI/180) * data.angle);
        ctx.translate(-(data.points[0].x + data.points[2].x), -(data.points[0].y + data.points[2].y));
        ctx.moveTo(data.points[0].x, data.points[0].y);
        ctx.lineWidth = data.stroke;
        ctx.arcTo(data.points[1].x, data.points[1].y, data.points[2].x, data.points[2].y, data.radius);
        ctx.stroke();
        ctx.restore();
        ctx.closePath();
    }

    bezierCurve(ctx: SKRSContext2D, data: LazyCanvasLayer) {
        ctx.beginPath();
        ctx.save();
        ctx.translate(data.points[0].x, data.points[0].y);
        ctx.rotate((Math.PI/180) * data.angle);
        ctx.translate(-data.points[0].x, -data.points[0].y);
        ctx.moveTo(data.points[0].x, data.points[0].y);
        ctx.bezierCurveTo(data.controlPoints[0].x, data.controlPoints[0].y, data.controlPoints[1].x, data.controlPoints[1].y, data.points[1].x, data.points[1].y);
        if (data.stroke) ctx.lineWidth = data.stroke;
        ctx.stroke();
        ctx.restore();
        ctx.closePath();
    }

    quadraticCurve(ctx: SKRSContext2D, data: LazyCanvasLayer) {
        ctx.beginPath();
        ctx.save();
        ctx.translate(data.points[0].x, data.points[0].y);
        ctx.rotate((Math.PI/180) * data.angle);
        ctx.translate(-data.points[0].x, -data.points[0].y);
        ctx.moveTo(data.points[0].x, data.points[0].y);
        ctx.quadraticCurveTo(data.controlPoint.x, data.controlPoint.y, data.points[1].x, data.points[1].y);
        if (data.stroke) ctx.lineWidth = data.stroke;
        ctx.stroke();
        ctx.restore();
        ctx.closePath();
    }

    async patternRender(ctx: SKRSContext2D, data: LazyCanvasPattern) {
        return new Promise(async function(resolve: (arg0: CanvasPattern | null) => any, reject: any) {
            try {
                if (data.pattern.type === "image") {
                    let image = await lazyLoadImage(data.pattern.data);
                    // @ts-ignore
                    return resolve(ctx.createPattern(image, data.patternType));
                } else if (data.pattern.type === "canvas") {
                    let lazy = data.pattern.data;
                    // @ts-ignore
                    lazy.renderImage().then(async (pattern) => {
                        //await saveFile(pattern, 'png', 'pattern')
                        let image = await lazyLoadImage(pattern);
                        //console.log(image)
                        //console.log(ctx.createPattern(image, data.patternType));
                        return resolve(ctx.createPattern(image, data.patternType));
                    });
                }
            } catch (e) {
                LazyLog.log(String(e), "error");
                // @ts-ignore
                return reject(ctx.createPattern(await jimp.read(String(this.data.errorImage)), data.patternType));
            }
        }.bind(this));
    }

    async colorRender(ctx: SKRSContext2D, data: any): Promise<string | CanvasPattern | CanvasGradient | any> {
        let col;
        if (typeof data === 'object' && data.toJSON().type === 'pattern') {
            // @ts-ignore
            col = await this.patternRender(ctx, data.toJSON());
        }
        else col = await color(ctx, data);

        return col;
    }

    async renderImage(WhatINeed: StringRenderOutput | RenderOutput = "buffer"): Promise<NodeJS.ArrayBufferView | SKRSContext2D | undefined> {
            try {
                // @ts-ignore
                let canvas = createCanvas(this.data.width, this.data.height);
                let ctx = canvas.getContext("2d");

                // @ts-ignore
                for (const data of this.data.layers) {
                    if (data.globalComposite) ctx.globalCompositeOperation = data.globalComposite;
                    else ctx.globalCompositeOperation = "source-over";

                    ctx.beginPath();

                    if (data.alpha) {
                        ctx.globalAlpha = data.alpha;
                    } else {
                        ctx.globalAlpha = 1;
                    }

                    if (data.shadow && data.shadow.shadowColor) {
                        ctx.shadowColor = await this.colorRender(ctx, data.shadow.shadowColor);
                        if (data.shadow.shadowBlur) ctx.shadowBlur = data.shadow.shadowBlur;
                        if (data.shadow.shadowOffsetX) ctx.shadowOffsetX = data.shadow.shadowOffsetX;
                        if (data.shadow.shadowOffsetY) ctx.shadowOffsetY = data.shadow.shadowOffsetY;
                    }

                    if (data.fill !== undefined) {
                        let fill;

                        fill = await this.colorRender(ctx, data.color);

                        //LazyLog.log(fill)

                        if (data.fill) ctx.fillStyle = fill;
                        else ctx.strokeStyle = fill;
                    }

                    if (!data.angle) data.angle = 0;

                    let image;
                    switch (data.type) {
                        case "circle":
                            this.circle(ctx, data, data.fill);
                            // data = { x: 10, y: 10, width: 100, stroke: null, color: "red", filled: true }
                            break;
                        case "ellipse":
                            this.ellipse(ctx, data, data.fill);
                            // data = { x: 10, y: 10, width: 100, height: 50, radius: 30, stroke: null, color: "red", filled: true }
                            break;
                        case "square":
                            this.square(ctx, data, data.fill);
                            // data = { x: 10, y: 10, width: 100, stroke: null, color: "red", filled: true }
                            break;
                        case "rectangle":
                            this.rectangle(ctx, data, data.fill);
                            // data = { x: 10, y: 10, width: 100, height: 50, stroke: null, color: "red", filled: true }
                            break;
                        case "line":
                            this.line(ctx, data);
                            // data = { points: [{ x: 10, y: 10 }, { x: 100, y: 100 }], stroke: 1, color: "red" }
                            break;
                        case "ellipseimage":
                            ctx.beginPath();
                            try {
                                if (typeof data.image === "object") {
                                    // @ts-ignore
                                    image = await jimp.read(data.image)
                                }
                                else image = await jimp.read(String(data.image));
                            } catch (e) {
                                LazyLog.log(e + `\nTry to load the error image`, "warn")
                                // @ts-ignore
                                if (!this.data.errorImage) {
                                    // @ts-ignore
                                    image = await jimp.read(String(this.data.errorImage));
                                }
                            }

                            if (data.filter) await this.filterApply(image, data.filter.toJSON());

                            ctx.save();
                            ctx.translate(data.x + data.width / 2, data.y + data.height / 2);
                            ctx.rotate((Math.PI/180) * data.angle);
                            ctx.translate(-(data.x + data.width / 2), -(data.y + data.height / 2));

                            // @ts-ignore
                            image = await image.getBufferAsync('image/png');

                            image = await loadImage(image);
                            this.clipper(ctx, image, data.x, data.y, data.width, data.height, data.radius);
                            ctx.restore();
                            ctx.closePath();
                            // data = { x: 10, y: 10, width: 100, height: 50, radius: 30, image: "url" }
                            break;
                        case "image":
                            ctx.beginPath();
                            try {
                                // @ts-ignore
                                if (typeof data.image === "object") image = await jimp.read(data.image)
                                else image = await jimp.read(String(data.image));
                            } catch (e) {
                                LazyLog.log(e + `\nTry to load the error image`, "warn")
                                if (!this.data.errorImage) {
                                    image = await jimp.read(String(this.data.errorImage));
                                }
                            }
                            if (data.filter) await this.filterApply(image, data.filter.toJSON());

                            ctx.save();
                            ctx.translate(data.x + data.width / 2, data.y + data.height / 2);
                            ctx.rotate((Math.PI/180) * data.angle);
                            ctx.translate(-(data.x + data.width / 2), -(data.y + data.height / 2));

                            // @ts-ignore
                            image = await image.getBufferAsync('image/png');

                            image = await loadImage(image);
                            ctx.drawImage(image, data.x, data.y, data.width, data.height);
                            ctx.restore();
                            ctx.closePath();
                            // data = { x: 10, y: 10, w: 100, h: 50, image: "url" }
                            break;
                        case "text":
                            this.textRender(ctx, data);
                            // data = { x: 10, y: 10, text: "Hello World", size: 20, color: "red", font: "Arial", align: "center", style: "bold", multiline: false, width: 100, height: 50 }
                            break;
                        case "ngon":
                            this.ngon(ctx, data, data.fill);
                            // data = { points: [{ x: 10, y: 10 }, { x: 100, y: 100 }, { x: 50, y: 50 }], color: "red", filled: true }
                            break;
                        case "arc":
                            this.arc(ctx, data, data.fill);
                            // data = { x: 10, y: 10, radius: 100, angles: [ 0 , 180 ], color: "red" }
                            break;
                        case "arcto":
                            this.arcTo(ctx, data);
                            break;
                        case "bezier":
                            this.bezierCurve(ctx, data);
                            break;
                        case "quadratic":
                            this.quadraticCurve(ctx, data);
                            break;
                        default:
                            if (this.data.methods.find(m => m.name === data.type)) {
                                let method = this.data.methods.find(m => m.name === data.type);
                                // @ts-ignore
                                if (method.method[Symbol.toStringTag] === 'AsyncFunction') {
                                    // @ts-ignore
                                    await method.method(ctx, data);
                                } else {
                                    // @ts-ignore
                                    method.method(ctx, data);
                                }
                            } else {
                                LazyLog.log(`Method for ${data.type} not found`, "warn");
                            }
                            break;
                    }
                    if (data.shadow && data.shadow.shadowColor) {
                        ctx.shadowColor = "transparent";
                        ctx.shadowOffsetX = 0;
                        ctx.shadowOffsetY = 0;
                    }
                    ctx.closePath();
                }

                if (WhatINeed === 'buffer' || WhatINeed === RenderOutput.Buffer) return canvas.toBuffer('image/png');
                else if (WhatINeed === 'ctx' || WhatINeed === RenderOutput.Context) return ctx;
            } catch (e: any) {
                LazyLog.log(e, "error");
                return;
            }
    }
}