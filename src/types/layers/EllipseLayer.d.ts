import { Base } from "./BaseLayer";
import { Gradient } from "../../utils/Gradient";
import { Pattern } from "../../utils/Pattern";
import { LazyCanvasOutline } from "../LazyCanvasOutline";
import { Centering, StringCentering } from "../enums";

export interface Ellipse extends Base {
    x: number;
    y: number;
    width: number;
    height: number;
    fill: boolean;
    stroke: number;
    radius: number;
    color: string | Gradient | Pattern;
    outline: LazyCanvasOutline;
    centering: Centering | StringCentering;
}
