import { isValidColor } from  '../utils/utils';
import { LazyCanvasLayer } from "../types/LazyCanvasLayer";
import { Gradient } from "../utils/Gradient";
import { Pattern } from "../utils/Pattern";

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
        if (!x && x !== 0) throw new Error('X must be provided');
        if (isNaN(x)) throw new Error('X must be a number');
        this.data.x = x;
        return this;
    }

    /**
     * @param {number} y - The y position of the layer
     */
    setY(y: number) {
        if (!y && y !== 0) throw new Error('Y must be provided');
        if (isNaN(y)) throw new Error('Y must be a number');
        this.data.y = y;
        return this;
    }

    /**
     * @param {string} color - The shadow color for the layer
     */
    setShadowColor(color: string | Gradient | Pattern) {
        if (!color) throw new Error('Color must be provided');
        if (!isValidColor(color)) throw new Error('Color must be a valid hex color');
        this.data.shadow.shadowColor = color;
        return this;
    }

    /**
     * @param {number} blur - The degree of shadow blur
     */
    setShadowBlur(blur: number) {
        if (!blur && blur !== 0) throw new Error('Blur must be provided');
        if (isNaN(blur)) throw new Error('Blur must be a number');
        this.data.shadow.shadowBlur = blur;
        return this;
    }

    /**
     * @param {number} offsetX - The X-axis offset of the shadow relative to the layer
     */
    setShadowOffsetX(offsetX: number) {
        if (!offsetX && offsetX !== 0) throw new Error('OffsetX must be provided');
        if (isNaN(offsetX)) throw new Error('OffsetX must be a number');
        this.data.shadow.shadowOffsetX = offsetX;
        return this;
    }

    /**
     * @param {number} offsetY - The Y-axis offset of the shadow relative to the layer
     */
    setShadowOffsetY(offsetY: number) {
        if (!offsetY && offsetY !== 0) throw new Error('OffsetY must be provided');
        if (isNaN(offsetY)) throw new Error('OffsetY must be a number');
        this.data.shadow.shadowOffsetY = offsetY;
        return this;
    }

    /**
     * @param {number} alpha - The alpha value of the layer
     */
    setAlpha(alpha: number) {
        if (!alpha && alpha !== 0) throw new Error('Alpha must be provided');
        if (isNaN(alpha)) throw new Error('Alpha must be a number');
        if (alpha < 0 || alpha > 1) throw new Error('Alpha must be between 0 and 1');
        this.data.alpha = alpha;
        return this;
    }

    /**
     * @param {number} angle - The angle of rotation the layer
     */
    setRotation(angle: number) {
        if (!angle && angle !== 0) throw new Error('Rotation must be provided');
        if (isNaN(angle)) throw new Error('Rotation must be a number');
        this.data.angle = angle;
        return this;
    }

    /**
     * @param {string} operation - The global composite operation of the layer
     */
    setGlobalCompositeOperation(operation: "source-over" | "source-in" | "source-out" | "source-atop" | "destination-over" | "destination-in" | "destination-out" | "destination-atop" | "lighter" | "copy" | "xor" | "multiply" | "screen" | "overlay" | "darken" | "lighten" | "color-dodge" | "color-burn" | "hard-light" | "soft-light" | "difference" | "exclusion" | "hue" | "saturation" | "color" | "luminosity") {
        if (!operation) throw new Error('Operation must be provided');
        this.data.globalComposite = operation;
        return this;
    }

    toJSON() {
        return { ...this.data };
    }
}