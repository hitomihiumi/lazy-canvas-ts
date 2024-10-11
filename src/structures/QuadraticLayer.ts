import { BaseLayer } from './BaseLayer';
import { isValidColor } from '../utils/utils';
import { Gradient } from "../utils/Gradient";
import { Pattern } from "../utils/Pattern";
import { LazyError } from "../types/LazyUtils";
import { Quadratic } from "../types/layers";

/**
 * @example
 * const { LazyCanvas, QuadraticLayer } = require('@hitomihiumi/lazy-canvas')
 *
 * let quadratic = new QuadraticLayer()
 * .setColor('#fff')
 * .setStroke(5)
 * .setPoints({ x: 10, y: 10 }, { x: 300, y: 200 })
 * .setControlPoint({ x: 200, y: 100 })
 *
 * const lazy = new LazyCanvas()
 * .addLayers(quadratic)
 * //...
 */
export class QuadraticLayer extends BaseLayer<Quadratic> {

    constructor(data?: Quadratic) {
        super(data);
        this.data.type = 'quadratic';
        this.data.points = [];
        this.data.stroke = 1;
        this.data.fill = false;
    }

    /**
     * @param {Array<{x: number, y: number}>} points - The points of the quadratic curve
     */
    setPoints(...points: Array<{x: number, y: number}>) {
        if (!points) throw new LazyError('Points must be provided');
        if (points.length < 2) throw new LazyError('Two points must be provided');
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
     * @param {{x: number, y: number}} controlPoint - The control point of the quadratic curve
     */
    setControlPoint(controlPoint: {x: number, y: number}) {
        if (!controlPoint) throw new LazyError('Control point must be provided');
        if (!controlPoint.x && controlPoint.x !== 0) throw new LazyError('X must be provided');
        if (!controlPoint.y && controlPoint.y !== 0) throw new LazyError('Y must be provided');
        if (isNaN(controlPoint.x)) throw new LazyError('X must be a number');
        if (isNaN(controlPoint.y)) throw new LazyError('Y must be a number');
        this.data.controlPoint = controlPoint;
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
}
