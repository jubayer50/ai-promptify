import { getUserComments } from "@/lib/api/commentsAndRating";
import { getUserSession } from "@/lib/core/session";
import React from "react";
import { BsCalendar2Date } from "react-icons/bs";
import { FaStar } from "react-icons/fa";

const MyReviewPage = async () => {
  const user = await getUserSession();

  const getUserAllComments = await getUserComments(user?.id);

  return (
    <div className="max-w-330 mx-auto px-3 mb-10">
      <div>
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          Review{" "}
          <span className="bg-linear-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
            Insights
          </span>
        </h2>
        <p className="">
          Monitor user feedback and gain insights to improve your prompts and
          create better AI experiences.
        </p>
      </div>

      <div className="mt-6 space-y-5">
        {getUserAllComments.map((comment) => (
          <div key={comment?._id} className="p-3 rounded-md border">
            <div>
              <p>
                <span className=" font-medium">Prompt Title: </span>
                {comment?.promptTitle}
              </p>
              <p className="text-[12px] flex gap-1.5 items-center">
                <BsCalendar2Date size={10}></BsCalendar2Date>

                {new Date(comment?.createAt).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </p>
            </div>

            <div className="flex flex-col mt-2 md:flex-row items-start gap-2 justify-between">
              <p>
                <span className="font-medium">Comment: </span>
                {comment?.comment}
              </p>
              <p className="flex items-center gap-1.5">
                <FaStar size={15}></FaStar> {comment?.rating}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyReviewPage;
