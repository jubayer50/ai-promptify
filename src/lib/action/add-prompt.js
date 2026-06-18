"use server";

import { serverMutation } from "../core/server";

export const createPrompt = async (promptData) => {
  return serverMutation("/api/prompts", promptData);
};
