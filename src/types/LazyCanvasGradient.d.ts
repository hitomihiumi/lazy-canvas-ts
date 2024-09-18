import { GradientType, StringGradientType } from "./enums";

export interface LazyCanvasGradient {
    structureType: string;
    gradientType: GradientType | StringGradientType;
    points: Array<{ x: number, y: number }>;
    colorPoints: Array<{ position: number, color: string }>;
    startAngle: number;
    radius: number;
    type: string;
    id: string;

    toJSON(): LazyCanvasGradient;
}
