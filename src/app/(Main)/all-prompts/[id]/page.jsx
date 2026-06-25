import BookMarkButton from "@/Components/AllPrompts/BookMarkButton/BookMarkButton";
import CommentAndRating from "@/Components/AllPrompts/CommentAndRating/CommentAndRating";
import CopyButton from "@/Components/AllPrompts/CopyButton/CopyButton";
import DisplayComment from "@/Components/AllPrompts/DisplayComment/DisplayComment";
import ReportPrompt from "@/Components/AllPrompts/ReportPrompt/ReportPrompt";
import { getBookmarkByUserIdAndPromptId } from "@/lib/api/bookmarks";
import { getPromptById } from "@/lib/api/prompts";
import { getUserSession } from "@/lib/core/session";
import { ArrowLeft } from "@gravity-ui/icons";
import { Button } from "@heroui/react";
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
                  bookmark={getUserBookmark[0] || []}
                ></BookMarkButton>

                <ReportPrompt prompt={getPrompt} user={user}></ReportPrompt>
              </div>
            </div>

            <div className="border border-purple-200 rounded-md min-h-24 mt-2.5 overflow-hidden">
              {visibility !== "privet" || user.plan !== "free" ? (
                <p className="text-purple-500 p-3">{prompt_content}</p>
              ) : (
                <div className="h-full bg-purple-200 flex items-center justify-center p-6 ">
                  <div className="text-center space-y-2.5">
                    <p className="font-medium">
                      To access the Privet content, you need to be a premium
                      member
                    </p>

                    <div className="flex flex-col md:flex-row items-center gap-2.5 justify-center">
                      <form
                        action={`/api/subscription?redirect=/all-prompts/${_id}`}
                        method="POST"
                      >
                        <Button
                          type="submit"
                          className="rounded-md bg-linear-to-r from-purple-600 to-pink-500"
                        >
                          Unlock Premium
                        </Button>
                      </form>

                      <Link href={"/plan"}>
                        <Button
                          className={
                            "rounded-md bg-transparent text-black border border-purple-600"
                          }
                        >
                          View Plan
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/*how to use ai */}
            <div className="mt-6 space-y-2 ">
              <h4 className="font-medium text-lg">How to Use AI Effectively</h4>

              <div className="bg-purple-50 p-3 rounded-md">
                <p>
                  Using AI the right way can save time, improve productivity,
                  and help you achieve smarter results with better prompts.
                </p>

                <p className="text-[14px] mt-3">
                  <span className="font-medium">Add Context</span> — Share
                  necessary details,{" "}
                  <span className="font-medium">Use Steps</span> — Break tasks
                  into parts.{" "}
                  <span className="font-medium">Refine Prompts</span> — Improve
                  and retry <span className="font-medium">Review Output</span> —
                  Check before using.
                </p>
              </div>
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
                  src={creatorImage || "https://i.ibb.co.com/mrbQZFhn/user.png"}
                  alt={creatorName || "user image"}
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
