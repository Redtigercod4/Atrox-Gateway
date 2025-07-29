import type { FC } from "hono/jsx";
import { Layout } from "../components/Layout";

const Dashboard: FC = () => {
  return (
    <Layout>
      <h1>Welcome to the Atrox Gateway</h1>
    </Layout>
  );
};

export default Dashboard;
