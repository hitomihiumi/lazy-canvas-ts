import { LazyCanvas } from "../LazyCanvas";
import { PatternType, StringPatternType } from "./enums";

export interface LazyCanvasPattern {
    pattern: {
        type: string;
        data: LazyCanvas | string;
    };
    type: string;
    patternType: PatternType | StringPatternType;

    toJSON(): LazyCanvasPattern;
}