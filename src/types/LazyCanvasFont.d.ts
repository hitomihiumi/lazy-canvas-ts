export interface LazyCanvasFont {
    structureType: string;
    family: string;
    weight: 'normal' | 'bold' | 'italic' | 'bold italic' | 'regular' | 'semi-bold' | 'extra-bold' | 'light' | 'extra-light';
    path: string;

    toJSON(): LazyCanvasFont;
}