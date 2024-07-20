import { Gradient } from "../utils/Gradient";
import { Pattern } from "../utils/Pattern";

export interface LazyCanvasOutline {
    stroke: number;
    color: string | Gradient | Pattern;
    type: 'inner' | 'outer' | 'center';
}