import { LazyCanvasFont } from "../types/LazyCanvasFont";

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
     * @param {string} weight - The font weight
     */
    setWeight(weight: 'normal' | 'bold' | 'italic' | 'bold italic' | 'regular' | 'semi-bold' | 'extra-bold') {
        if (!weight) throw new Error('Weight must be provided');
        this.data.weight = weight;
        return this;
    }

    /**
     * Set the path where this font is located.
     * THE BASE FOLDER IN THE PATH IS THE ROOT FOLDER OF THE PROJECT.
     * @param {string} path - The path to the font file
     * @example './some/path/to/font.ttf'
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