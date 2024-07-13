import { BaseLayer } from './BaseLayer';
import { isValidColor } from '../utils/utils';
import { LazyCanvasLayer } from "../types/LazyCanvasLayer";
import { Gradient } from "../utils/Gradient";
import { Pattern } from "../utils/Pattern";
import { LazyError } from "../types/LazyUtils";

/**
 * @example
 * const { LazyCanvas, BezierLayer } = require('@hitomihiumi/lazy-canvas')
 *
 * let bezier = new BezierLayer()
 * .setColor('#fff')
 * .setStroke(5)
 * .setPoints({ x: 10, y: 10 }, { x: 300, y: 200 })
 * .setControlPoints({ x: 200, y: 100 }, { x: 100, y: 300 })
 *
 * const lazy = new LazyCanvas()
 * .addLayers(bezier)
 * //...
 */
export class BezierLayer extends BaseLayer {

    constructor(data?: LazyCanvasLayer) {
        super(data);
        this.data.type = 'bezier';
        this.data.points = [];
        this.data.controlPoints = [];
        this.data.stroke = 1;
        this.data.fill = false;
    }

    /**
     * @param {Array} points - The points of the Bézier curve
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
     * @param {Array} controlPoints - The control points of the Bézier curve
     */
    setControlPoints(...controlPoints: Array<{x: number, y: number}>) {
        if (!controlPoints) throw new LazyError('Control points must be provided');
        if (controlPoints.length < 2) throw new LazyError('At least two control points must be provided');
        for (const controlPoint of controlPoints) {
            if (!controlPoint.x && controlPoint.x !== 0) throw new LazyError('X must be provided');
            if (!controlPoint.y && controlPoint.y !== 0) throw new LazyError('Y must be provided');
            if (isNaN(controlPoint.x)) throw new LazyError('X must be a number');
            if (isNaN(controlPoint.y)) throw new LazyError('Y must be a number');

            this.data.controlPoints.push(controlPoint);
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
     * @param {string} color - The color of the figure
     */
    setColor(color: string | Gradient | Pattern) {
        if (!color) throw new LazyError('Color must be provided');
        if (!isValidColor(color)) throw new LazyError('Color must be a valid color');
        this.data.color = color;
        return this;
    }
}