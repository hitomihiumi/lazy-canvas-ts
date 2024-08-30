import { LazyError } from "./LazyUtils";
import { LazyCanvas } from "../LazyCanvas";

export class LazyCanvasPlugin {
    public onload(lazycanvas: LazyCanvas): void {
        throw new LazyError("Plugin must implement onload()");
    }

    public unload(lazycanvas: LazyCanvas): void {
        throw new LazyError("Plugin must implement unload()");
    }
}