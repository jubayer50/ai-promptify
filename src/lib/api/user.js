import { base_url } from "../core/server";

export const getUserById = async (userId) => {
  const res = await fetch(`${base_url}/api/users?userId=${userId}`);
  return res.json();
};
