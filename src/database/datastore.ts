import { drizzle } from "drizzle-orm/bun-sqlite";
import { Database } from "bun:sqlite";
import { getDatabaseConnection } from "../utils/helpers/getDatabaseConnection";
import { migrate } from "drizzle-orm/bun-sqlite/migrator";

const connection = getDatabaseConnection();
console.log(connection);

const sqlite = new Database(connection, { create: true });
const datastore = drizzle({ client: sqlite });

const checkDbConnection = (): void => {
  datastore.$client.prepare("SELECT 1").get();
  console.log("Database Connection Successful.");
};

const applyMigrations = (): void => {
  console.log("Applying Migrations...");
  migrate(datastore, { migrationsFolder: "./src/database/migrations" });
  console.log("Migrations Applied.");
};

export { datastore, checkDbConnection, applyMigrations };
