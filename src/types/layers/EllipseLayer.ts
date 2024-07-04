import { Base } from "./BaseLayer";
import { Gradient } from "../../utils/Gradient";
import { Pattern } from "../../utils/Pattern";

export interface Ellipse extends Base {
    width: number;
    height: number;
    fill: boolean;
    stroke: number;
    radius: number;
    color: string | Gradient | Pattern;
}