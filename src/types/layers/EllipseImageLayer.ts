import { Base } from "./BaseLayer";

export interface EllipseImage extends Base {
    image: string | Uint8Array;
    width: number;
    height: number;
    radius: number;
    filter: any;
}