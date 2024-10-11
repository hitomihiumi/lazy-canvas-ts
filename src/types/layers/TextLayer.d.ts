import { Base } from "./BaseLayer";
import { Gradient } from "../../utils/Gradient";
import { Pattern } from "../../utils/Pattern";
import { LazyCanvasOutline } from "../LazyCanvasOutline";
import { TextAlign, StringTextAlign, TextBaseline, StringTextBaseline, FontWeight, StringFontWeight, TextDirection, StringTextDirection } from "../enums";

export interface Text extends Base {
    x: number;
    y: number;
    text: string;
    font: string;
    size: number;
    weight: FontWeight | StringFontWeight;
    align: TextAlign | StringTextAlign;
    multiline: boolean;
    color: string | Gradient | Pattern;
    outline: LazyCanvasOutline;

    width: number;
    height: number;
    fill: boolean;
    direction: TextDirection | StringTextDirection;
    baseline: TextBaseline | StringTextBaseline;
}
