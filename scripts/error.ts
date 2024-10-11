import { LazyError, LazyLog } from "../dist/types/LazyUtils";

LazyLog.log("Test log message.", "info");

throw new LazyError("Test error message.");