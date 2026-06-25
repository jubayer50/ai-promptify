import { authHeader, base_url, serverMutation } from "../core/server";

export const reportPrompt = async (data) => {
  return serverMutation("/api/reports", data);
};

export const deleteReport = async (id) => {
  const res = await fetch(`${base_url}/api/reports/${id}`, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json",
      ...(await authHeader()),
    },
  });

  return res.json();
};
