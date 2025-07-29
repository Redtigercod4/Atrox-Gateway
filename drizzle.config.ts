import { defineConfig } from "drizzle-kit";
import { getDatabaseConnection } from "./src/utils/helpers/getDatabaseConnection";

export default defineConfig({
  out: "./drizzle",
  schema: "./src/database/schema.ts",
  dialect: "sqlite",
  dbCredentials: {
    url: getDatabaseConnection(),
  },
});
