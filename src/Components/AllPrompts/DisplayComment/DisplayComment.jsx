import { getCommentsByPromptIdAndUserId } from "@/lib/api/commentsAndRating";
import Image from "next/image";

import { FaStar } from "react-icons/fa";

const DisplayComment = async ({ prompt, user }) => {
  const comments = await getCommentsByPromptIdAndUserId(prompt?._id, user?.id);

  console.log(comments, "from comment ");

  /**
   * _id: '6a368e34f88572a6c40e2e38',
      promptId: '6a33e0d57e48e06ae98e496d',
      promptTitle: 'Consequatur Consequ',
      rating: 0,
      comment: 'That is a wonderful prompt.',
      userId: '6a336c6053c1e1314629a757',
      userName: 'Jubayer',
      userImage: 'https://images.unsplash.com/photo-1537511446984-935f663eb1f4',
      createAt: '2026-06-20T12:57:24.408Z'
   */

  return (
    <div>
      <h3 className="font-semibold">Comments</h3>
      {comments.length > 0 ? (
        <div className="mt-2 space-y-3">
          {comments.map((comment) => (
            <div
              key={comment?._id}
              className="p-2 rounded-md border border-purple-300 flex justify-between"
            >
              <div className="flex gap-2">
                <div className="w-9 h-9 rounded-full">
                  <Image
                    src={comment?.userImage}
                    alt={comment?.userName}
                    width={50}
                    height={50}
                    className="w-full h-full rounded-full object-cover"
                  ></Image>
                </div>

                <div>
                  <p className="font-semibold text-[12px]">
                    {comment?.userName}
                  </p>
                  <p className="text-[12px] text-gray-400">
                    {new Date(comment?.createAt).toLocaleDateString("en-US", {
                      month: "short",
                      data: "numeric",
                      year: "numeric",
                    })}
                  </p>

                  <p className="text-[13px]">{comment?.comment}</p>
                </div>
              </div>

              <div>
                <p className="flex items-center gap-1 text-[14px]">
                  <span className="font-medium">Ratings:</span>{" "}
                  {comment?.rating}{" "}
                  <FaStar size={14} className="text-yellow-400"></FaStar>
                </p>
              </div>
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
