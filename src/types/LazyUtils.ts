export class LazyError extends Error {
    public message: string;

    public constructor(message: string) {
        super(message);
        this.message = "[LazyCanvas] [ERROR] " + message;
    }
}

export class LazyLog {
    public static log(message: string, type: string = "info"): void {
        switch (type) {
            case "info":
                console.log("[LazyCanvas] [INFO] " + message);
                break;
            case "warn":
                console.warn("[LazyCanvas] [WARN] " + message);
                break;
            case "error":
                console.error("[LazyCanvas] [ERROR] " + message);
                break;
            default:
                console.log("[LazyCanvas] [INFO] " + message);
                break;
        }
    }
}
