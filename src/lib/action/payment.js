import { serverMutation } from "../core/server";

export const paymentSubmit = async (data) => {
  return serverMutation("/api/payments", data);
};
