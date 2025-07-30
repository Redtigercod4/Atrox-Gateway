import { Hono } from "hono";
import systemRoutes from "./routes/system.route";
import settingsRoutes from "./routes/settings.route";

const v1 = new Hono();

v1.route("/system", systemRoutes);
v1.route("/settings", settingsRoutes);

export default v1;
