import { Hono } from "hono";
import { healthCheckDoc } from "../openapi/system.openapi";
import { healthCheck } from "../../../services/system.service";

const route = new Hono();

route.get("/health-check", healthCheckDoc, async (c) => {
  const currentHealthCheckStatus = healthCheck();
  return c.json(currentHealthCheckStatus);
});

export default route;
