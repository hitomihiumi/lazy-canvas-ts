import { Base } from "./BaseLayer";
import { Gradient } from "../../utils/Gradient";
import { Pattern } from "../../utils/Pattern";

export interface ArcTo extends Base {
    stroke: number;
    color: string | Gradient | Pattern;
    points: Array<{x: number, y: number}>;
    radius: number;
}