import { Base } from "./BaseLayer";
import { Gradient } from "../../utils/Gradient";
import { Pattern } from "../../utils/Pattern";

export interface Quadratic extends Base {
    stroke: number;
    color: string | Gradient | Pattern;
    points: Array<{x: number, y: number}>;
    controlPoint: {x: number, y: number};

    toJSON(): Quadratic;
}