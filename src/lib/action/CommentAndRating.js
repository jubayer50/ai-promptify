import { serverMutation } from "../core/server";

export const createCommentAndRating = async (data) => {
  return serverMutation("/api/comments", data);
};
