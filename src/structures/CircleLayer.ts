import { BaseLayer } from './BaseLayer';
import { isValidColor } from '../utils/utils';
import { LazyCanvasLayer } from "../types/LazyCanvasLayer";
import { Gradient } from "../utils/Gradient";
import { Pattern } from "../utils/Pattern";

export class CircleLayer extends BaseLayer {

    constructor(data?: LazyCanvasLayer) {
        super(data);
        this.data.type = 'circle';
        this.data.fill = true;
    }

    /**
     * @param {number} radius - The radius of the figure
     */
    setRadius(radius: number) {
        if (!radius) throw new Error('Radius must be provided');
        if (isNaN(radius)) throw new Error('Radius must be a number');
        this.data.radius = radius;
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

}