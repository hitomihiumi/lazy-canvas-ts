import { LazyCanvasOutline } from "../types/LazyCanvasOutline";
import { Gradient } from "./Gradient";
import { Pattern } from "./Pattern";
import { isValidColor } from "./utils";
import { OutlineType, StringOutlineType } from "../types/enums";

/**
 * @example
 * const { LazyCanvas, Outline, CircleLayer } = require('@hitomihiumi/lazy-canvas')
 *
 * let outline = new Outline()
 * .setType('center')
 * .setColor('#ff8a8a')
 * .setStroke(2)
 *
 * let circle = new CircleLayer()
 * .setX(100)
 * .setY(200)
 * .setRadius(50)
 * .setColor('#fff')
 * .setOutline(
 *     outline
 * )
 *
 * const lazy = new LazyCanvas()
 * .addLayers(circle)
 * //...
 */
export class Outline {
    public data: LazyCanvasOutline;

    constructor(data?: LazyCanvasOutline) {
        this.data = data ? { ...data } : {} as LazyCanvasOutline;
    }

    /**
     * @param {number} stroke - The stroke of the figure
     */
    setStroke(stroke: number) {
        if (!stroke) throw new Error('Stroke must be provided');
        if (isNaN(stroke)) throw new Error('Stroke must be a number');
        this.data.stroke = stroke;
        return this;
    }

    /**
     * @param {string} color - The color of the figure
     */
    setColor(color: string | Gradient | Pattern) {
        if (!color) throw new Error('Color must be provided');
        if (!isValidColor(color)) throw new Error('Color must be a valid color');
        this.data.color = color;
        return this;
    }

    /**
     * @param {OutlineType | StringOutlineType} type - The type of the outline
     */
    setType(type: OutlineType | StringOutlineType) {
        if (!type) throw new Error('Type must be provided');
        this.data.type = type;
        return this;
    }

    /**
     * @param {number} alpha - The alpha of the figure
     */
    setAlpha(alpha: number) {
        if (!alpha) throw new Error('Alpha must be provided');
        if (isNaN(alpha)) throw new Error('Alpha must be a number');
        this.data.alpha = alpha;
        return this;
    }

    toJSON(): LazyCanvasOutline {
        return { ...this.data };
    }
}