import { BaseLayer } from './BaseLayer';
import { isValidColor } from '../utils/utils';
import { Gradient } from "../utils/Gradient";
import { Pattern } from "../utils/Pattern";
import { LazyError } from "../types/LazyUtils";
import { Outline } from '../utils/Outline';
import { Centering, StringCentering } from "../types/enums";
import { Ellipse } from "../types/layers";

/**
 * @example
 * const { LazyCanvas, EllipseLayer } = require('@hitomihiumi/lazy-canvas')
 *
 * let ellipse = new EllipseLayer()
 * .setX(100)
 * .setY(100)
 * .setWidth(300)
 * .setHeight(200)
 * .setRadius(100)
 * .setColor('red')
 *
 * const lazy = new LazyCanvas()
 * .addLayers(ellipse)
 * //...
 */
export class EllipseLayer extends BaseLayer<Ellipse> {

    constructor(data?: Ellipse) {
        super(data);
        this.data.type = 'ellipse';
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
     * @param {number} width - The width of the figure
     */
    setWidth(width: number) {
        if (!width) throw new LazyError('Width must be provided');
        if (isNaN(width)) throw new LazyError('Width must be a number');
        this.data.width = width;
        return this;
    }

    /**
     * @param {number} height - The height of the figure
     */
    setHeight(height: number) {
        if (!height) throw new LazyError('Height must be provided');
        if (isNaN(height)) throw new LazyError('Height must be a number');
        this.data.height = height;
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
     * @param {number} radius - The radius of the figure
     */
    setRadius(radius: number) {
        if (!radius) throw new LazyError('Radius must be provided');
        if (isNaN(radius)) throw new LazyError('Radius must be a number');
        this.data.radius = radius;
        return this;
    }

    /**
     * @param {Outline} outline - The outline of the figure
     */
    setOutline(outline: Outline) {
        this.data.outline = outline.toJSON();
        return this;
    }

    /**
     * @param {Centering | StringCentering} centering - The centering of the layer
     */
    setCentering(centering: Centering | StringCentering) {
        if (!centering) throw new LazyError('Centering must be provided');
        this.data.centering = centering;
        return this;
    }

    /**
     * @param {{ x: number, y: number }} scale - The scale of the layer
     */
    setScale(scale: { x: number, y: number }) {
        if (!scale) throw new LazyError('Scale must be provided');
        if (isNaN(scale.x) || isNaN(scale.y)) throw new LazyError('Scale must be a number');
        this.data.transform.scale = scale;
        return this;
    }

    /**
     * @param {{ x: number, y: number }} translate - The translate of the layer
     */
    setTranslate(translate: { x: number, y: number }) {
        if (!translate) throw new LazyError('Translate must be provided');
        if (isNaN(translate.x) || isNaN(translate.y)) throw new LazyError('Translate must be a number');
        this.data.transform.translate = translate;
        return this;
    }

    /**
     * @param {DOMMatrix2DInit} matrix - The matrix of the layer
     */
    setMatrix(matrix: DOMMatrix2DInit) {
        if (!matrix) throw new LazyError('Matrix must be provided');
        this.data.transform.matrix = matrix;
        return this;
    }

}
