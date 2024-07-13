import { Base } from "./BaseLayer";
import { Gradient } from "../../utils/Gradient";
import { Pattern } from "../../utils/Pattern";

export interface Circle extends Base {
    radius: number;
    fill: boolean;
    stroke: number;
    color: string | Gradient | Pattern;

    toJSON(): Circle;
}