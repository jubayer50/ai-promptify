import {
  authHeader,
  base_url,
  handleStatusCode,
  serverFetch,
} from "../core/server";

export const getCommentsByPromptIdAndUserId = async (promptId, userId) => {
  const res = await fetch(
    `${base_url}/api/comments?promptId=${promptId}&userId=${userId}`,
    { headers: await authHeader() },
  );
  return res.json();
};

export const getUserComments = async (userId) => {
  const res = await fetch(`${base_url}/api/comments?userId=${userId}`, {
    headers: await authHeader(),
  });
  return handleStatusCode(res);
};

export const getComments = async () => {
  return serverFetch("/api/comments");
};
