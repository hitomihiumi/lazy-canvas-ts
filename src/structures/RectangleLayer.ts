import { BaseLayer } from './BaseLayer';
import { isValidColor } from '../utils/utils';
import { LazyCanvasLayer } from "../types/LazyCanvasLayer";
import { Gradient } from "../utils/Gradient";
import { Pattern } from "../utils/Pattern";
import { LazyError } from "../types/LazyUtils";
import { Outline } from '../utils/Outline';

/**
 * @example
 * const { LazyCanvas, RectangleLayer } = require('@hitomihiumi/lazy-canvas')
 *
 * let rectangle = new RectangleLayer()
 * .setX(10)
 * .setY(10)
 * .setWidth(200)
 * .setHeight(100)
 * .setColor('#FF0000')
 *
 * const lazy = new LazyCanvas()
 * .addLayers(rectangle)
 * //...
 */
export class RectangleLayer extends BaseLayer {

    constructor(data?: LazyCanvasLayer) {
        super(data);
        this.data.type = 'rectangle';
        this.data.fill = true;
        this.data.centering = 'new';
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
     * @param {string} color - The color of the figure
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
     * @param {'legacy' | 'new'} centering - The centering of the layer
     */
    setCentering(centering: 'legacy' | 'new') {
        if (!centering) throw new LazyError('Centering must be provided');
        if (centering !== 'legacy' && centering !== 'new') throw new LazyError('Centering must be legacy or new');
        this.data.centering = centering;
        return this;
    }

}