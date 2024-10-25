import {
    createCanvas,
    loadImage,
    GlobalFonts,
    SKRSContext2D,
    SvgExportFlag,
    Canvas,
    Path2D
} from '@napi-rs/canvas';
import * as jimp from 'jimp';
import { resolve } from 'path';
import { color, lazyLoadImage, drawMultilineText, matrix } from './utils/utils';
import { LazyCanvasPlugin } from './types/LazyCanvasPlugin';
import { LazyCanvasData } from './types/LazyCanvasData';
import { LazyCanvasLayer } from "./types/LazyCanvasLayer";
import { LazyError, LazyLog } from "./types/LazyUtils";
import { LazyCanvasPattern } from "./types/LazyCanvasPattern";
import { LazyCanvasFilter } from "./types/LazyCanvasFilter";
import { Font } from "./utils/Font";``
import { BaseMethod } from "./api/BaseMethod";
import { RenderOutput, StringRenderOutput } from "./types/enums"; //ImageTransform, StringImageTransform
import { Path2DLayer } from "./structures/Path2DLayer";
import { BaseLayer } from "./structures/BaseLayer";
import {
    Base,
    Arc,
    Circle,
    Ellipse,
    Square,
    Rectangle,
    Ngon,
    Line,
    Text,
    ArcTo,
    Bezier,
    Quadratic,
    EllipseImage,
    Image
} from "./index";
//import {
//    vectorize,
//    ColorMode,
//    Hierarchical,
//    PathSimplifyMode,
//} from '@neplex/vectorizer';

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

    public data: LazyCanvasData;
    public plugins?: LazyCanvasPlugin[];
    private loadedData: boolean;

    constructor(options?: { plugins?: LazyCanvasPlugin[], data?: LazyCanvasData }) {
        this.data = options?.data ? { ...options.data } as LazyCanvasData : {
            layers: [],
            methods: [],
            width: 0,
            height: 0,
            errorImage: null,
            structureType: "canvas"
        } as LazyCanvasData;
        this.plugins = options?.plugins;
        this.loadedData = false;

        this.plugins?.forEach(plugin => {
            if (!(plugin instanceof LazyCanvasPlugin)) {
                throw new LazyError("Invalid plugin provided");
            }
            plugin.onload?.(this);
        });
    }

    /**
     * @param data - The main array with all data
     * If you want to create a new canvas, you can use the createNewCanvas method
     */
    public setData(data: LazyCanvasData) {
        if (!data) throw new LazyError("No data provided");
        this.data = data;
        this.loadedData = true;
        return this;
    }

    /**
     * @param width - The width of the canvas
     * @param height - The height of the canvas
     * Creates a new canvas with the provided width and height
     */
    public createNewCanvas(width: number, height: number) {
        if (!width || !height) throw new LazyError("No width or height provided");
        this.data.width = width;
        this.data.height = height;
        this.loadedData = false;
        return this;
    }

    public addLayers(...layers: Partial<BaseLayer<Base> | Path2DLayer>[]) {
        if (!layers.length) throw new LazyError("No layers data provided");
        layers.forEach(layer => {
            if (!layer) throw new LazyError("No layer provided");
            // @ts-ignore
            if (layer.toJSON().id && this.data.layers.some(l => l.toJSON().id === layer.toJSON().id)) {
                throw new LazyError("Layer with this id already exists");
            }
            this.data.layers.push(layer as LazyCanvasLayer);
        });
        return this;
    }

    public removeLayer(id: number | string) {
        if (!id) throw new LazyError("No id provided");
        if (typeof id === "string") {
            this.data.layers = this.data.layers.filter(l => l.toJSON().id !== id);
        } else {
            this.data.layers.splice(id, 1);
        }
        return this;
    }

    public moveLayer(id: number | string, to: number) {
        if (!id || to === undefined) throw new LazyError("Invalid id or position");
        const layer = this.getLayer(id);
        if (!layer) throw new LazyError("Layer not found");

        this.data.layers = this.data.layers.filter(l => l.toJSON().id !== id);
        this.data.layers.splice(to, 0, layer);
        return this;
    }

    public getLayer(id: number | string): LazyCanvasLayer | Path2DLayer | undefined {
        if (!id) throw new LazyError("No id provided");
        return typeof id === "string"
            ? this.data.layers.find(l => l.toJSON().id === id)
            : this.data.layers[id];
    }


    public getIndexOfLayer(id: string): number {
        if (!id) throw new LazyError("No id provided");
        const layer = this.data.layers.find(l => l.toJSON().id === id);
        return layer ? this.data.layers.indexOf(layer) : -1;
    }

    public clearCanvas() {
        this.data.layers = [];
        return this;
    }

    public setName(name: string) {
        if (!name) throw new LazyError("No name provided");
        this.data.name = name;
        return this;
    }

    public setDescription(description: string) {
        if (!description) throw new LazyError("No description provided");
        this.data.description = description;
        return this;
    }

    public setEmoji(emoji: string) {
        if  (!emoji) throw new LazyError("No emoji provided");
        this.data.emoji = emoji;
        return this;
    }

    public getData() {
        return { ...this.data };
    }

    public loadFonts(...fonts: Font[]) {
        if (!fonts.length) throw new LazyError("No fonts provided");
        fonts.forEach(font => {
            const { path, family, weight } = font.toJSON();
            if (!path || !family || !weight) throw new LazyError("Incomplete font data");
            GlobalFonts.registerFromPath(resolve(path), family);
        });
        return this;
    }

    public set404Image(image: string) {
        if (!image) throw new LazyError("No image provided");
        this.data.errorImage = image;
        return this;
    }

    public loadMethods(...methods: BaseMethod[]) {
        if (!methods.length) throw new LazyError("No methods provided");
        methods.forEach(method => {
            const { name, method: fn } = method.toJSON();
            if (!name || !fn) throw new LazyError("Incomplete method data");
            this.data.methods.push({ name, method: fn });
        });
        return this;
    }

    public toJSON() {
        return { ...this.data };
    }

