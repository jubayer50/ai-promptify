import { protectServerFetch } from "../core/server";

export const getUsers = async () => {
  return protectServerFetch("/api/users");
};
