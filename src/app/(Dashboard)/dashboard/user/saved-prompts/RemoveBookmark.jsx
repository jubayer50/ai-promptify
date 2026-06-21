"use client";

import { removeBookmark } from "@/lib/action/bookmarks";
import { Button, toast } from "@heroui/react";
import { useRouter } from "next/navigation";

const RemoveBookmark = ({ promptId, user }) => {
  const router = useRouter();

  // console.log(_id, user);
  const handleRemoveBookMark = async () => {
    const res = await removeBookmark(promptId, user?.id);
    if (res.deletedCount > 0) {
      toast.success("Unsave successfully done");

      router.refresh();
    }
  };

  return (
    <Button
      onClick={handleRemoveBookMark}
      size="sm"
      className="bg-transparent border border-purple-600 text-black rounded-md w-full"
    >
      Remove Bookmark
    </Button>
  );
};

export default RemoveBookmark;
