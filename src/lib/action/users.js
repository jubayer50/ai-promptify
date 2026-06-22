"use server";

import { auth } from "../auth";
import { headers } from "next/headers";
import { revalidatePath } from "next/cache";

export const updateUserRole = async (userId, role) => {
  const data = await auth.api.setRole({
    body: { userId, role },
    headers: await headers(),
  });

  revalidatePath("/dashboard/admin/all-users");

  return data;
};

export const removeUser = async (userId) => {
  const data = await auth.api.removeUser({
    body: {
      userId,
    },

    headers: await headers(),
  });

  revalidatePath("/dashboard/admin/all-users");

  return data;
};
