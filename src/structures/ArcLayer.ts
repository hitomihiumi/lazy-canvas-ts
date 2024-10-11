import { BaseLayer } from './BaseLayer';
import { isValidColor } from '../utils/utils';
import { Arc } from "../types/layers";
import { Gradient } from "../utils/Gradient";
import { Pattern } from "../utils/Pattern";
import { LazyError } from "../types/LazyUtils";

/**
 * @example
 * const { LazyCanvas, ArcLayer } = require('@hitomihiumi/lazy-canvas');
 *
 * let arc = new ArcLayer()
 * .setX(400)
 * .setY(300)
 * .setRadius(100)
 * .setColor('#fff')
 * .setStroke(5)
 * .setFilled(false)
 * .setAngles(0, Math.PI / 2)
 *
 * const lazy = new LazyCanvas()
 * .addLayers(arc)
 * //...
 */
export class ArcLayer extends BaseLayer<Arc> {

    constructor(data?: Arc) {
        super(data);
        this.data.type = 'arc';
        this.data.angles = [];
        this.data.fill = true;
        this.data.clockwise = false;
        this.data.stroke = 1;
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
     * @param {boolean} fill - Whether the figure should be filled or not
     */
    setFilled(fill: boolean) {
        this.data.fill = fill;
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

    /**
     * @param {number[]} angles - The angles of the arc
     */
    setAngles(...angles: number[]) {
        if (!angles) throw new Error('Angles must be provided');
        if (angles.length < 2) throw new Error('At least two angle must be provided');
        for (const angle of angles) {
            if (!angle && angle !== 0) throw new Error('Angle must be provided');
            if (isNaN(angle)) throw new Error('Angle must be a number');

            this.data.angles.push(angle);
        }
        return this;
    }

    /**
     * @param {boolean} clockwise - Whether the arc should be drawn clockwise or not
     */
    setClockwise(clockwise: boolean) {
        this.data.clockwise = clockwise;
        return this;
    }
}
