import { LazyCanvasLayer } from "./LazyCanvasLayer";
import { LazyCanvasFont } from "./LazyCanvasFont";
import { Path2DLayer } from "../structures/Path2DLayer";

export interface LazyCanvasData {
    name?: string | null | undefined;
    description?: string | null | undefined;
    emoji?: string | null | undefined;
    width: number;
    height: number;
    layers: Array<LazyCanvasLayer | Path2DLayer>;
    fonts?: Array<LazyCanvasFont>;
    methods: Array<{ name: string, method: Function }>;
    errorImage: string | null;
    structureType: string;
}
