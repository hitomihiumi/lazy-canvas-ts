import { LazyCanvas } from "../LazyCanvas";

export interface LazyCanvasPattern {
    pattern: {
        type: string;
        data: LazyCanvas | string;
    };
    type: string;
    patternType: 'repeat' | 'repeat-x' | 'repeat-y' | 'no-repeat';

    toJSON(): LazyCanvasPattern;
}