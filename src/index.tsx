import { Hono } from 'hono';
import Dashboard from './pages/Dashboard';

const app = new Hono();

app.get('/', (c) => {
    return c.html(<Dashboard />)
})

export default {
    port: 3000,
    fetch: app.fetch,
};