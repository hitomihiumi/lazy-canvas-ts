import { isValidColor } from  '../utils/utils';
import { LazyCanvasLayer } from "../types/LazyCanvasLayer";
import { Gradient } from "../utils/Gradient";
import { Pattern } from "../utils/Pattern";
import { LazyError } from "../types/LazyUtils";

/**
 * @example
 * const { LazyCanvas, BaseMethod, BaseLayer, isImageUrlValid, isValidColor } = require('@hitomihiumi/lazy-canvas')
 *
 * class ExampleImage extends BaseLayer {
 *   constructor(data = {}) {
 *       super(data)
 *       this.data.type = 'exampleimage' // name of layer type
 *   }
 *
 *   setWidth(width) {
 *       if (!width) throw new Error('Width must be provided')
 *       if (isNaN(width)) throw new Error('Width must be a number')
 *       this.data.width = width
 *       return this
 *   }
 *
 *   setHeight(height) {
 *       if (!height) throw new Error('Height must be provided')
 *       if (isNaN(height)) throw new Error('Height must be a number')
 *       this.data.height = height
 *       return this
 *   }
 *
 *   // Example of function for set image
 *   setImage(image) {
 *       if (!image) throw new Error('Image must be provided')
 *       if (!isImageUrlValid(image)) throw new Error('Image must be a valid URL')
 *       this.data.image = image
 *       return this
 *   }
 * }
 *
 * class ExampleRect extends BaseLayer {
 *   constructor(data = {}) {
 *       super(data)
 *       this.data.type = 'examplerect' // name of layer type
 *   }
 *
 *   setWidth(width) {
 *       if (!width) throw new Error('Width must be provided')
 *       if (isNaN(width)) throw new Error('Width must be a number')
 *       this.data.width = width
 *       return this
 *   }
 *
 *   setHeight(height) {
 *       if (!height) throw new Error('Height must be provided')
 *       if (isNaN(height)) throw new Error('Height must be a number')
 *       this.data.height = height
 *       return this
 *   }
 *
 *   // Example of function for set color
 *   setColor(color) {
 *       if (!color) throw new Error('Color must be provided')
 *       if (!isValidColor(color)) throw new Error('Color must be a string')
 *       this.data.color = color
 *       return this
 *   }
 * }
 *
 * //...
 *
 * const exampleImage = new ExampleImage()
 * .setX(100)
 * .setY(100)
 * .setWidth(200)
 * .setHeight(200)
 * .setImage('https://i.pinimg.com/1200x/f3/32/19/f332192b2090f437ca9f49c1002287b6.jpg')
 *
 * const exampleRect = new ExampleRect()
 * .setX(100)
 * .setY(300)
 * .setWidth(200)
 * .setHeight(200)
 * .setColor('#ff8a8a')
 *
 * const lazy = new LazyCanvas()
 * .addLayers(
 *   exampleImage, exampleRect
 * )
 * //...
 */
export class BaseLayer {

    public data: LazyCanvasLayer;

    constructor(data?: LazyCanvasLayer) {
        this.data = data ? { ...data } : {} as LazyCanvasLayer;
        this.data.angle = 0;
        this.data.structureType = 'layer';
        this.data.fill = false;
        this.data.shadow = {
            shadowColor: 'transparent',
            shadowBlur: 0,
            shadowOffsetX: 0,
            shadowOffsetY: 0
        }
    }

    /**
     * @param {number} x - The x position of the layer
     */
    setX(x: number) {
        if (!x && x !== 0) throw new LazyError('X must be provided');
        if (isNaN(x)) throw new LazyError('X must be a number');
        this.data.x = x;
        return this;
    }

    /**
     * @param {number} y - The y position of the layer
     */
    setY(y: number) {
        if (!y && y !== 0) throw new LazyError('Y must be provided');
        if (isNaN(y)) throw new LazyError('Y must be a number');
        this.data.y = y;
        return this;
    }

    /**
     * @param {string} color - The shadow color for the layer
     */
    setShadowColor(color: string | Gradient | Pattern) {
        if (!color) throw new LazyError('Color must be provided');
        if (!isValidColor(color)) throw new LazyError('Color must be a valid hex color');
        this.data.shadow.shadowColor = color;
        return this;
    }

    /**
     * @param {number} blur - The degree of shadow blur
     */
    setShadowBlur(blur: number) {
        if (!blur && blur !== 0) throw new LazyError('Blur must be provided');
        if (isNaN(blur)) throw new LazyError('Blur must be a number');
        this.data.shadow.shadowBlur = blur;
        return this;
    }

    /**
     * @param {number} offsetX - The X-axis offset of the shadow relative to the layer
     */
    setShadowOffsetX(offsetX: number) {
        if (!offsetX && offsetX !== 0) throw new LazyError('OffsetX must be provided');
        if (isNaN(offsetX)) throw new LazyError('OffsetX must be a number');
        this.data.shadow.shadowOffsetX = offsetX;
        return this;
    }

    /**
     * @param {number} offsetY - The Y-axis offset of the shadow relative to the layer
     */
    setShadowOffsetY(offsetY: number) {
        if (!offsetY && offsetY !== 0) throw new LazyError('OffsetY must be provided');
        if (isNaN(offsetY)) throw new LazyError('OffsetY must be a number');
        this.data.shadow.shadowOffsetY = offsetY;
        return this;
    }

    /**
     * @param {number} alpha - The alpha value of the layer
     */
    setAlpha(alpha: number) {
        if (!alpha && alpha !== 0) throw new LazyError('Alpha must be provided');
        if (isNaN(alpha)) throw new LazyError('Alpha must be a number');
        if (alpha < 0 || alpha > 1) throw new LazyError('Alpha must be between 0 and 1');
        this.data.alpha = alpha;
        return this;
    }

    /**
     * @param {number} angle - The angle of rotation the layer
     */
    setRotation(angle: number) {
        if (!angle && angle !== 0) throw new LazyError('Rotation must be provided');
        if (isNaN(angle)) throw new LazyError('Rotation must be a number');
        this.data.angle = angle;
        return this;
    }

    /**
     * @param {string} operation - The global composite operation of the layer
     */
    setGlobalCompositeOperation(operation: "source-over" | "source-in" | "source-out" | "source-atop" | "destination-over" | "destination-in" | "destination-out" | "destination-atop" | "lighter" | "copy" | "xor" | "multiply" | "screen" | "overlay" | "darken" | "lighten" | "color-dodge" | "color-burn" | "hard-light" | "soft-light" | "difference" | "exclusion" | "hue" | "saturation" | "color" | "luminosity") {
        if (!operation) throw new LazyError('Operation must be provided');
        this.data.globalComposite = operation;
        return this;
    }

    toJSON() {
        return { ...this.data };
    }
}