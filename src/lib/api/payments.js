import { protectServerFetch } from "../core/server";

export const getPayments = async () => {
  return protectServerFetch("/api/payments");
};
