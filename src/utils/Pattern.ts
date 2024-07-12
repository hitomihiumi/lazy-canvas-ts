import { isImageUrlValid } from './utils';
import { LazyCanvasPattern } from '../types/LazyCanvasPattern';
import { LazyCanvas } from "../LazyCanvas";

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