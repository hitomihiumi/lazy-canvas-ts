export interface LazyCanvasMethod {
    name: string;
    method: Function;

    toJSON(): LazyCanvasMethod;
}