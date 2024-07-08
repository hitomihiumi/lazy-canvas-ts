import { LazyError } from "../types/LazyUtils";

export class LazyCanvasPlugin {
    public onload(lazycanvas: any): void {
        throw new LazyError("Plugin must implement onload()");
    }

    public unload(lazycanvas: any): void {
        throw new LazyError("Plugin must implement unload()");
    }
}