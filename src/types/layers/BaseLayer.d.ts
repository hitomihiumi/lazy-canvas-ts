import { Gradient } from "../../utils/Gradient";
import { Pattern } from "../../utils/Pattern";

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
    globalComposite: "source-over" | "source-in" | "source-out" | "source-atop" | "destination-over" | "destination-in" | "destination-out" | "destination-atop" | "lighter" | "copy" | "xor" | "multiply" | "screen" | "overlay" | "darken" | "lighten" | "color-dodge" | "color-burn" | "hard-light" | "soft-light" | "difference" | "exclusion" | "hue" | "saturation" | "color" | "luminosity";
    rotation: number;
}