import { Base } from "./BaseLayer";
import { Filter } from "../../utils/Filter";
import { LazyCanvasOutline } from "../LazyCanvasOutline";
import { Centering, StringCentering } from "../enums";

export interface Image extends Base {
    image: string | Uint8Array;
    width: number;
    height: number;
    filter: Filter;
    outline: LazyCanvasOutline;
    centering: Centering | StringCentering;
    fromSVG: boolean;
    path: string;
    resize: boolean;
}