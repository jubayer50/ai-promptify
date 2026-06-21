import { getUserAllBookmarks } from "@/lib/api/bookmarks";
import { getUserSession } from "@/lib/core/session";
import { Button } from "@heroui/react";
import Link from "next/link";
import React from "react";
import RemoveBookmark from "./RemoveBookmark";

const SavedPromptsPage = async () => {
  const user = await getUserSession();

  const bookmarks = await getUserAllBookmarks(user?.id);

  /**
 *{
    "_id": "6a3609cfa14dc40e23658a40",
    "promptId": "6a33e0ba7e48e06ae98e496b",
    "promptTitle": "Ut nobis eiusmod acc",
    "userId": "6a336c6053c1e1314629a757",
    "userName": "Jubayer",
    "bookmark": true
}
 */

  return (
    <div className="max-w-330 mx-auto px-3">
      <div>
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          Bookmarked{" "}
          <span className="bg-linear-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
            Inspirations
          </span>
        </h2>
        <p className="">
          Explore the prompts you saved for future use and keep your best AI
          resources organized.
        </p>
      </div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {bookmarks.map((bookmark) => (
          <div
            key={bookmark?._id}
            className="border border-purple-600 p-2 rounded-md h-full flex flex-col"
          >
            <div className="flex flex-col flex-1">
              <div className="flex-1">
                <h2 className="font-bold text-lg line-clamp-2">
                  {bookmark?.promptTitle}
                </h2>

                <p className="mt-2 line-clamp-3">
                  {bookmark?.promptDescription}
                </p>
              </div>

              <div className="flex flex-col md:flex-row gap-2.5 mt-auto pt-3">
                <Link
                  href={`/all-prompts/${bookmark?.promptId}`}
                  className="w-full"
                >
                  <Button
                    size="sm"
                    className="bg-linear-to-r from-purple-600 to-pink-500 rounded-md w-full"
                  >
                    View
                  </Button>
                </Link>

                <RemoveBookmark
                  promptId={bookmark?.promptId}
                  user={user}
                ></RemoveBookmark>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SavedPromptsPage;
