import { base_url } from "../core/server";

export const getUserPromptsByUserId = async (userId) => {
  const res = await fetch(`${base_url}/api/prompts?userId=${userId}`);
  return res.json();
};
