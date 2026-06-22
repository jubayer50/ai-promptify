"use client";

import { deleteReport } from "@/lib/action/report";
import { Button, toast } from "@heroui/react";
import { useRouter } from "next/navigation";

const DismissReport = ({ reportId }) => {
  const router = useRouter();

  const handleDismiss = async (reportId) => {
    const removeReport = await deleteReport(reportId);

    if (removeReport.deletedCount > 0) {
      toast.success("Report Dismiss successfully");
      router.refresh();
    }
  };

  return (
    <Button
      onClick={() => handleDismiss(reportId)}
      size="sm"
      className={"rounded-md"}
    >
      Dismiss
    </Button>
  );
};

export default DismissReport;
