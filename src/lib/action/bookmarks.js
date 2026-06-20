import { base_url } from "../core/server";

export const removeBookmark = async (promptId, userId) => {
  const res = await fetch(
    `${base_url}/api/bookmarks/${promptId}?userId=${userId}`,
    {
      method: "DELETE",
      headers: { "Content-type": "application/json" },
    },
  );

  return res.json();
};
