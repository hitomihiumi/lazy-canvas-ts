import { Base } from "./BaseLayer";
import { Gradient } from "../../utils/Gradient";
import { Pattern } from "../../utils/Pattern";
import { LazyCanvasOutline } from "../LazyCanvasOutline";
import { Centering, StringCentering } from "../enums";

export interface Ngon extends Base {
    x: number;
    y: number;
    stroke: number;
    color: string | Gradient | Pattern;
    sides: number;
    fill: boolean;
    radius: number;
    outline: LazyCanvasOutline;
    centering: Centering | StringCentering;
}
