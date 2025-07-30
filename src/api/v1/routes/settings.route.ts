import { Hono } from "hono";
import { deleteSettingsDoc, getSettingsDoc, postSettingsDoc, putSettingsDoc } from "../openapi/settings.openapi";

const route = new Hono();

route.get("/", getSettingsDoc, async (c) => {
  return c.json({ message: "Get Settings Endpoint" });
});

route.post("/", postSettingsDoc, async (c) => {
  return c.json({ message: "POST Settings Endpoint" });
});

route.put("/", putSettingsDoc, async (c) => {
  return c.json({ message: "PUT Settings Endpoint" });
});

route.delete("/", deleteSettingsDoc, async (c) => {
  return c.json({ message: "DELETE Settings Endpoint" });
});

export default route;
