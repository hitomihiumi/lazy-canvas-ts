import { LazyCanvasFilter } from "../types/LazyCanvasFilter";

export class Filter {
    data: LazyCanvasFilter;

    constructor(data?: LazyCanvasFilter) {
        this.data = data ? { ...data } : {} as LazyCanvasFilter;
        this.data.structureType = 'filter';
    }

    setType(type: "daither565" | "normalize" | "contrast" | "brightness" | "sepia" | "invert" | "gaussian" | "blur" | "grayscale") {
        if (!type) throw new Error('Type must be provided');
        this.data.type = type;
        return this;
    }

    setOption(option: number) {
        if (!option) throw new Error('Option must be provided');
        if (isNaN(option)) throw new Error('Option must be a number');
        this.data.option = option;
        return this;
    }

    toJSON() {
        return { ...this.data }
    }
}