//    public setImageTransform(transform: ImageTransform | StringImageTransform) {
//        if (!transform) throw new LazyError("No transform method provided");
//        this.imageTransform = transform;
//        return this;
//    }

    /** @private */
    private clipper(ctx: SKRSContext2D, img: any, x: number, y: number, w: number, h: number, r: number){
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

    /** @private */
    private fillRoundedRect(ctx: SKRSContext2D, x: number, y: number, w: number, h: number, r: number){
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

    /** @private */
    private outerlineRounded(ctx: SKRSContext2D, x: number, y: number, w: number, h: number, r: number, s = 1){
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

    /** @private */
    private circle(ctx: SKRSContext2D, data: Circle, filled = true) {
        ctx.beginPath();
        let dataCopy = this.centring(data) as Circle;
        ctx.save()
        this.rotate(ctx, dataCopy)
        if (dataCopy.transform.matrix) matrix(ctx, dataCopy.transform.matrix);
        if (dataCopy.transform.scale) ctx.scale(dataCopy.transform.scale.x, dataCopy.transform.scale.y);
        if (dataCopy.transform.translate) ctx.translate(dataCopy.transform.translate.x, dataCopy.transform.translate.y);
        if (filled === true) {
            this.fillRoundedRect(ctx, dataCopy.x, dataCopy.y, dataCopy.radius * 2, dataCopy.radius * 2, dataCopy.radius);
        } else {
            this.outerlineRounded(ctx, dataCopy.x, dataCopy.y, dataCopy.radius * 2, dataCopy.radius * 2, dataCopy.radius, dataCopy.stroke);
            ctx.lineWidth = 1;
        }
        ctx.restore()
        ctx.closePath();
    }

    /** @private */
    private ellipse(ctx: SKRSContext2D, data: Ellipse, filled = true) {
        ctx.beginPath();
        let dataCopy = this.centring(data) as Ellipse;
        ctx.save();
        this.rotate(ctx, dataCopy)
        if (dataCopy.transform.matrix) matrix(ctx, dataCopy.transform.matrix);
        if (dataCopy.transform.scale) ctx.scale(dataCopy.transform.scale.x, dataCopy.transform.scale.y);
        if (dataCopy.transform.translate) ctx.translate(dataCopy.transform.translate.x, dataCopy.transform.translate.y);
        if (filled === true) {
            this.fillRoundedRect(ctx, dataCopy.x, dataCopy.y, dataCopy.width, dataCopy.height, dataCopy.radius);
        } else {
            this.outerlineRounded(ctx, dataCopy.x, dataCopy.y, dataCopy.width, dataCopy.height, dataCopy.radius, dataCopy.stroke);
            ctx.lineWidth = 1;
        }
        ctx.restore();
        ctx.closePath();
    }

    /** @private */
    private square(ctx: SKRSContext2D, data: Square, filled = true) {
        ctx.beginPath();
        let dataCopy = this.centring(data) as Square;
        ctx.save();
        this.rotate(ctx, dataCopy)
        if (dataCopy.transform.matrix) matrix(ctx, dataCopy.transform.matrix);
        if (dataCopy.transform.scale) ctx.scale(dataCopy.transform.scale.x, dataCopy.transform.scale.y);
        if (dataCopy.transform.translate) ctx.translate(dataCopy.transform.translate.x, dataCopy.transform.translate.y);
        if (filled === true) {
            ctx.fillRect(dataCopy.x, dataCopy.y, dataCopy.width, dataCopy.width);
        } else {
            ctx.lineWidth = dataCopy.stroke;
            ctx.strokeRect(dataCopy.x, dataCopy.y, dataCopy.width, dataCopy.width);
            ctx.lineWidth = 1;
        }
        ctx.restore();
        ctx.closePath();
    }

    /** @private */
    private rectangle(ctx: SKRSContext2D, data: Rectangle, filled = true) {
        ctx.beginPath();
        let dataCopy = this.centring(data) as Rectangle;
        ctx.save();
        this.rotate(ctx, dataCopy)
        if (dataCopy.transform.matrix) matrix(ctx, dataCopy.transform.matrix);
        if (dataCopy.transform.scale) ctx.scale(dataCopy.transform.scale.x, dataCopy.transform.scale.y);
        if (dataCopy.transform.translate) ctx.translate(dataCopy.transform.translate.x, dataCopy.transform.translate.y);
        if (filled) {
            ctx.fillRect(dataCopy.x, dataCopy.y, dataCopy.width, dataCopy.height);
        } else {
            ctx.lineWidth = dataCopy.stroke;
            ctx.strokeRect(dataCopy.x, dataCopy.y, dataCopy.width, dataCopy.height);
            ctx.lineWidth = 1;
        }
        ctx.restore();
        ctx.closePath();
    }

    /** @private */
    private ngon(ctx: SKRSContext2D, data: Ngon, filled = true) {
        ctx.beginPath();
        ctx.save();
        this.rotate(ctx, data)
        if (data.transform.rotate) ctx.moveTo(data.x + data.radius * Math.cos(0 + data.transform.rotate), data.y + data.radius * Math.sin(0 + data.transform.rotate));
        else ctx.moveTo(data.x + data.radius * Math.cos(0), data.y + data.radius * Math.sin(0));
        ctx.lineJoin = "miter";
        for (let i = 1; i < data.sides + 2; i++) {
            if (data.transform.rotate) ctx.lineTo(data.x + data.radius * Math.cos(i * 2 * Math.PI / data.sides + data.transform.rotate), data.y + data.radius * Math.sin(i * 2 * Math.PI / data.sides + data.transform.rotate));
            else ctx.lineTo(data.x + data.radius * Math.cos(i * 2 * Math.PI / data.sides), data.y + data.radius * Math.sin(i * 2 * Math.PI / data.sides));
        }
        ctx.lineJoin = "round";
        if (filled === true) {
            ctx.fill();
        } else {
            ctx.lineWidth = data.stroke;
            ctx.stroke();
            ctx.lineWidth = 1;
        }
        ctx.restore();
        ctx.closePath();
    }

    /** @private */
    private line(ctx: SKRSContext2D, data: Line) {
        ctx.beginPath();
        ctx.save();
        this.rotate(ctx, data)
        ctx.lineWidth = data.stroke;
        if (data.lineDash) ctx.setLineDash(data.lineDash);
        ctx.moveTo(data.points[0].x, data.points[0].y);
        ctx.lineTo(data.points[1].x, data.points[1].y);
        if (data.transform.matrix) matrix(ctx, data.transform.matrix);
        if (data.transform.translate) ctx.translate(data.transform.translate.x, data.transform.translate.y);
        ctx.stroke();
        ctx.restore();
        ctx.closePath();
    }

    /** @private */
    private textRender(ctx: SKRSContext2D, data: Text) {
        ctx.beginPath();
        ctx.save();
        this.rotate(ctx, data)
        if (data.transform.matrix) matrix(ctx, data.transform.matrix);
        if (data.transform.translate) ctx.translate(data.transform.translate.x, data.transform.translate.y);
        if (data.multiline) {
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

    /** @private */
    private async filterApply(image: any, filter: LazyCanvasFilter) {
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

    /** @private */
    private arc(ctx: SKRSContext2D, data: Arc, filled = true) {
        ctx.beginPath();
        ctx.save();
        this.rotate(ctx, data)
        ctx.arc(data.x, data.y, data.radius, data.angles[0], data.angles[1], data.clockwise);
        if (data.transform.matrix) matrix(ctx, data.transform.matrix);
        if (data.transform.translate) ctx.translate(data.transform.translate.x, data.transform.translate.y);
        if (filled) {
            ctx.fill();
        } else {
            if (data.stroke) ctx.lineWidth = data.stroke;
            ctx.stroke();
        }
        ctx.restore();
        ctx.closePath();
    }

    /** @private */
    private arcTo(ctx: SKRSContext2D, data: ArcTo) {
        ctx.beginPath();
        ctx.save();
        this.rotate(ctx, data)
        ctx.moveTo(data.points[0].x, data.points[0].y);
        ctx.lineWidth = data.stroke;
        ctx.arcTo(data.points[1].x, data.points[1].y, data.points[2].x, data.points[2].y, data.radius);
        if (data.transform.matrix) matrix(ctx, data.transform.matrix);
        if (data.transform.translate) ctx.translate(data.transform.translate.x, data.transform.translate.y);
        ctx.stroke();
        ctx.restore();
        ctx.closePath();
    }

    /** @private */
    private bezierCurve(ctx: SKRSContext2D, data: Bezier) {
        ctx.beginPath();
        ctx.save();
        this.rotate(ctx, data)
        ctx.moveTo(data.points[0].x, data.points[0].y);
        ctx.bezierCurveTo(data.controlPoints[0].x, data.controlPoints[0].y, data.controlPoints[1].x, data.controlPoints[1].y, data.points[1].x, data.points[1].y);
        if (data.transform.matrix) matrix(ctx, data.transform.matrix);
        if (data.transform.translate) ctx.translate(data.transform.translate.x, data.transform.translate.y);
        if (data.stroke) ctx.lineWidth = data.stroke;
        ctx.stroke();
        ctx.restore();
        ctx.closePath();
    }

    /** @private */
    private quadraticCurve(ctx: SKRSContext2D, data: Quadratic) {
        ctx.beginPath();
        ctx.save();
        this.rotate(ctx, data)
        ctx.moveTo(data.points[0].x, data.points[0].y);
        ctx.quadraticCurveTo(data.controlPoint.x, data.controlPoint.y, data.points[1].x, data.points[1].y);
        if (data.transform.matrix) matrix(ctx, data.transform.matrix);
        if (data.transform.translate) ctx.translate(data.transform.translate.x, data.transform.translate.y);
        if (data.stroke) ctx.lineWidth = data.stroke;
        ctx.stroke();
        ctx.restore();
        ctx.closePath();
    }

    /** @private */
    private async image(ctx: SKRSContext2D, data: Image) {
        ctx.beginPath();
        let dataCopy = this.centring(data) as Image;
        let image;
        try {
            // @ts-ignore
            if (typeof dataCopy.image === "object") image = await jimp.read(dataCopy.image)
            else image = await jimp.read(String(dataCopy.image));
        } catch (e) {
            LazyLog.log(e + `\nTry to load the error image`, "warn")
            if (this.data.errorImage) {
                image = await jimp.read(String(this.data.errorImage));
            }
        }
        if (dataCopy.resize && image) {
            image = image.resize(dataCopy.width, dataCopy.height);
        }
        if (dataCopy.filter) await this.filterApply(image, dataCopy.filter.toJSON());

        ctx.save();
        this.rotate(ctx, dataCopy)
        if (dataCopy.transform.matrix) matrix(ctx, dataCopy.transform.matrix);
        if (dataCopy.transform.scale) ctx.scale(dataCopy.transform.scale.x, dataCopy.transform.scale.y);
        if (dataCopy.transform.translate) ctx.translate(dataCopy.transform.translate.x, dataCopy.transform.translate.y);

        // @ts-ignore
        image = await image.getBufferAsync('image/png');

        if (data.path) {
            let path = new Path2D(data.path);
            ctx.clip(path);
        }
        image = await loadImage(image);
        ctx.drawImage(image, dataCopy.x, dataCopy.y, dataCopy.width, dataCopy.height);
        ctx.restore();
        ctx.closePath();
    }

    /** @private */
    private async ellipseImage(ctx: SKRSContext2D, data: EllipseImage) {
        ctx.beginPath();
        let dataCopy = this.centring(data) as EllipseImage;
        let image;
        try {
            if (typeof dataCopy.image === "object") {
                // @ts-ignore
                image = await jimp.read(dataCopy.image)
            }
            else image = await jimp.read(String(dataCopy.image));
        } catch (e) {
            LazyLog.log(e + `\nTry to load the error image`, "warn")
            // @ts-ignore
            if (this.data.errorImage) {
                // @ts-ignore
                image = await jimp.read(String(this.data.errorImage));
            }
        }
        if (dataCopy.resize && image) {
            image = image.resize(dataCopy.width, dataCopy.height);
        }
        if (dataCopy.filter) await this.filterApply(image, dataCopy.filter.toJSON());

        ctx.save();
        this.rotate(ctx, dataCopy)
        if (dataCopy.transform.matrix) matrix(ctx, dataCopy.transform.matrix);
        if (dataCopy.transform.scale) ctx.scale(dataCopy.transform.scale.x, dataCopy.transform.scale.y);
        if (dataCopy.transform.translate) ctx.translate(dataCopy.transform.translate.x, dataCopy.transform.translate.y);

        // @ts-ignore
        image = await image.getBufferAsync('image/png');

        image = await loadImage(image);
        this.clipper(ctx, image, dataCopy.x, dataCopy.y, dataCopy.width, dataCopy.height, dataCopy.radius);
        ctx.restore();
        ctx.closePath();
    }

//    /** @private */
//    private async imageTranslate(image: Buffer, dataCopy: LazyCanvasLayer) {
//        if (this.imageTransform === 'vector') {
//            let svg = await vectorize(image, {
//                colorMode: ColorMode.Color,
//                colorPrecision: 6,
//                filterSpeckle: 4,
//                spliceThreshold: 45,
//                cornerThreshold: 60,
//                hierarchical: Hierarchical.Stacked,
//                mode: PathSimplifyMode.Spline,
//                layerDifference: 5,
//                lengthThreshold: 5,
//                maxIterations: 2,
//                pathPrecision: 5,
//            });
//
//            let newImage = new Image()
//            newImage.src = Buffer.from(svg)
//
//            newImage.width = dataCopy.width
//            newImage.height = dataCopy.height
//        }
//        return image
//    }

    /** @private */
    private async patternRender(ctx: SKRSContext2D, data: LazyCanvasPattern) {
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

    /** @private */
    private async colorRender(ctx: SKRSContext2D, data: any): Promise<string | CanvasPattern | CanvasGradient | any> {
        let col;
        if (typeof data === 'object' && data.data.type === 'pattern') {
            // @ts-ignore
            col = await this.patternRender(ctx, data.toJSON());
        }
        else col = await color(ctx, data);

        return col;
    }

    /** @private */
    private outlineCenter(dataCopy: Circle | Ngon | Ellipse | EllipseImage | Rectangle | Square | Image): Circle | Ngon | Ellipse | EllipseImage | Rectangle | Square | Image {
        if (dataCopy.centering === 'legacy') {
            switch (dataCopy.type) {
                case "circle":
                    if (!('radius' in dataCopy)) throw new LazyError("No radius provided");
                    switch (dataCopy.outline.type) {
                        case "outer":
                            dataCopy.radius += dataCopy.outline.stroke;
                            dataCopy.x -= dataCopy.outline.stroke;
                            dataCopy.y -= dataCopy.outline.stroke;
                            break;
                        case "inner":
                            dataCopy.radius -= dataCopy.outline.stroke / 2;
                            dataCopy.x += dataCopy.outline.stroke / 2;
                            dataCopy.y += dataCopy.outline.stroke / 2;
                            break;
                        case "center":
                            dataCopy.radius += dataCopy.outline.stroke / 2;
                            dataCopy.x -= dataCopy.outline.stroke / 2;
                            dataCopy.y -= dataCopy.outline.stroke / 2;
                            break;
                    }
                    break;
                case "ngon":
                    if (!('radius' in dataCopy)) throw new LazyError("No radius provided");
                    switch (dataCopy.outline.type) {
                        case "outer":
                            dataCopy.radius += dataCopy.outline.stroke;
                            dataCopy.x -= dataCopy.outline.stroke;
                            dataCopy.y -= dataCopy.outline.stroke;
                            break;
                        case "inner":
                            dataCopy.radius -= dataCopy.outline.stroke;
                            dataCopy.x += dataCopy.outline.stroke;
                            dataCopy.y += dataCopy.outline.stroke;
                            break;
                        case "center":
                            dataCopy.radius += dataCopy.outline.stroke / 2;
                            dataCopy.x -= dataCopy.outline.stroke / 2;
                            dataCopy.y -= dataCopy.outline.stroke / 2;
                            break;
                    }
                    break;
                case "ellipse":
                case "ellipseimage":
                    if (!('width' in dataCopy) || !('height' in dataCopy)) throw new LazyError("No width or height provided");
                    switch (dataCopy.outline.type) {
                        case "outer":
                            dataCopy.width += dataCopy.outline.stroke;
                            dataCopy.height += dataCopy.outline.stroke;
                            dataCopy.x -= (dataCopy.outline.stroke / 4);
                            dataCopy.y -= (dataCopy.outline.stroke / 4);
                            break;
                        case "inner":
                            dataCopy.width -= dataCopy.outline.stroke / 2;
                            dataCopy.height -= dataCopy.outline.stroke / 2;
                            dataCopy.x += (dataCopy.outline.stroke / 4);
                            dataCopy.y += (dataCopy.outline.stroke / 4);
                            break;
                        case "center":
                            dataCopy.width += dataCopy.outline.stroke / 2;
                            dataCopy.height += dataCopy.outline.stroke / 2;
                            dataCopy.x -= (dataCopy.outline.stroke / 4);
                            dataCopy.y -= (dataCopy.outline.stroke / 4);
                            break;
                    }
                    break;
                case "rectangle":
                case "image":
                    if (!('width' in dataCopy) || !('height' in dataCopy)) throw new LazyError("No width or height provided");
                    switch (dataCopy.outline.type) {
                        case "outer":
                            dataCopy.width += dataCopy.outline.stroke;
                            dataCopy.height += dataCopy.outline.stroke;
                            dataCopy.x -= dataCopy.outline.stroke / 2;
                            dataCopy.y -= dataCopy.outline.stroke / 2;
                            break;
                        case "inner":
                            dataCopy.width -= dataCopy.outline.stroke;
                            dataCopy.height -= dataCopy.outline.stroke;
                            dataCopy.x += dataCopy.outline.stroke / 2;
                            dataCopy.y += dataCopy.outline.stroke / 2;
                            break;
                        case "center":
                            dataCopy.width += dataCopy.outline.stroke / 2;
                            dataCopy.height += dataCopy.outline.stroke / 2;
                            dataCopy.x -= dataCopy.outline.stroke / 2;
                            dataCopy.y -= dataCopy.outline.stroke / 2;
                            break;
                    }
                    break;
                case "square":
                    if (!('width' in dataCopy)) throw new LazyError("No width provided");
                    switch (dataCopy.outline.type) {
                        case "outer":
                            dataCopy.width += dataCopy.outline.stroke;
                            dataCopy.x -= dataCopy.outline.stroke;
                            dataCopy.y -= dataCopy.outline.stroke;
                            break;
                        case "inner":
                            dataCopy.width -= dataCopy.outline.stroke;
                            dataCopy.x += dataCopy.outline.stroke / 2;
                            dataCopy.y += dataCopy.outline.stroke / 2;
                            break;
                        case "center":
                            dataCopy.width += dataCopy.outline.stroke / 2;
                            dataCopy.x -= dataCopy.outline.stroke / 2;
                            dataCopy.y -= dataCopy.outline.stroke / 2;
                            break;
                    }
                    break;
            }
        }
        return dataCopy;
    }

    /** @private */
    private async outlineRender(ctx: SKRSContext2D, data: Circle | Ngon | Ellipse | EllipseImage | Rectangle | Square | Image) {
        let dataCopy = { ...data };
        dataCopy.stroke = dataCopy.outline.stroke;
        dataCopy.color = dataCopy.outline.color;
        dataCopy = this.outlineCenter(dataCopy);
        ctx.strokeStyle = await this.colorRender(ctx, dataCopy.color);
        switch (dataCopy.type) {
            case "circle":
                this.circle(ctx, dataCopy as Circle, false);
                break;
            case "ellipse":
                this.ellipse(ctx, dataCopy as Ellipse, false);
                break;
            case "square":
                this.square(ctx, dataCopy as Square, false);
                break;
            case "rectangle":
                this.rectangle(ctx, dataCopy as Rectangle, false);
                break;
            case "ngon":
                this.ngon(ctx, dataCopy as Ngon, false);
                break;
            case "image":
                this.rectangle(ctx, dataCopy as Image, false);
                break;
            case "ellipseimage":
                this.ellipse(ctx, dataCopy as EllipseImage, false);
                break;
            case "text":
                dataCopy.fill = false;
                this.textRender(ctx, dataCopy as unknown as Text);
                break;
            default:
                return;
        }
    }

    /** @private */
    private centring(data: Circle | Ellipse | EllipseImage | Rectangle | Square | Image): Circle | Ellipse | EllipseImage | Rectangle | Square | Image {
        let dataCopy = { ...data };
        if (dataCopy.centering === 'new') {
            switch (dataCopy.type) {
                case "circle":
                    if (!('radius' in dataCopy)) throw new LazyError("No radius provided");
                    dataCopy.x -= dataCopy.radius
                    dataCopy.y -= dataCopy.radius
                    break;
                case "ellipse":
                case "rectangle":
                case "image":
                case "ellipseimage":
                    if (!('width' in dataCopy) || !('height' in dataCopy)) throw new LazyError("No width or height provided");
                    dataCopy.x -= dataCopy.width / 2
                    dataCopy.y -= dataCopy.height / 2
                    break;
                case "square":
                    if (!('width' in dataCopy)) throw new LazyError("No width provided");
                    dataCopy.x -= dataCopy.width / 2
                    dataCopy.y -= dataCopy.width / 2
                    break;
                default:
                    break;
            }
        }
        return dataCopy;
    }

    /** @private */
    private rotate(ctx: SKRSContext2D, data: Ngon | Circle | Ellipse | Rectangle | Square | Image | EllipseImage | Text | Arc | ArcTo | Bezier | Quadratic | Line) {
        if (data.transform.rotate) {
            switch (data.type) {
                case "path2d":
                case "arc":
                case "ngon":
                case "circle":
                    if (!('x' in data) || !('y' in data)) throw new LazyError("No x or y provided");
                    ctx.translate(data.x, data.y);
                    ctx.rotate((Math.PI/180) * data.transform.rotate);
                    ctx.translate(-data.x, -data.y);
                    break;
                case "ellipse":
                case "rectangle":
                case "image":
                case "ellipseimage":
                    if (!('x' in data) || !('y' in data) || !('width' in data) || !('height' in data)) throw new LazyError("No x, y, width or height provided");
                    ctx.translate(data.x + data.width / 2, data.y + data.height / 2);
                    ctx.rotate((Math.PI/180) * data.transform.rotate);
                    ctx.translate(-(data.x + data.width / 2), -(data.y + data.height / 2));
                    break;
                case "square":
                    if (!('x' in data) || !('y' in data) || !('width' in data)) throw new LazyError("No x, y or width provided");
                    ctx.translate(data.x + data.width / 2, data.y + data.width / 2);
                    ctx.rotate((Math.PI/180) * data.transform.rotate);
                    ctx.translate(-(data.x + data.width / 2), -(data.y + data.width / 2));
                    break;
                case "line":
                case "quadratic":
                case "bezier":
                    if (!('points' in data)) throw new LazyError("No points provided");
                    ctx.translate((data.points[0].x + data.points[1].x) / 2, (data.points[0].y + data.points[1].y) / 2);
                    ctx.rotate((Math.PI/180) * data.transform.rotate);
                    ctx.translate(-((data.points[0].x + data.points[1].x) / 2), -((data.points[0].y + data.points[1].y) / 2));
                    break;
                case "arcto":
                    if (!('points' in data)) throw new LazyError("No points provided");
                    ctx.translate((data.points[0].x + data.points[2].x) / 2, (data.points[0].y + data.points[2].y) / 2);
                    ctx.rotate((Math.PI/180) * data.transform.rotate);
                    ctx.translate(-((data.points[0].x + data.points[2].x) / 2), -((data.points[0].y + data.points[2].y) / 2));
                    break;
                case "text":
                    if (!('x' in data) || !('y' in data) || !('multiline' in data)) throw new LazyError("No x, y or multiline provided");
                    if (data.multiline) {
                        ctx.translate(data.x + data.width / 2, data.y + data.height / 2);
                        ctx.rotate((Math.PI/180) * data.transform.rotate);
                        ctx.translate(-(data.x + data.width / 2), -(data.y + data.height / 2));
                    } else {
                        if (data.align === "center") {
                            ctx.translate(data.x, data.y);
                            ctx.rotate((Math.PI/180) * data.transform.rotate);
                            ctx.translate(-data.x, -data.y);
                        } else if (data.align === "left" || data.align === "start") {
                            ctx.translate(data.x + (data.size * data.text.length) / 2, data.y);
                            ctx.rotate((Math.PI/180) * data.transform.rotate);
                            ctx.translate(-(data.x + (data.size * data.text.length) / 2), -data.y);
                        } else if (data.align === "right" || data.align === "end") {
                            ctx.translate(data.x - (data.size * data.text.length) / 2, data.y);
                            ctx.rotate((Math.PI/180) * data.transform.rotate);
                            ctx.translate(-(data.x - (data.size * data.text.length) / 2), -data.y);
                        }
                    }
            }
        }
    }

    public async renderImage(WhatINeed: StringRenderOutput | RenderOutput = "buffer"): Promise<NodeJS.ArrayBufferView | SKRSContext2D | undefined> {
        try {
                let canvas;
                let ctx;
                    if (RenderOutput.SVG === WhatINeed || 'svg' === WhatINeed) {
                        canvas = createCanvas(this.data.width, this.data.height, SvgExportFlag.ConvertTextToPaths);
                        ctx = canvas.getContext("2d");
                    } else {
                        canvas = createCanvas(this.data.width, this.data.height);
                        ctx = canvas.getContext("2d");
                    }


                for (let data of this.data.layers) {
                    if (data instanceof Path2DLayer) {
                        ctx.beginPath();
                        ctx.save();
                        if (data.data.transform.matrix) matrix(ctx, data.data.transform.matrix);
                        if (data.data.transform.scale) ctx.scale(data.data.transform.scale.x, data.data.transform.scale.y);
                        if (data.data.transform.translate) ctx.translate(data.data.transform.translate.x, data.data.transform.translate.y);
                        ctx.globalAlpha = data.data.alpha;
                        let fill;
                        fill = await this.colorRender(ctx, data.data.fillStyle);
                        if (data.data.clipPath) {
                            ctx.save();
                            ctx.clip();
                            ctx.restore();
                        } else if (data.data.filled) {
                            ctx.fillStyle = fill;
                            ctx.fill(data.path2D)
                        } else {
                            if (data.data.lineWidth) ctx.lineWidth = data.data.lineWidth;
                            ctx.strokeStyle = fill;
                            ctx.stroke(data.path2D)
                        }
                        ctx.globalAlpha = 1;
                        ctx.restore();
                        ctx.closePath();
                    } else {
                        if (!this.loadedData) data = data.toJSON();

                        if (data.link) {
                            if (data.link.id) {
                                let layer = this.getLayer(data.link.id);

                                if (!layer) {
                                    LazyLog.log(`Layer with id ${data.link.id} not found`, "warn");
                                    continue;
                                }

                                if (layer instanceof Path2DLayer) throw new LazyError("Path2D is not supported in this method");

                                if (!this.loadedData) layer = layer.toJSON();

                                if (data.link.size) {
                                    if (["circle", "ngon"].includes(layer.type)) {
                                        Object.assign(data, {
                                            radius: layer.radius
                                        });
                                        if (layer.type === "ngon") {
                                            Object.assign(data, {
                                                sides: layer.sides
                                            });
                                        }
                                    } else if (["square"].includes(layer.type)) {
                                        Object.assign(data, {
                                            width: layer.width
                                        });
                                    } else if (["quadratic", "bezier", "arcto", "arc"].includes(layer.type)) {
                                        if (layer.type === "quadratic") {
                                            Object.assign(data, {
                                                controlPoint: layer.controlPoint
                                            });
                                        }
                                        if (layer.type === "bezier") {
                                            Object.assign(data, {
                                                controlPoints: layer.controlPoints
                                            });
                                        }
                                        if (layer.type === "arcto") {
                                            Object.assign(data, {
                                                radius: layer.radius
                                            });
                                        }
                                        if (layer.type === "arc") {
                                            Object.assign(data, {
                                                radius: layer.radius,
                                                angles: layer.angles,
                                                clockwise: layer.clockwise
                                            });
                                        }
                                    } else {
                                        Object.assign(data, {
                                            width: layer.width,
                                            height: layer.height,
                                        });
                                    }
                                }

                                if (data.link.style) {
                                    if (layer.type === "line") {
                                        Object.assign(data, {
                                            lineDash: layer.lineDash
                                        });
                                    } else if (layer.type === "text") {
                                        Object.assign(data, {
                                            baseline: layer.baseline,
                                            direction: layer.direction
                                        });
                                    } else if (!["image", "ellipseimage"].includes(layer.type)) {
                                        Object.assign(data, {
                                            stroke: layer.stroke,
                                            fill: layer.fill,
                                            color: layer.color,
                                            alpha: layer.alpha,
                                        });
                                    } else if (["image", "ellipseimage"].includes(layer.type)) {
                                        Object.assign(data, {
                                            image: layer.image
                                        });
                                    }
                                }

                                if (data.link.position && ["line", "quadratic", "bezier", "arcto"].includes(layer.type)) {
                                    Object.assign(data, {
                                        points: layer.points
                                    });
                                } else if (data.link.position) {
                                    Object.assign(data, {
                                        x: layer.x,
                                        y: layer.y
                                    });
                                }

                                if (data.link.transform) {
                                    Object.assign(data, {
                                        transform: layer.transform
                                    });
                                }

                                if (data.link.shadow) {
                                    Object.assign(data, {
                                        shadow: layer.shadow
                                    });
                                }

                                if (data.link.outline) {
                                    Object.assign(data, {
                                        outline: layer.outline
                                    });
                                }

                                if (data.link.filter) {
                                    Object.assign(data, {
                                        filter: layer.filter
                                    });
                                }

                                if (data.link.globalComposite) {
                                    Object.assign(data, {
                                        globalComposite: layer.globalComposite
                                    });
                                }

                                if (data.link.text) {
                                    Object.assign(data, {
                                        text: layer.text
                                    });
                                }

                                if (data.link.font) {
                                    Object.assign(data, {
                                        font: layer.font
                                    });
                                }
                            }
                        }

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

                            if (data.fill) ctx.fillStyle = fill;
                            else ctx.strokeStyle = fill;
                        }

                        if (!data.transform.rotate) data.transform.rotate = 0;

                        if (!data.centering) data.centering = 'legacy';

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
                                await this.ellipseImage(ctx, data);
                                // data = { x: 10, y: 10, width: 100, height: 50, radius: 30, image: "url" }
                                break;
                            case "image":
                                //console.log(data)
                                await this.image(ctx, data);
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
                                // @ts-ignore
                                if (this.data.methods.find(m => m.name === data.type)) {
                                    // @ts-ignore
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
                        if (data.outline) {
                            if (data.outline.alpha) {
                                ctx.globalAlpha = data.outline.alpha;
                            } else {
                                ctx.globalAlpha = 1;
                            }
                            await this.outlineRender(ctx, data);
                        }
                        ctx.closePath();
                    }
                }
                if ((WhatINeed === 'buffer' || WhatINeed === RenderOutput.Buffer) && canvas instanceof Canvas) return canvas.toBuffer('image/png');
                else if (WhatINeed === 'ctx' || WhatINeed === RenderOutput.Context) return ctx;
                // @ts-ignore
                else if (WhatINeed === 'svg' || WhatINeed === RenderOutput.SVG) return canvas.getContent().toString('utf8');
            } catch (e: any) {
                LazyLog.log(e, "error");
                return;
            }
    }
}
