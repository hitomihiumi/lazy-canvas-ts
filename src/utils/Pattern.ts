import { isImageUrlValid } from './utils';
import { LazyCanvasPattern } from '../types/LazyCanvasPattern';
import { LazyCanvas } from "../LazyCanvas";

/**
 * @example
 * const { LazyCanvas, Pattern, SquareLayer } = require('@hitomihiumi/lazy-canvas')
 *
 * let pattern = new Pattern()
 * .setPattern('https://i.pinimg.com/1200x/f3/32/19/f332192b2090f437ca9f49c1002287b6.jpg')
 * .setType('repeat')
 *
 * let square = new SquareLayer()
 * .setX(20)
 * .setY(20)
 * .setWidth(460)
 * .setColor(pattern)
 *
 * const lazy = new LazyCanvas()
 * .addLayers(square)
 * //...
 */
export class Pattern {
    data: LazyCanvasPattern;

    constructor(data?: LazyCanvasPattern) {
        this.data = data ? { ...data } : {} as LazyCanvasPattern;
        this.data.type = 'pattern';
        this.data.patternType = 'no-repeat'
    }

    setPattern(pattern: string | LazyCanvas) {
        if (!pattern) throw new Error('Pattern must be provided');
        if (typeof pattern === 'object' && !['layer', 'canvas'].includes(pattern.getData().structureType)) throw new Error('Pattern must be a valid pattern');
        if (typeof pattern === 'string' && !isImageUrlValid(pattern)) throw new Error('Pattern must be a valid pattern');
        this.data.pattern = {
            type: `${typeof pattern === 'string' ? `image` : pattern.getData().structureType}`,
            data: pattern
        }
        return this;
    }

    setType(patternType: 'repeat' | 'repeat-x' | 'repeat-y' | 'no-repeat') {
        if (!patternType) throw new Error('Pattern type must be provided');
        this.data.patternType = patternType;
        return this;
    }

    toJSON() {
        return { ...this.data }
    }
}