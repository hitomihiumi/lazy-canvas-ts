import { BaseLayer } from './BaseLayer';
import { isImageUrlValid } from "../utils/utils";
import { Filter } from "../utils/Filter";
import { LazyError } from "../types/LazyUtils";
import { Outline } from '../utils/Outline';
import { Centering, StringCentering } from "../types/enums";
import { Image } from "../types/layers";

/**
 * @example
 * const { LazyCanvas, ImageLayer } = require('@hitomihiumi/lazy-canvas')
 *
 * let image = new ImageLayer()
 * .setX(25)
 * .setY(25)
 * .setWidth(150)
 * .setHeight(150)
 * .setImage('https://i.pinimg.com/1200x/f3/32/19/f332192b2090f437ca9f49c1002287b6.jpg')
 *
 * const lazy = new LazyCanvas()
 * .addLayers(image)
 * //...
 */
export class ImageLayer extends BaseLayer<Image> {

    constructor(data?: Image) {
        super(data);
        this.data.type = 'image';
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
     * @param {string | Uint8Array} image - The image url or path
     */
    setImage(image: string | Uint8Array) {
        if (!image) throw new LazyError('Image must be provided');
        if (!isImageUrlValid(image)) throw new LazyError('Image must be a valid URL');
        this.data.image = image;
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
     * @param {Filter} filter - The filter of the image
     */
    setFilter(filter: Filter) {
        if (!filter) throw new LazyError('Filter must be provided');
        this.data.filter = filter;
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
     * @param {string} path - The path of the clip
     */
    setClipPath(path: string) {
        if (!path) throw new LazyError('Path must be provided');
        this.data.path = path;
        return this;
    }

    /**
     * @param {boolean} resize - The resize of the image
     */
    setResize(resize: boolean) {
        this.data.resize = resize;
        return this
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
