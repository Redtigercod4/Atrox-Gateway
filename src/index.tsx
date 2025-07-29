import { Hono } from 'hono';
import { drizzle } from "drizzle-orm/bun-sqlite";
import { Database } from "bun:sqlite";

import Dashboard from './pages/Dashboard';
import { getDatabaseConnection } from "./utils/helpers/getDatabaseConnection";

const app = new Hono();
const connection = getDatabaseConnection();

const sqlite = new Database(connection);
const db = drizzle({ client: sqlite });

app.get('/', (c) => {
    return c.html(<Dashboard />)
})

export default {
    port: 3000,
    fetch: app.fetch,
};