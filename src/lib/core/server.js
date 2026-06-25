import { redirect } from "next/navigation";
import { getTokenServer } from "../getTokenServer";

export const base_url = process.env.NEXT_PUBLIC_BASE_URL;

export const authHeader = async () => {
  const token = await getTokenServer();

  const headers = token
    ? {
        authorization: `Bearer ${token}`,
      }
    : {};

  return headers;
};

export const serverFetch = async (path) => {
  const res = await fetch(`${base_url}${path}`);
  return res.json();
};

export const protectServerFetch = async (path) => {
  const res = await fetch(`${base_url}${path}`, {
    headers: await authHeader(),
  });

  return handleStatusCode(res);
};

export const serverMutation = async (path, data, method = "POST") => {
  const res = await fetch(`${base_url}${path}`, {
    method: method,
    headers: { "Content-type": "application/json", ...(await authHeader()) },
    body: JSON.stringify(data),
  });

  return handleStatusCode(res);
};

export const handleStatusCode = (res) => {
  if (res.status === 401) {
    redirect("/unauthorized");
  } else if (res.status === 403) {
    redirect("/forbidden");
  }

  return res.json();
};
