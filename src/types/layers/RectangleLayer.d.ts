import { Base } from "./BaseLayer";
import { Gradient } from "../../utils/Gradient";
import { Pattern } from "../../utils/Pattern";

export interface Rectangle extends Base {
    width: number;
    height: number;
    fill: boolean;
    stroke: number;
    color: string | Gradient | Pattern;

    toJSON(): Rectangle;
}