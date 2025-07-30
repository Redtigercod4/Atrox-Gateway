import { drizzle } from "drizzle-orm/bun-sqlite";
import { Database } from "bun:sqlite";
import { getDatabaseConnection } from "../utils/helpers/getDatabaseConnection";

const connection = getDatabaseConnection();

const sqlite = new Database(connection, { create: true });
const datastore = drizzle({ client: sqlite });

export { datastore };
