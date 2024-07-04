import { BaseLayer } from './BaseLayer';
import { isValidColor } from '../utils/utils';
import { LazyCanvasLayer } from "../types/LazyCanvasLayer";
import { Gradient } from "../utils/Gradient";
import { Pattern } from "../utils/Pattern";

export class TextLayer extends BaseLayer {

    constructor(data?: LazyCanvasLayer) {
        super(data);
        this.data.type = 'text';
        this.data.fill = true;
        this.data.font = 'Arial';
        this.data.size = 12;
        this.data.weight = 'normal';
    }

    /**
     * @param {string} text - The text to display
     */
    setText(text: string) {
        if (!text) throw new Error('Text must be provided');
        this.data.text = text;
        return this;
    }

    /**
     * @param {string} font - The name of the font
     */
    setFont(font: string) {
        if (!font) throw new Error('Font must be provided');
        this.data.font = font;
        return this;
    }

    /**
     * @param {number} fontSize - The size of the text
     */
    setFontSize(fontSize: number) {
        if (!fontSize) throw new Error('Font size must be provided');
        if (isNaN(fontSize)) throw new Error('Font size must be a number');
        this.data.size = fontSize;
        return this;
    }

    /**
     * @param {string} weight - The weight of the text
     * Weight types: normal, bold, italic, bold italic, regular
     */
    setWeight(weight: 'normal' | 'bold' | 'italic' | 'bold italic' | 'regular' | 'semi-bold' | 'extra-bold') {
        if (!weight) throw new Error('Weight must be provided');
        this.data.weight = weight;
        return this;
    }

    /**
     * @param {string} color - The color of the text
     */
    setColor(color: string | Gradient | Pattern) {
        if (!color) throw new Error('Color must be provided');
        if (!isValidColor(color)) throw new Error('Color must be a valid color');
        this.data.color = color;
        return this;
    }

    /**
     * @param {string} align - The alignment of the text
     * Align types: left, center, right, start, end
     */
    setAlign(align: 'left' | 'center' | 'right' | 'start' | 'end') {
        if (!align) throw new Error('Alignment must be provided');
        this.data.align = align;
        return this;
    }

    /**
     * @param {boolean} multiline - Whether the text should be multiline or not
     */
    setMultiline(multiline: boolean) {
        this.data.multiline = multiline;
        return this;
    }

    /**
     * @param {number} width - Max width zone of the text
     */
    setWidth(width: number) {
        if (!width) throw new Error('Width must be provided');
        if (isNaN(width)) throw new Error('Width must be a number');
        this.data.width = width;
        return this;
    }

    /**
     * @param {number} height - Max height zone of the text
     */
    setHeight(height: number) {
        if (!height) throw new Error('Height must be provided');
        if (isNaN(height)) throw new Error('Height must be a number');
        this.data.height = height;
        return this;
    }

    /**
     * @param {boolean} fill - Whether the figure should be text or not
     */
    setFilled(fill: boolean) {
        this.data.fill = fill;
        return this;
    }

    /**
     * @param {string} direction - The direction of the text
     */
    setDirection(direction: 'ltr' | 'rtl' | 'inherit') {
        if (!direction) throw new Error('Direction must be provided');
        this.data.direction = direction;
        return this;
    }

    /**
     * @param {string} baseline - The baseline of the text
     */
    setBaseline(baseline: 'alphabetic' | 'top' | 'hanging' | 'middle' | 'ideographic' | 'bottom') {
        if (!baseline) throw new Error('Baseline must be provided');
        this.data.baseline = baseline;
        return this;
    }
}