export interface LazyCanvasFilter {
    structureType: string;
    type: string;
    option: number;

    toJSON(): LazyCanvasFilter;
}