import { BaseLayer } from './BaseLayer';
import { isValidColor } from '../utils/utils';
import { Gradient } from "../utils/Gradient";
import { Pattern } from "../utils/Pattern";
import { LazyError } from "../types/LazyUtils";
import { Line } from "../types/layers";

/**
 * @example
 * const { LazyCanvas, LineLayer } = require('@hitomihiumi/lazy-canvas')
 *
 * let line = new LineLayer()
 * .setPoints({ x: 10, y: 10 }, { x: 100, y: 100 })
 * .setColor('#fff')
 * .setStroke(5)
 * .setLineDash([10, 5])
 *
 * const lazy = new LazyCanvas()
 * .addLayers(line)
 * //...
 */
export class LineLayer extends BaseLayer<Line> {

    constructor(data?: Line) {
        super(data);
        this.data.type = 'line';
        this.data.points = [];
        this.data.stroke = 1;
        this.data.fill = false;
    }

    /**
     * @param {Array<{x: number, y: number}>} points - The points of the line
     */
    setPoints(...points: Array<{x: number, y: number}>) {
        if (!points) throw new LazyError('Points must be provided');
        if (points.length < 2) throw new LazyError('At least two points must be provided');
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
     * @param {Array<number>} lineDash - The lineDash of the figure
     */
    setLineDash(lineDash: Array<number>) {
        if (!lineDash) throw new LazyError('LineDash must be provided');
        if (!Array.isArray(lineDash)) throw new LazyError('LineDash must be an array');
        this.data.lineDash = lineDash;
        return this;
    }

}
