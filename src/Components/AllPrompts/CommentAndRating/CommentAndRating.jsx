"use client";

import { createCommentAndRating } from "@/lib/action/CommentAndRating";
import { Button, TextArea, TextField, toast } from "@heroui/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaStar } from "react-icons/fa";

const CommentAndRating = ({ prompt, user }) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const router = useRouter();

  const handlePost = async () => {
    const commentData = {
      promptId: prompt?._id,
      promptTitle: prompt?.prompt_title,
      rating: rating,
      comment: comment,
      userId: user?.id,
    };

    const res = await createCommentAndRating(commentData);

    if (res.insertedId) {
      toast.success("Comment submitted");
      setComment("");

      router.refresh();
    }

    if (res.message) {
      toast.warning(res.message);
    }
  };

  return (
    <div className="mt-8">
      <div>
        <h2 className="font-semibold text-lg">Comment & Review:</h2>

        {prompt?.visibility !== "privet" || user.plan !== "free" ? (
          <div>
            <div className="flex items-center gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  onClick={() => setRating(star)}
                  className="cursor-pointer"
                >
                  <FaStar
                    size={16}
                    className={
                      star <= rating ? "text-yellow-400" : "text-gray-300"
                    }
                  />
                </button>
              ))}

              <span className="ml-2 text-sm">Rating: {rating}</span>
            </div>

            <div className="mt-2">
              <TextField name="comment">
                <TextArea
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="Tell us you comment and review"
                  className={"rounded-md border border-purple-300 shadow-none"}
                />
              </TextField>

              <div className="mt-2">
                <Button
                  onClick={handlePost}
                  className={
                    "bg-linear-to-r from-purple-600 to-pink-500 rounded-md"
                  }
                >
                  Post Comment
                </Button>
              </div>
            </div>
          </div>
        ) : (
          <div className="p-3 rounded-md border border-purple-300 mt-2 text-center">
            <p className="font-medium text-purple-500">
              To access comment section need to be a premium user.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CommentAndRating;
