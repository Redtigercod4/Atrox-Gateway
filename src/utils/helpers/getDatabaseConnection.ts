import "dotenv/config";

export const getDatabaseConnection = () => {
  const connection = process.env.DB_FILE_NAME;

  if (!connection) {
    throw new Error("Unable to find Database Connection values.");
  }

  return connection;
};
