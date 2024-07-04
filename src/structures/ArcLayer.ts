import { BaseLayer } from './BaseLayer';
import { isValidColor } from '../utils/utils';
import { LazyCanvasLayer } from "../types/LazyCanvasLayer";
import { Gradient } from "../utils/Gradient";
import { Pattern } from "../utils/Pattern";

export class ArcLayer extends BaseLayer {

    constructor(data?: LazyCanvasLayer) {
        super(data);
        this.data.type = 'arc';
        this.data.angles = [];
        this.data.fill = true;
        this.data.clockwise = false;
        this.data.stroke = 1;
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
     * @param {number} radius - The radius of the arc
     */
    setRadius(radius: number) {
        if (!radius) throw new Error('Radius must be provided');
        if (isNaN(radius)) throw new Error('Radius must be a number');
        this.data.radius = radius;
        return this;
    }

    /**
     * @param {number} angles - The angles of the arc
     */
    setAngles(angles: number[]) {
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