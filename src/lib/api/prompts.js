import {
  authHeader,
  base_url,
  handleStatusCode,
  serverFetch,
} from "../core/server";

export const getPrompts = async (query) => {
  return serverFetch(`/api/prompts?${query}`);
};

// export const getPrompts = async (query) => {
//   const res = fetch(`/api/prompts?${query}`);

//   return res.json();
// };

export const getPromptById = async (promptId) => {
  const res = await fetch(`${base_url}/api/prompts/${promptId}`, {
    headers: await authHeader(),
  });

  return handleStatusCode(res);
};

export const getUserPromptsByUserId = async (userId) => {
  const res = await fetch(`${base_url}/api/prompts?userId=${userId}`);
  return res.json();
};
