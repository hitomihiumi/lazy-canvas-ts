import { Base } from "./BaseLayer";
import { Filter } from "../../utils/Filter";

export interface Image extends Base {
    image: string | Uint8Array;
    width: number;
    height: number;
    filter: Filter;
}