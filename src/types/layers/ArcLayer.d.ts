import { Base } from "./BaseLayer";
import { Gradient } from "../../utils/Gradient";
import { Pattern } from "../../utils/Pattern";

export interface Arc extends Base {
    fill: boolean;
    stroke: number;
    color: string | Gradient | Pattern;
    radius: number;
    angles: number[];
    clockwise: boolean;

    toJSON(): Arc;
}