import { LazyCanvasFont } from "../types/LazyCanvasFont";

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
     * @param {string} path - The path to the font file
     * @important The base folder in the path is the root folder of the project
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