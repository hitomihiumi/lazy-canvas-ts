export class LazyError extends Error {
    public message: string;

    public constructor(message: string) {
        super(message);
        this.message = "[LazyCanvas] [ERROR] " + message;
    }
}

export class LazyLog {
    public static log(message: string, type: string = "info"): void {
        console.log(`[LazyCanvas] [${type.toUpperCase()}] ${message}`);
    }
}