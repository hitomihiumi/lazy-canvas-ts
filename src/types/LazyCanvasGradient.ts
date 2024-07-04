export interface LazyCanvasGradient {
    structureType: string;
    gradientType: string;
    points: Array<{ x: number, y: number }>;
    colorPoints: Array<{ position: number, color: string }>;
    radius: number;
    type: string;

    toJSON(): LazyCanvasGradient;
}