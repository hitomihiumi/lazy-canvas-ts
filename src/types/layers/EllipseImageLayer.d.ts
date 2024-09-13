import { Base } from "./BaseLayer";
import { Filter } from "../../utils/Filter";
import { LazyCanvasOutline } from "../LazyCanvasOutline";
import { Centering, StringCentering } from "../enums";

export interface EllipseImage extends Base {
    image: string | Uint8Array;
    width: number;
    height: number;
    radius: number;
    filter: Filter;
    outline: LazyCanvasOutline;
    centering: Centering | StringCentering;
    fromSVG: boolean;
    resize: boolean;
}