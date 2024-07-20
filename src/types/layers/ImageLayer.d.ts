import { Base } from "./BaseLayer";
import { Filter } from "../../utils/Filter";
import { LazyCanvasOutline } from "../LazyCanvasOutline";

export interface Image extends Base {
    image: string | Uint8Array;
    width: number;
    height: number;
    filter: Filter;
    outline: LazyCanvasOutline;
    centering: 'legacy' | 'new';
}