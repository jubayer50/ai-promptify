"use client";

import { removeBookmark } from "@/lib/action/bookmarks";
import { makeBookmark } from "@/lib/action/prompts";
import { authClient } from "@/lib/auth-client";
import { Bookmark, BookmarkFill } from "@gravity-ui/icons";
import { Button, toast } from "@heroui/react";
import { useRouter } from "next/navigation";

const BookMarkButton = ({ prompt, bookmark }) => {
  const { _id, prompt_title } = prompt;

  const router = useRouter();

  /**
   {
    "_id": "6a34e6fffb87770413b6f99f",
    "prompt_title": "Cum voluptatem Volu",
    "prompt_description": "Mollitia quia commod",
    "prompt_content": "Maiores nemo alias d",
    "ai_tool": "claude",
    "tags": "Facilis ipsa volupt",
    "difficulty_level": "intermediate",
    "image": "https://i.ibb.co/s94nQNDR/redux.png",
    "visibility": "privet",
    "copyCount": 0,
    "status": "Pending",
    "userId": "6a336c6053c1e1314629a757",
    "createdAt": "2026-06-19T06:51:43.201Z",
    "creatorName": "Jubayer",
    "creatorEmail": "jubayer@gmail.com",
    "creatorImage": "https://images.unsplash.com/photo-1537511446984-935f663eb1f4"
}
   
   */
  // console.log(prompt);

  const { data: session } = authClient.useSession();
  const user = session?.user;

  const handleBookMark = async () => {
    const bookMarkData = {
      promptId: _id,
      promptTitle: prompt_title,
      userId: user?.id,
      userName: user?.name,
      bookmark: true,
    };

    const res = await makeBookmark(bookMarkData);

    if (res.insertedId) {
      toast.success("Save successfully done");
      router.refresh();
    }

    if (res.message) {
      toast.warning("You already saved this prompt");
    }
  };

  const handleRemoveBookMark = async () => {
    await removeBookmark(_id, user?.id);
    router.refresh();
  };

  return (
    <Button
      onClick={bookmark.bookmark ? handleRemoveBookMark : handleBookMark}
      isIconOnly
      variant="secondary"
      className={"bg-purple-100 rounded-md"}
    >
      {bookmark.bookmark ? (
        <BookmarkFill></BookmarkFill>
      ) : (
        <Bookmark></Bookmark>
      )}
    </Button>
  );
};

export default BookMarkButton;
