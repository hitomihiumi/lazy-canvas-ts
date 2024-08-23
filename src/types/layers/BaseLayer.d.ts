import { Gradient } from "../../utils/Gradient";
import { Pattern } from "../../utils/Pattern";
import { LazyCanvasLink } from "../LazyCanvasLink";
import { GlobalComposite, StringGlobalComposite } from "../enums";

export interface Base {
    type: string;
    id: string;
    x: number;
    y: number;
    shadow: {
        shadowColor: string | Gradient | Pattern;
        shadowBlur: number;
        shadowOffsetX: number;
        shadowOffsetY: number;
    };
    alpha: number;
    angle: number;
    structureType: string;
    fill: boolean;
    globalComposite: GlobalComposite | StringGlobalComposite;
    rotation: number;
    link?: LazyCanvasLink;
}