import { Base } from "./BaseLayer";
import { Filter } from "../../utils/Filter";

export interface EllipseImage extends Base {
    image: string | Uint8Array;
    width: number;
    height: number;
    radius: number;
    filter: Filter;
}