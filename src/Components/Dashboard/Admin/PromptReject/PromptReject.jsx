"use client";

import { updatePrompt } from "@/lib/action/prompts";
import { Button, toast } from "@heroui/react";
import { useRouter } from "next/navigation";

const PromptReject = ({ promptId, reject }) => {
  const router = useRouter();

  const handleRejectButton = async (promptId) => {
    const statusChange = { status: "Reject" };

    const data = await updatePrompt(promptId, statusChange);

    if (data.modifiedCount > 0) {
      toast.success("Rejected prompt successfully");
      router.refresh();
    }
  };

  return (
    <Button
      isDisabled={reject == "Reject"}
      onClick={() => handleRejectButton(promptId)}
      className={"rounded-md"}
      size="sm"
      variant="danger-soft"
    >
      Reject
    </Button>
  );
};

export default PromptReject;
