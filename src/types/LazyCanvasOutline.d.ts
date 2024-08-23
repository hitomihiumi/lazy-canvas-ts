import { Gradient } from "../utils/Gradient";
import { Pattern } from "../utils/Pattern";
import { OutlineType, StringOutlineType } from "./enums";

export interface LazyCanvasOutline {
    stroke: number;
    color: string | Gradient | Pattern;
    type: OutlineType | StringOutlineType;
    alpha: number;
}