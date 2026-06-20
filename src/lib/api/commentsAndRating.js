import { base_url } from "../core/server";

export const getCommentsByPromptIdAndUserId = async (promptId, userId) => {
  const res = await fetch(
    `${base_url}/api/comments?promptId=${promptId}&userId=${userId}`,
  );
  return res.json();
};
