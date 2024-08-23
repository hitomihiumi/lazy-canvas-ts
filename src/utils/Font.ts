import { LazyCanvasFont } from "../types/LazyCanvasFont";
import { FontWeight, StringFontWeight } from "../types/enums";

/**
 * @example
 * const { LazyCanvas, Font } = require('@hitomihiumi/lazy-canvas')
 *
 * let fontOne = new Font()
 * .setFamily("JoeKubert")
 * .setWeight("regular")
 * .setPath("./fonts/v_CCJoeKubert-Doubled_v1.3.ttf")
 *
 * let fontTwo = new Font()
 * .setFamily("Koulen")
 * .setWeight("regular")
 * .setPath("./fonts/Koulen-Regular.ttf")
 *
 * const lazy = new LazyCanvas()
 * .loadFonts(fontOne, fontTwo)
 * //...
 */
export class Font {
    data: LazyCanvasFont;

    constructor(data?: LazyCanvasFont) {
        this.data = data ? { ...data } : {} as LazyCanvasFont;
        this.data.structureType = 'font';
    }

    /**
     * @param {string} family - The font name
     */
    setFamily(family: string) {
        if (!family) throw new Error('Family must be provided');
        this.data.family = family;
        return this;
    }

    /**
     * @param {FontWeight | StringFontWeight} weight - The font weight
     */
    setWeight(weight: FontWeight | StringFontWeight) {
        if (!weight) throw new Error('Weight must be provided');
        this.data.weight = weight;
        return this;
    }

    /**
     * @param {string} path - The path to the font file. THE BASE FOLDER IN THE PATH IS THE ROOT FOLDER OF THE PROJECT.
     */
    setPath(path: string) {
        if (!path) throw new Error('Path must be provided');
        this.data.path = path;
        return this;
    }

    toJSON() {
        return { ...this.data };
    }
}