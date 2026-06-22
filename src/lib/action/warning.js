import { serverMutation } from "../core/server";

export const submitWarning = async (data) => {
  return serverMutation("/api/warnings", data);
};
