export class LazyCanvasPlugin {
    public onload(lazycanvas: any): void {
        throw new Error("Plugin must implement onload()");
    }

    public unload(lazycanvas: any): void {
        throw new Error("Plugin must implement unload()");
    }
}