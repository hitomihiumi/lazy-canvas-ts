import { BaseLayer } from './BaseLayer';
import { isValidColor } from '../utils/utils';
import { LazyCanvasLayer } from "../types/LazyCanvasLayer";
import { Gradient } from "../utils/Gradient";
import { Pattern } from "../utils/Pattern";
import { LazyError } from "../types/LazyUtils";
import { Outline } from '../utils/Outline';
import { TextAlign, StringTextAlign, TextBaseline, StringTextBaseline, FontWeight, StringFontWeight, TextDirection, StringTextDirection } from '../types/enums';

/**
 * @example
 * const { LazyCanvas, TextLayer } = require('@hitomihiumi/lazy-canvas')
 * //...
 * 
 * // Multiline text
 * let textOne = new TextLayer()
 * .setText("This is a test of the LazyCanvas library.")
 * .setFont("JoeKubert")
 * .setFontSize(25)
 * .setWeight("regular")
 * .setColor("#fff")
 * .setMultiline(true)
 * .setX(50)
 * .setY(50)
 * .setHeight(100)
 * .setWidth(500)
 *
 * // Single line text
 * let textTwo = new TextLayer()
 * .setText("Amazing text with amazing font!")
 * .setFont("Koulen")
 * .setFontSize(20)
 * .setWeight("regular")
 * .setColor("#fff")
 * .setMultiline(false)
 * .setAlign("start")
 * .setX(50)
 * .setY(130)
 * 
 * const lazy = new LazyCanvas()
 * .addLayers(textOne, textTwo)
 * //...
 */
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
        if (!text) throw new LazyError('Text must be provided');
        this.data.text = text;
        return this;
    }

    /**
     * @param {string} font - The name of the font
     */
    setFont(font: string) {
        if (!font) throw new LazyError('Font must be provided');
        this.data.font = font;
        return this;
    }

    /**
     * @param {number} fontSize - The size of the text
     */
    setFontSize(fontSize: number) {
        if (!fontSize) throw new LazyError('Font size must be provided');
        if (isNaN(fontSize)) throw new LazyError('Font size must be a number');
        this.data.size = fontSize;
        return this;
    }

    /**
     * @param {FontWeight | StringFontWeight} weight - The weight of the text
     */
    setWeight(weight: FontWeight | StringFontWeight) {
        if (!weight) throw new LazyError('Weight must be provided');
        this.data.weight = weight;
        return this;
    }

    /**
     * @param {string | Gradient | Pattern} color - The color of the text
     */
    setColor(color: string | Gradient | Pattern) {
        if (!color) throw new LazyError('Color must be provided');
        if (!isValidColor(color)) throw new LazyError('Color must be a valid color');
        this.data.color = color;
        return this;
    }

    /**
     * @param {TextAlign | StringTextAlign} align - The alignment of the text
     */
    setAlign(align: TextAlign | StringTextAlign) {
        if (!align) throw new LazyError('Alignment must be provided');
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
     * @param {number} width - Max width zone of the text in pixels
     */
    setWidth(width: number) {
        if (!width) throw new LazyError('Width must be provided');
        if (isNaN(width)) throw new LazyError('Width must be a number');
        this.data.width = width;
        return this;
    }

    /**
     * @param {number} height - Max height zone of the text in pixels
     */
    setHeight(height: number) {
        if (!height) throw new LazyError('Height must be provided');
        if (isNaN(height)) throw new LazyError('Height must be a number');
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
     * @param {TextDirection | StringTextDirection} direction - The direction of the text
     */
    setDirection(direction: TextDirection | StringTextDirection) {
        if (!direction) throw new LazyError('Direction must be provided');
        this.data.direction = direction;
        return this;
    }

    /**
     * @param {TextBaseline | StringTextBaseline} baseline - The baseline of the text
     */
    setBaseline(baseline: TextBaseline | StringTextBaseline) {
        if (!baseline) throw new LazyError('Baseline must be provided');
        this.data.baseline = baseline;
        return this;
    }

    /**
     * @param {Outline} outline - The outline of the figure
     */
    setOutline(outline: Outline) {
        this.data.outline = outline.toJSON();
        return this;
    }
}