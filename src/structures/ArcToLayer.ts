import { BaseLayer } from './BaseLayer';
import { isValidColor } from '../utils/utils';
import { LazyCanvasLayer } from "../types/LazyCanvasLayer";
import { Gradient } from "../utils/Gradient";
import { Pattern } from "../utils/Pattern";
import { LazyError } from "../types/LazyUtils";

/**
 * @example
 * const { LazyCanvas, ArcToLayer } = require('@hitomihiumi/lazy-canvas')
 *
 * let arcTo = new ArcToLayer()
 * .setPoints({ x: 400, y: 50 }, { x: 300, y: 230 }, { x: 150, y: 20 })
 * .setRadius(120)
 * .setColor('#fff')
 * .setStroke(5)
 *
 * const lazy = new LazyCanvas()
 * .addLayers(arcTo)
 * //...
 */
export class ArcToLayer extends BaseLayer {

    constructor(data?: LazyCanvasLayer) {
        super(data);
        this.data.type = 'arcto';
        this.data.points = [];
        this.data.stroke = 1;
    }

    /**
     * @param {Array<{x: number, y: number}>} points - The points of the arc
     */
    setPoints(...points: Array<{x: number, y: number}>) {
        if (!points) throw new LazyError('Points must be provided');
        if (points.length < 3) throw new LazyError('At least three points must be provided');
        for (const point of points) {
            if (!point.x && point.x !== 0) throw new LazyError('X must be provided');
            if (!point.y && point.y !== 0) throw new LazyError('Y must be provided');
            if (isNaN(point.x)) throw new LazyError('X must be a number');
            if (isNaN(point.y)) throw new LazyError('Y must be a number');

            this.data.points.push(point);
        }
        return this;
    }

    /**
     * @param {number} stroke - The stroke of the figure
     */
    setStroke(stroke: number) {
        if (!stroke) throw new LazyError('Stroke must be provided');
        if (isNaN(stroke)) throw new LazyError('Stroke must be a number');
        this.data.stroke = stroke;
        return this;
    }

    /**
     * @param {string | Gradient | Pattern} color - The color of the figure
     */
    setColor(color: string | Gradient | Pattern) {
        if (!color) throw new LazyError('Color must be provided');
        if (!isValidColor(color)) throw new LazyError('Color must be a valid color');
        this.data.color = color;
        return this;
    }

    /**
     * @param {number} radius - The radius of the arc
     */
    setRadius(radius: number) {
        if (!radius) throw new LazyError('Radius must be provided');
        if (isNaN(radius)) throw new LazyError('Radius must be a number');
        this.data.radius = radius;
        return this;
    }
}