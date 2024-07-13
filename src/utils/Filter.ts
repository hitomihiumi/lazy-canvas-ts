import { LazyCanvasFilter } from "../types/LazyCanvasFilter";

/**
 * @example
 * const { LazyCanvas, Filter, ImageLayer } = require('@hitomihiumi/lazy-canvas')
 *
 * let filter = new Filter()
 * .setType('brightness')
 * .setOption(-0.1)
 *
 * let image = new ImageLayer()
 * .setImage('https://i.pinimg.com/1200x/f3/32/19/f332192b2090f437ca9f49c1002287b6.jpg')
 * .setX(0)
 * .setY(0)
 * .setWidth(500)
 * .setHeight(500)
 * .setFilter(filter)
 *
 * const lazy = new LazyCanvas()
 * .addLayers(image)
 * //...
 */
export class Filter {
    data: LazyCanvasFilter;

    constructor(data?: LazyCanvasFilter) {
        this.data = data ? { ...data } : {} as LazyCanvasFilter;
        this.data.structureType = 'filter';
    }

    setType(type: "daither565" | "normalize" | "contrast" | "brightness" | "sepia" | "invert" | "gaussian" | "blur" | "grayscale") {
        if (!type) throw new Error('Type must be provided');
        this.data.type = type;
        return this;
    }

    setOption(option: number) {
        if (!option) throw new Error('Option must be provided');
        if (isNaN(option)) throw new Error('Option must be a number');
        this.data.option = option;
        return this;
    }

    toJSON() {
        return { ...this.data }
    }
}