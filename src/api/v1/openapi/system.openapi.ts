import { describeRoute } from "hono-openapi";

export const healthCheckDoc = describeRoute({
  description: "Health Check Endpoint",
  responses: {
    200: {
      description: "Successful response",
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              uptime: { type: "string" },
              message: { type: "string" },
              timestamp: { type: "string", format: "date-time" },
            },
          },
        },
      },
    },
  },
  tags: ["System"],
});
