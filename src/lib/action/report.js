import { serverMutation } from "../core/server";

export const reportPrompt = async (data) => {
  return serverMutation("/api/reports", data);
};
