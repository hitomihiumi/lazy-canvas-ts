import { FilterType, StringFilterType } from "./enums";

export interface LazyCanvasFilter {
    structureType: string;
    type: FilterType | StringFilterType;
    option: number;

    toJSON(): LazyCanvasFilter;
}