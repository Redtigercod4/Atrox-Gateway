import { Hono } from "hono";
import systemRoutes from "./routes/system.route";

const v1 = new Hono();

v1.route("/system", systemRoutes);

export default v1;
