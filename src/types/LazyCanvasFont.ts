export interface LazyCanvasFont {
    structureType: string;
    family: string;
    weight: string;
    path: string;

    toJSON(): LazyCanvasFont;
}