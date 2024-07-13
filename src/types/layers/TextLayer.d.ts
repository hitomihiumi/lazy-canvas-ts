import { Base } from "./BaseLayer";
import { Gradient } from "../../utils/Gradient";
import { Pattern } from "../../utils/Pattern";

export interface Text extends Base {
    text: string;
    font: string;
    size: number;
    weight: 'normal' | 'bold' | 'italic' | 'bold italic' | 'regular' | 'semi-bold' | 'extra-bold' | 'light' | 'extra-light';
    align: 'left' | 'center' | 'right' | 'start' | 'end';
    multiline: boolean;
    color: string | Gradient | Pattern;

    width: number;
    height: number;
    fill: boolean;
    direction: 'ltr' | 'rtl' | 'inherit';
    baseline: 'alphabetic' | 'top' | 'hanging' | 'middle' | 'ideographic' | 'bottom';
}