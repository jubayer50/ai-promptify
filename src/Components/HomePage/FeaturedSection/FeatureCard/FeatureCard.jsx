import { Copy, StarFill } from "@gravity-ui/icons";
import { Button } from "@heroui/react";

import Image from "next/image";
import Link from "next/link";

const FeatureCard = async ({ feature }) => {
  const {
    _id,
    prompt_title,
    prompt_description,
    status,
    image,
    ai_tool,
    difficulty_level,
    visibility,
    copyCount,
  } = feature?.promptData;
  return (
    <div>
      {status === "Approve" && (
        <div className="border rounded-md overflow-hidden group h-full flex flex-col">
          <div className="h-60 overflow-hidden border-b flex flex-col shrink-0">
            <Image
              src={image}
              alt={prompt_title}
              width={800}
              height={800}
              className="h-full w-full object-cover aspect-square group-hover:scale-104 transition-all duration-300"
            />
          </div>

          <div className="p-4 space-y-3 flex flex-col flex-1">
            <div className="flex justify-between">
              <div className="flex gap-2 shrink-0">
                <p className="text-[12px] border border-purple-300 rounded-full bg-purple-100 px-2 py-.5 w-fit">
                  {ai_tool.toUpperCase()}
                </p>
                <p className="text-[12px] border border-pink-300 rounded-full bg-pink-100 px-2 py-.5 w-fit">
                  {difficulty_level.toUpperCase()}
                </p>
              </div>

              <div>
                <p
                  className={`${visibility == "privet" ? "border-red-500 bg-red-100 text-red-500" : ""} text-[12px] border rounded-full px-2 py-.5 w-fit`}
                >
                  {visibility == "privet" ? "PREMIUM" : "FREE"}
                </p>
              </div>
            </div>

            {/* Fixed title height */}
            <h2 className="font-bold text-xl md:text-2xl line-clamp-2 min-h-16">
              {prompt_title}
            </h2>

            {/* Fixed description height */}
            <p className="line-clamp-2 min-h-12">{prompt_description}</p>

            {/* Bottom section pushed down */}
            <div className="mt-auto">
              <div className="pt-3 border-t flex justify-between items-center">
                <div>
                  <p
                    className={`text-[12px] border px-2 rounded-full py-.5 w-fit ${
                      status == "Pending"
                        ? "border-red-300 bg-red-100 text-red-600"
                        : "border-green-300 bg-green-100 text-green-600"
                    }`}
                  >
                    {status.toUpperCase()}
                  </p>
                </div>

                <div className="flex gap-6">
                  <div className="flex items-center gap-2">
                    <Copy className="w-4 h-4 text-purple-600" />
                    <span>{copyCount}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <StarFill className="w-4 h-4 text-purple-600" />
                    <span>0</span>
                  </div>
                </div>
              </div>

              <div className="mt-4">
                <Link href={`/all-prompts/${_id}`}>
                  <Button className="w-full rounded-md bg-linear-to-r from-purple-600 to-pink-500">
                    View Details
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FeatureCard;
