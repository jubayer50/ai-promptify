import { base_url, serverFetch } from "../core/server";

export const getPrompts = async () => {
  return serverFetch("/api/prompts");
};

export const getPromptById = async (promptId) => {
  const res = await fetch(`${base_url}/api/prompts/${promptId}`);
  return res.json();
};

export const getUserPromptsByUserId = async (userId) => {
  const res = await fetch(`${base_url}/api/prompts?userId=${userId}`);
  return res.json();
};
