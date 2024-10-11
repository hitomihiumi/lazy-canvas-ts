import { Gradient } from "../../utils/Gradient";
import { Pattern } from "../../utils/Pattern";
import { LazyCanvasLink } from "../LazyCanvasLink";
import { GlobalComposite, StringGlobalComposite } from "../enums";

export interface Base {
    type: string;
    id: string;
    shadow: {
        shadowColor: string | Gradient | Pattern;
        shadowBlur: number;
        shadowOffsetX: number;
        shadowOffsetY: number;
    };
    alpha: number;
    structureType: string;
    fill: boolean;
    globalComposite: GlobalComposite | StringGlobalComposite;
    link?: LazyCanvasLink;
    transform: Transform;
}

export interface Transform {
    matrix?: DOMMatrix2DInit;
    translate?: {
        x: number;
        y: number;
    };
    scale?: {
        x: number;
        y: number;
    };
    rotate?: number;
}
