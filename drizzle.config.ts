import { defineConfig } from "drizzle-kit";
import { getDatabaseConnection } from "./src/utils/helpers/getDatabaseConnection";

export default defineConfig({
  out: "./src/database/migrations",
  schema: "./src/database/schema/schema.ts",
  dialect: "sqlite",
  dbCredentials: {
    url: getDatabaseConnection(),
  },
  migrations: {
    prefix: "timestamp",
    table: "data_migrations",
    schema: "public",
  },
});
