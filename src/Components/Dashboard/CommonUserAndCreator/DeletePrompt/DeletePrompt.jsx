"use client";

import { deletePrompt } from "@/lib/action/myPrompt";
import { TrashBin } from "@gravity-ui/icons";
import { AlertDialog, Button, toast } from "@heroui/react";
import { useRouter } from "next/navigation";

const DeletePrompt = ({ promptId }) => {
  const router = useRouter();

  const handleDelete = async (promptId) => {
    const result = await deletePrompt(promptId);

    if (result.deletedCount > 0) {
      toast.success("Successfully delete prompt");
      router.refresh();
    }
  };
  return (
    <AlertDialog>
      <Button isIconOnly variant="danger">
        <TrashBin></TrashBin>
      </Button>

      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="rounded-md">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>
                Delete prompt permanently?
              </AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently delete <strong>My Awesome Prompt</strong>{" "}
                and all of its data. This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary" className={"rounded-md"}>
                Cancel
              </Button>
              <Button
                onClick={() => handleDelete(promptId)}
                slot="close"
                variant="danger"
                className={"rounded-md"}
              >
                Delete Prompt
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
};

export default DeletePrompt;
