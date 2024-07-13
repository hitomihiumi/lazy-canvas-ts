import { Base } from "./BaseLayer";
import { Gradient } from "../../utils/Gradient";
import { Pattern } from "../../utils/Pattern";

export interface Ngon extends Base {
    stroke: number;
    color: string | Gradient | Pattern;
    sides: number;
    fill: boolean;
    radius: number;
}