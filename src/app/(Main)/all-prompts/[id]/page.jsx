import BookMarkButton from "@/Components/AllPrompts/BookMarkButton/BookMarkButton";
import CommentAndRating from "@/Components/AllPrompts/CommentAndRating/CommentAndRating";
import CopyButton from "@/Components/AllPrompts/CopyButton/CopyButton";
import DisplayComment from "@/Components/AllPrompts/DisplayComment/DisplayComment";
import ReportPrompt from "@/Components/AllPrompts/ReportPrompt/ReportPrompt";
import { getBookmarkByUserIdAndPromptId } from "@/lib/api/bookmarks";
import { getPromptById } from "@/lib/api/prompts";
import { getUserSession } from "@/lib/core/session";
import { ArrowLeft } from "@gravity-ui/icons";
import { Button, TextArea, TextField } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

const PromptDetailPage = async ({ params }) => {
  const { id } = await params;
  const user = await getUserSession();

  const getPrompt = await getPromptById(id);
  const getUserBookmark = await getBookmarkByUserIdAndPromptId(user?.id, id);

  const {
    _id,
    prompt_title,
    prompt_description,
    prompt_content,
    prompt_category,
    ai_tool,
    difficulty_level,
    visibility,
    copyCount,
    status,
    createdAt,
    creatorName,
    creatorImage,
    creatorEmail,
    bookmarkCount,
  } = getPrompt;
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

  return (
    <div className="max-w-330 mx-auto px-3 mt-5 mb-8">
      <Link href={"/all-prompts"} className="flex items-center gap-2">
        <ArrowLeft></ArrowLeft> Back to previous page
      </Link>

      <div className="mt-8 flex flex-col md:flex-row gap-10">
        <div className="p-4 border border-purple-200 rounded-md h-fit md:w-[65%]">
          <h2 className="text-xl md:text-2xl font-bold">{prompt_title}</h2>
          <p className="mt-3">{prompt_description}</p>

          <div className="mt-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium">Prompt Content</h3>

              <div className="flex gap-2">
                <CopyButton prompt={getPrompt} user={user}></CopyButton>

                <BookMarkButton
                  prompt={getPrompt}
                  bookmark={getUserBookmark}
                ></BookMarkButton>

                <ReportPrompt prompt={getPrompt} user={user}></ReportPrompt>
              </div>
            </div>

            <div className="border border-purple-200 rounded-md min-h-24 mt-2.5 overflow-hidden">
              {visibility !== "privet" || user.plan !== "free" ? (
                <p className="text-purple-500 p-3">{prompt_content}</p>
              ) : (
                <div className="h-full bg-purple-200 flex items-center justify-center p-6 ">
                  <div className="text-center space-y-1.5">
                    <p className="font-medium">
                      To access the Privet content, you need to be a premium
                      member
                    </p>
                    <Button
                      className={
                        "rounded-md bg-linear-to-r from-purple-600 to-pink-500"
                      }
                    >
                      Unlock Premium
                    </Button>
                  </div>
                </div>
              )}
            </div>

            {/*how to use ai */}
            <div className="mt-3 space-y-2">
              <h4 className="font-medium text-lg">How to Use AI Effectively</h4>

              <p>
                Using AI the right way can save time, improve productivity, and
                help you achieve smarter results with better prompts.
              </p>

              <p className="text-[14px] mt-3">
                <span className="font-medium">Add Context</span> — Share
                necessary details,{" "}
                <span className="font-medium">Use Steps</span> — Break tasks
                into parts. <span className="font-medium">Refine Prompts</span>{" "}
                — Improve and retry{" "}
                <span className="font-medium">Review Output</span> — Check
                before using.
              </p>
            </div>
          </div>
        </div>

        {/* prompt details more right side */}
        <div className="p-4 rounded-md border border-purple-200 md:w-[35%] h-fit">
          <h2 className="text-lg font-semibold pb-3 border-b border-purple-200">
            Prompt Details
          </h2>

          <div className="mt-3 space-y-2.5 border-b border-purple-200 pb-3">
            <div className="flex justify-between">
              <p>AI Engine</p>
              <p>{ai_tool?.toUpperCase()}</p>
            </div>

            <div className="flex justify-between">
              <p>Category</p>
              <p>{prompt_category?.toUpperCase()}</p>
            </div>

            <div className="flex justify-between">
              <p>Visibility</p>
              <p>{visibility?.toUpperCase()}</p>
            </div>

            <div className="flex justify-between">
              <p>Difficulty</p>
              <p>{difficulty_level?.toUpperCase()}</p>
            </div>

            <div className="flex justify-between">
              <p>Status</p>
              <p>{status?.toUpperCase()}</p>
            </div>

            <div className="flex justify-between">
              <p>Published Date</p>
              <p>
                {" "}
                {new Date(createdAt).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </p>
            </div>
          </div>

          <div className="mt-3 border-b border-purple-200 pb-3 space-y-2">
            <div className="flex justify-between">
              <p>Total Copies</p>
              <p>{copyCount}</p>
            </div>

            <div className="flex justify-between">
              <p>Total Bookmarks</p>
              <p>{bookmarkCount}</p>
            </div>
          </div>

          <div className="mt-3">
            <h4 className="font-semibold">Creator Details</h4>

            <div className="mt-1 flex items-center gap-3">
              <div className="h-10 w-10 rounded-full border-2 border-purple-300">
                <Image
                  src={creatorImage}
                  alt={creatorName}
                  width={20}
                  height={20}
                  className="w-full h-full rounded-full object-cover"
                ></Image>
              </div>

              <div>
                <h3 className="font-semibold">{creatorName}</h3>
                <p className="text-[12px]">{creatorEmail}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* comment and review related */}
      <CommentAndRating prompt={getPrompt} user={user}></CommentAndRating>

      {/* display comment and rating */}
      <div className="mt-6">
        <DisplayComment prompt={getPrompt} user={user}></DisplayComment>
      </div>
    </div>
  );
};

export default PromptDetailPage;
