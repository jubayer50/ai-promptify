"use server";

import { serverMutation } from "../core/server";

export const updatePrompt = async (id, data) => {
  const result = serverMutation(`/api/prompts/${id}`, data, "PATCH");

  return result;
};

export const makeBookmark = async (data) => {
  return serverMutation("/api/bookmarks", data, "POST");
};
