import { Base } from "./BaseLayer";
import { Filter } from "../../utils/Filter";
import { LazyCanvasOutline } from "../LazyCanvasOutline";
import { Centering, StringCentering } from "../enums";
import { Gradient } from "../../utils/Gradient";
import { Pattern } from "../../utils/Pattern";

export interface Image extends Base {
    x: number;
    y: number;
    image: string | Uint8Array;
    width: number;
    height: number;
    filter: Filter;
    outline: LazyCanvasOutline;
    centering: Centering | StringCentering;
    fromSVG: boolean;
    path: string;
    resize: boolean;
    stroke: number;
    color: string | Gradient | Pattern;
}
