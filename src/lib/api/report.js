import { protectServerFetch } from "../core/server";

export const getReports = async () => {
  return protectServerFetch("/api/reports");
};
