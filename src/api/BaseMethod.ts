import { LazyCanvasMethod } from "../types/LazyCanvasMethod";

export class BaseMethod {
    data: LazyCanvasMethod;

    constructor (data?: LazyCanvasMethod) {
        this.data = data ? { ...data } : {} as LazyCanvasMethod;
    }

    setName(name: string) {
        if (!name) throw new Error('Name must be provided');
        this.data.name = name;
        return this;
    }

    setMethod(method: Function) {
        if (!method) throw new Error('Method must be provided');
        this.data.method = method;
        return this;
    }

    toJSON() {
        return { ...this.data };
    }
}