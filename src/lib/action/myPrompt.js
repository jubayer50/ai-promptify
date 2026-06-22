import { base_url } from "../core/server";

export const deletePrompt = async (promptID) => {
  const res = await fetch(`${base_url}/api/prompts/${promptID}`, {
    method: "DELETE",
    headers: { "Content-type": "application/json" },
  });

  return res.json();
};
