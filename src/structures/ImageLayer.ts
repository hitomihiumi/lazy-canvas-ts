import { BaseLayer } from './BaseLayer';
import { LazyCanvasLayer } from "../types/LazyCanvasLayer";
import { isImageUrlValid } from "../utils/utils";
import { Filter } from "../utils/Filter";
import { LazyError } from "../types/LazyUtils";

export class ImageLayer extends BaseLayer {

    constructor(data?: LazyCanvasLayer) {
        super(data);
        this.data.type = 'image';
    }

    /**
     * @param {string} image - The image url or path
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

    setFilter(filter: Filter) {
        if (!filter) throw new LazyError('Filter must be provided');
        this.data.filter = filter;
        return this;
    }

}