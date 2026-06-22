"use client";

import { makeFeature } from "@/lib/action/makeFeature";
import { Button, toast } from "@heroui/react";
import { useRouter } from "next/navigation";

const MakeFuturePrompt = ({ prompt }) => {
  const router = useRouter();
  {
    /* 
      {
    "_id": "6a33e07c7e48e06ae98e496a",
    "prompt_title": "Wuod in tempora in c",
    "prompt_description": "Ipsam qui qui cupida",
    "prompt_content": "Iusto enim fugiat e",
    "ai_tool": "gemini",
    "tags": "Ex in officiis eos ",
    "difficulty_level": "beginner",
    "image": "https://i.ibb.co/20jXCHgd/favicon.png",
    "visibility": "public",
    "copyCount": 7,
    "status": "Pending",
    "userId": "6a336c6053c1e1314629a757",
    "createdAt": "2026-06-18T12:11:40.928Z",
    "category": ""
}
      */
  }

  const {
    _id,
    prompt_title,
    prompt_description,
    ai_tool,
    difficulty_level,
    copyCount,
    status,
    visibility,
    image,
    featured,
  } = prompt;

  const handleMakeFeature = async () => {
    const featureData = {
      promptId: _id,
      prompt_title,
    };

    const data = await makeFeature(featureData);
    if (data.insertedId) {
      toast.success("This prompt is featured now");
      router.refresh();
    }
  };
  return (
    <Button
      isDisabled={featured}
      onClick={handleMakeFeature}
      className={"rounded-md"}
      variant="secondary"
      size="sm"
    >
      Featured
    </Button>
  );
};

export default MakeFuturePrompt;
