import { Base } from "./BaseLayer";
import { Gradient } from "../../utils/Gradient";
import { Pattern } from "../../utils/Pattern";

export interface Line extends Base {
    stroke: number;
    color: string | Gradient | Pattern;
    points: Array<{x: number, y: number}>;
    lineDash: Array<number>;
}