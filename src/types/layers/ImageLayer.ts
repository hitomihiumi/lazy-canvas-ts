import { Base } from "./BaseLayer";

export interface Image extends Base {
    image: string | Uint8Array;
    width: number;
    height: number;
    filter: any;
}