import { FontWeight, StringFontWeight } from "./enums";

export interface LazyCanvasFont {
    structureType: string;
    family: string;
    weight: FontWeight | StringFontWeight;
    path: string;

    toJSON(): LazyCanvasFont;
}