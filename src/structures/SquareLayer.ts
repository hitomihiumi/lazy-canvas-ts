import { BaseLayer } from './BaseLayer';
import { isValidColor } from '../utils/utils';
import { Gradient } from "../utils/Gradient";
import { Pattern } from "../utils/Pattern";
import { LazyError } from "../types/LazyUtils";
import { Outline } from '../utils/Outline';
import { Centering, StringCentering } from "../types/enums";
import { Square } from "../types/layers";

/**
 * @example
 * const { LazyCanvas, SquareLayer } = require('@hitomihiumi/lazy-canvas')
 *
 * let square = new SquareLayer()
 * .setX(10)
 * .setY(10)
 * .setWidth(150)
 * .setColor('#FF0000')
 *
 * const lazy = new LazyCanvas()
 * .addLayers(square)
 * //...
 */
export class SquareLayer extends BaseLayer<Square> {

    constructor(data?: Square) {
        super(data);
        this.data.type = 'square';
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
