import { base_url, serverFetch } from "../core/server";

export const getCommentsByPromptIdAndUserId = async (promptId, userId) => {
  const res = await fetch(
    `${base_url}/api/comments?promptId=${promptId}&userId=${userId}`,
  );
  return res.json();
};

export const getUserComments = async (userId) => {
  const res = await fetch(`${base_url}/api/comments?userId=${userId}`);
  return res.json();
};

export const getComments = async () => {
  return serverFetch("/api/comments");
};
