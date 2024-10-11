import { BaseLayer } from './BaseLayer';
import { isValidColor } from '../utils/utils';
import { Gradient } from "../utils/Gradient";
import { Pattern } from "../utils/Pattern";
import { LazyError } from "../types/LazyUtils";
import { Outline } from '../utils/Outline';
import { Ngon } from "../types/layers";

/**
 * @example
 * const { LazyCanvas, NgonLayer } = require('@hitomihiumi/lazy-canvas')
 *
 * let ngon = new NgonLayer()
 * .setRadius(50)
 * .setSides(6)
 * .setColor('#fff')
 *
 * const lazy = new LazyCanvas()
 * .addLayers(ngon)
 * //...
 */
export class NgonLayer extends BaseLayer<Ngon> {

    constructor(data?: Ngon) {
        super(data);
        this.data.type = 'ngon';
        this.data.fill = true;
        this.data.centering = 'new';
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
     * @param {number} sides - The number of sides the figure should have
     */
    setSides(sides: number) {
        if (!sides) throw new LazyError('Sides must be provided');
        if (isNaN(sides)) throw new LazyError('Sides must be a number');
        this.data.sides = sides;
        return this;
    }

    /**
     * @param {number} radius - The radius of the figure
     */
    setRadius(radius: number) {
        if (!radius) throw new LazyError('Radius must be provided');
        if (isNaN(radius)) throw new LazyError('Radius must be a number');
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
     * @param {Outline} outline - The outline of the figure
     */
    setOutline(outline: Outline) {
        this.data.outline = outline.toJSON();
        return this;
    }
}
