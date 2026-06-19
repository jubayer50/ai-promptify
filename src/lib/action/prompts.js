"use server";

import { revalidatePath } from "next/cache";
import { serverMutation } from "../core/server";

export const updatePromptsCopyCount = async (id, data) => {
  const result = serverMutation(`/api/prompts/${id}`, data, "PATCH");

  revalidatePath(`/all-prompts/${id}`);

  return result;
};
