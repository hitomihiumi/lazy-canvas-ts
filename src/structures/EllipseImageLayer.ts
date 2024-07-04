import { BaseLayer } from './BaseLayer';
import { LazyCanvasLayer } from "../types/LazyCanvasLayer";
import { isImageUrlValid } from "../utils/utils";
import { LazyCanvasFilter } from "../types/LazyCanvasFilter";

export class EllipseImageLayer extends BaseLayer {

    constructor(data?: LazyCanvasLayer) {
        super(data);
        this.data.type = 'ellipseimage';
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
     * @param {string} image - The image url or path
     */
    setImage(image: string) {
        if (!image) throw new Error('Image must be provided');
        if (!isImageUrlValid(image)) throw new Error('Image must be a valid URL');
        this.data.image = image;
        return this;
    }

    /**
     * @param {number} width - The width of the figure
     */
    setWidth(width: number) {
        if (!width) throw new Error('Width must be provided');
        if (isNaN(width)) throw new Error('Width must be a number');
        this.data.width = width;
        return this;
    }

    /**
     * @param {number} height - The height of the figure
     */
    setHeight(height: number) {
        if (!height) throw new Error('Height must be provided');
        if (isNaN(height)) throw new Error('Height must be a number');
        this.data.height = height;
        return this;
    }

    setFilter(filter: LazyCanvasFilter) {
        if (!filter) throw new Error('Filter must be provided');

        filter = filter.toJSON();

        this.data.filter = filter;
        return this;
    }

}