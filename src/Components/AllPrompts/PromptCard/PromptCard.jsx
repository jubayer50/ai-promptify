import { Copy, StarFill } from "@gravity-ui/icons";
import { Button } from "@heroui/react";

import Image from "next/image";
import Link from "next/link";

const PromptCard = async ({ prompt }) => {
  // TODO make capital of p to curet pending
  return (
    <div>
      {prompt?.status !== "pending" && (
        <div className="border rounded-md overflow-hidden group">
          <div className="h-60 overflow-hidden border-b">
            <Image
              src={prompt.image}
              alt={prompt?.prompt_title}
              width={800}
              height={800}
              className="h-full w-full object-cover aspect-square group-hover:scale-104 transition-all duration-300"
            ></Image>
          </div>

          <div className="p-4 space-y-3">
            <div className="flex gap-3">
              <p className="text-[12px] border border-purple-300 rounded-full bg-purple-100 px-2 py-.5 w-fit">
                {prompt?.ai_tool.toUpperCase()}
              </p>
              <p className="text-[12px] border border-pink-300 rounded-full bg-pink-100 px-2 py-.5 w-fit">
                {prompt?.difficulty_level.toUpperCase()}
              </p>
            </div>

            <h2 className="font-bold text-xl md:text-2xl">
              {prompt?.prompt_title}
            </h2>

            <p className="line-clamp-3">{prompt?.prompt_description}</p>

            <div className="pt-3 border-t flex justify-between items-center">
              <div>
                <p
                  className={`text-[12px] border px-2 rounded-full py-.5 w-fit ${prompt?.status == "Pending" ? "border-red-300 bg-red-100 text-red-600" : "border-green-300 bg-green-100 text-green-600"}`}
                >
                  {prompt?.status.toUpperCase()}
                </p>
              </div>

              <div className="flex gap-6">
                <div className="flex items-center gap-2">
                  <Copy className="w-4 h-4 text-purple-600"></Copy>
                  <span>{prompt?.copyCount}</span>
                </div>

                <div className="flex items-center gap-2">
                  <StarFill className="w-4 h-4 text-purple-600"></StarFill>
                  <span>0</span>
                </div>
              </div>
            </div>

            <div className="mt-4">
              <Link href={`/all-prompts/${prompt._id}`}>
                <Button
                  className={
                    "w-full rounded-md bg-linear-to-r from-purple-600 to-pink-500"
                  }
                >
                  View Details
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PromptCard;
