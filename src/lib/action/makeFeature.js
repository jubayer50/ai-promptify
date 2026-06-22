import { serverMutation } from "../core/server";

export const makeFeature = async (data) => {
  return serverMutation("/api/features", data);
};
