import { serverFetch } from "../core/server";

export const getFeatures = async () => {
  return serverFetch("/api/features");
};
