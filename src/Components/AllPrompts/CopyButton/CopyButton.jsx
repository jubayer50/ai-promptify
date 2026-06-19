"use client";

import { updatePromptsCopyCount } from "@/lib/action/prompts";
import { Check, Copy } from "@gravity-ui/icons";
import { Button, toast } from "@heroui/react";
import { useState } from "react";

const CopyButton = ({ prompt }) => {
  const { _id, prompt_content } = prompt;

  const [showCopy, setShowCopy] = useState(true);

  const handleCopyButton = async () => {
    await navigator.clipboard.writeText(prompt_content);
    setShowCopy(false);

    setTimeout(() => {
      setShowCopy(true);
    }, 3000);

    // update prompt copyCount

    const incrementCopyCount = {
      increment: 1,
    };

    const res = await updatePromptsCopyCount(_id, incrementCopyCount);

    if (res.modifiedCount > 0) {
      toast.success("Prompt Content copied");
    }
  };

  return (
    <div>
      <Button
        onClick={handleCopyButton}
        isIconOnly
        variant="secondary"
        className={"bg-purple-100 rounded-md"}
      >
        {showCopy ? <Copy></Copy> : <Check></Check>}
      </Button>
    </div>
  );
};

export default CopyButton;
