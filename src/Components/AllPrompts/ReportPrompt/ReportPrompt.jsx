"use client";

import { reportPrompt } from "@/lib/action/report";
import { TriangleExclamation } from "@gravity-ui/icons";
import {
  Button,
  Label,
  ListBox,
  Modal,
  Surface,
  TextArea,
  TextField,
  Select,
  toast,
} from "@heroui/react";

const ReportPrompt = ({ prompt, user }) => {
  const { _id, prompt_title } = prompt;

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    const reportData = {
      ...data,
      PromptId: _id,
      reportPromptTitle: prompt_title,
      userId: user?.id,
      userName: user?.name,
      userEmail: user?.email,
    };

    const res = await reportPrompt(reportData);

    if (res.insertedId) {
      toast.success("Successfully reported");
    }

    if (res.message) {
      toast.warning(res.message);
    }

    e.target.reset();
  };

  return (
    <Modal>
      <Button
        isIconOnly
        variant="danger-soft"
        className={"rounded-md bg-red-100"}
      >
        <TriangleExclamation></TriangleExclamation>
      </Button>
      {/* <Button variant="secondary">Open Contact Form</Button> */}
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="rounded-md">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Icon className="bg-red-100 text-red-600">
                <TriangleExclamation className="size-5 text-red-600" />
              </Modal.Icon>
              <Modal.Heading>Report prompt</Modal.Heading>
              <p className="mt-1.5 text-sm leading-5 text-muted">
                {/* if need description */}
              </p>
            </Modal.Header>
            <Modal.Body className="p-2">
              <Surface variant="default">
                <form onSubmit={onSubmit} className="flex flex-col gap-4">
                  <Select
                    name="report_reason"
                    className="w-full"
                    placeholder="Select one"
                  >
                    <Label>Report reason</Label>
                    <Select.Trigger
                      className={
                        "rounded-md border border-gray-300 shadow-none"
                      }
                    >
                      <Select.Value />
                      <Select.Indicator />
                    </Select.Trigger>
                    <Select.Popover
                      className={
                        "rounded-md border border-gray-300 shadow-none"
                      }
                    >
                      <ListBox>
                        <ListBox.Item
                          id="inappropriate"
                          textValue="Inappropriate"
                        >
                          Inappropriate
                          <ListBox.ItemIndicator />
                        </ListBox.Item>

                        <ListBox.Item id="spam" textValue="Spam">
                          Spam
                          <ListBox.ItemIndicator />
                        </ListBox.Item>

                        <ListBox.Item id="copyright" textValue="Copyright">
                          Copyright
                          <ListBox.ItemIndicator />
                        </ListBox.Item>
                      </ListBox>
                    </Select.Popover>
                  </Select>

                  <TextField name="report_description">
                    <Label>Report Description</Label>
                    <TextArea
                      placeholder="Report description"
                      className={
                        "rounded-md border border-gray-300 shadow-none"
                      }
                    />
                  </TextField>
                  <div className="flex justify-end">
                    <Button
                      type="submit"
                      className={"rounded-md bg-red-100 text-red-500"}
                    >
                      Report
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

export default ReportPrompt;
