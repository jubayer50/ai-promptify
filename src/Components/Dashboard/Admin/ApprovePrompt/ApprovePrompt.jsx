"use client";

import { updatePrompt } from "@/lib/action/prompts";
import { Button, toast } from "@heroui/react";
import { useRouter } from "next/navigation";

const ApprovePrompt = ({ promptId, approve }) => {
  const router = useRouter();

  const handleApproveButton = async (promptId) => {
    const statusChange = { status: "Approve" };

    const data = await updatePrompt(promptId, statusChange);
    console.log(data);

    if (data.modifiedCount > 0) {
      toast.success("Approve prompt successfully");
      router.refresh();
    }
  };

  return (
    <Button
      isDisabled={approve == "Approve"}
      onClick={() => handleApproveButton(promptId)}
      className={"rounded-md bg-green-100 text-green-500"}
      size="sm"
    >
      Approve
    </Button>
  );
};

export default ApprovePrompt;
