import { describeRoute } from "hono-openapi";

export const getSettingsDoc = describeRoute({
  description: "GET Settings Endpoint",
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
  tags: ["Settings"],
});

export const postSettingsDoc = describeRoute({
  description: "POST Settings Endpoint",
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
  tags: ["Settings"],
});

export const putSettingsDoc = describeRoute({
  description: "PUT Settings Endpoint",
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
  tags: ["Settings"],
});

export const deleteSettingsDoc = describeRoute({
  description: "DELETE Settings Endpoint",
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
  tags: ["Settings"],
});
