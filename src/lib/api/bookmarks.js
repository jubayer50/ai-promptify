import { base_url } from "../core/server";

export const getBookmarkByUserIdAndPromptId = async (userId, promptId) => {
  const res = await fetch(
    `${base_url}/api/bookmarks?userId=${userId}&promptId=${promptId}`,
  );
  return res.json();
};

export const getUserAllBookmarks = async (userId) => {
  const res = await fetch(`${base_url}/api/bookmarks?userId=${userId}`);
  return res.json();
};
