import type { HealthCheck } from "../utils/types";

export const healthCheck = (): HealthCheck => {
  const uptimeTotalHours = Math.floor(process.uptime() / 3600);
  const uptimeTotalMinutes = Math.floor((process.uptime() % 3600) / 60);
  const uptimeTotalSeconds = Math.floor(process.uptime() % 60);
  return {
    uptime: `${uptimeTotalHours} hours : ${uptimeTotalMinutes} minutes : ${uptimeTotalSeconds} seconds`,
    message: "OK",
    timestamp: new Date(Date.now()),
  };
};
