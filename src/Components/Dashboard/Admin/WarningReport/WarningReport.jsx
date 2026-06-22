"use client";

import { submitWarning } from "@/lib/action/warning";
import { TriangleExclamation } from "@gravity-ui/icons";
import {
  Button,
  Label,
  Modal,
  Surface,
  TextArea,
  TextField,
  toast,
} from "@heroui/react";

const WarningReport = ({ report }) => {
  /**
    
         {
       "_id": "6a363c2c7b20d5124c09f8b1",
       "report_reason": "inappropriate",
       "report_description": "asdf",
       "PromptId": "6a358f3ffeb0e4874cffc628",
       "reportPromptTitle": "Eum nihil amet mole",
       "userId": "6a336c6053c1e1314629a757",
       "userName": "Jubayer",
       "userEmail": "jubayer@gmail.com",
       "createdAt": "2026-06-20T07:07:24.481Z"
   }
         
   */
  const onSubmit = async (e) => {
    e.preventDefault();

    const forData = new FormData(e.currentTarget);
    const warningData = Object.fromEntries(forData.entries());

    const newWarningData = {
      ...warningData,
      promptId: report.PromptId,
      promptTile: report.reportPromptTitle,
    };

    const data = await submitWarning(newWarningData);
    if (data.insertedId) {
      toast.success("Warning submitted successfully");
    }
  };

  return (
    <Modal>
      <Button size="sm" className={"rounded-md bg-yellow-100 text-yellow-600"}>
        Warning
      </Button>

      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="rounded-md">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                <TriangleExclamation className="size-5" />
              </Modal.Icon>
              <Modal.Heading>Warning Reasons</Modal.Heading>
            </Modal.Header>
            <Modal.Body className="p-3">
              <Surface variant="default">
                <form onSubmit={onSubmit} className="space-y-3">
                  <TextField isRequired name="warning_reasons">
                    <Label>Warning Feedback</Label>
                    <TextArea
                      placeholder="Warning reasons"
                      className={"rounded-md border border-gray-200"}
                    />
                  </TextField>

                  <div className="flex justify-end">
                    <Button
                      size="sm"
                      type="submit"
                      slot={"close"}
                      className={"rounded-md bg-yellow-100 text-yellow-600"}
                    >
                      Warning
                    </Button>
                  </div>
                </form>
              </Surface>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
};

export default WarningReport;
