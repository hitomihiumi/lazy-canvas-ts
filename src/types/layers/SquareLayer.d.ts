import { Base } from "./BaseLayer";
import { Gradient } from "../../utils/Gradient";
import { Pattern } from "../../utils/Pattern";
import { LazyCanvasOutline } from "../LazyCanvasOutline";

export interface Square extends Base {
    width: number;
    fill: boolean;
    stroke: number;
    color: string | Gradient | Pattern;
    outline: LazyCanvasOutline;
    centering: 'legacy' | 'new';
}