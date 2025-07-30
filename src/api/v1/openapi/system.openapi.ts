import { describeRoute } from "hono-openapi";

export const healthCheckDoc = describeRoute({
  description: "Health Check Endpoint",
  responses: {
    200: {
      description: "Successful response",
      content: {
        "application/json": {
          schema: { type: "string" },
        },
      },
    },
  },
});
