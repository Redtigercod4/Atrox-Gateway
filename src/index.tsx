import { Hono } from "hono";
import { openAPISpecs } from "hono-openapi";
import { Scalar } from "@scalar/hono-api-reference";
import { secureHeaders } from "hono/secure-headers";
import { csrf } from "hono/csrf";
import { cors } from "hono/cors";

// API Routes
import v1 from "./api/v1";

// UI Pages
import Dashboard from "./pages/Dashboard";

const app = new Hono();

app.use(secureHeaders());
app.use(csrf());
app.use("*", cors());

app.get("/", (c) => {
  return c.html(<Dashboard />);
});

app.route("/v1", v1);

app.get(
  "/openapi",
  openAPISpecs(app, {
    documentation: {
      info: {
        title: "Atrox Gateway",
        version: "1.0.0",
      },
      servers: [{ url: "http://localhost:3000" }],
    },
  })
);

app.get("/docs", Scalar({ theme: "saturn", url: "/openapi" }));

export default {
  port: 3000,
  fetch: app.fetch,
};
