import { getCommentsByPromptIdAndUserId } from "@/lib/api/commentsAndRating";

import { FaStar } from "react-icons/fa";

const DisplayComment = async ({ prompt, user }) => {
  const comments = await getCommentsByPromptIdAndUserId(prompt?._id, user?.id);

  return (
    <div>
      <h3 className="font-semibold">Comments</h3>
      {comments.length > 0 ? (
        <div className="mt-2 space-y-3">
          {comments.map((comment) => (
            <div
              key={comment?._id}
              className="p-2 rounded-md border border-purple-300"
            >
              <p className="flex items-center gap-1 text-[14px]">
                <span className="font-medium">Ratings:</span> {comment?.rating}{" "}
                <FaStar size={14} className="text-yellow-400"></FaStar>
              </p>

              <p className="mt-1 text-[14px]">{comment?.comment}</p>
            </div>
          ))}
        </div>
      ) : (
        <div className="border border-purple-300 rounded-md p-4 text-center mt-2">
          <p className="font-medium">No comment Yet</p>
        </div>
      )}
    </div>
  );
};

export default DisplayComment;
