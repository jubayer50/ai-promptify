import { getUserPromptsByUserId } from "@/lib/api/prompts";
import { getUserSession } from "@/lib/core/session";
import { Eye, PencilToSquare, TrashBin } from "@gravity-ui/icons";
import { Button, Table } from "@heroui/react";
import Link from "next/link";
import React from "react";

const MyPromptsPage = async () => {
  const user = await getUserSession();

  const userPrompts = await getUserPromptsByUserId(user?.id);

  return (
    <div className="max-w-330 mx-auto px-3">
      <div>
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          Your Prompt{" "}
          <span className="bg-linear-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
            Library
          </span>
        </h2>
        <p className="">
          Manage all your created prompts in one place. View, update, or delete
          your prompts anytime.
        </p>
      </div>

      <div className="mt-8">
        <Table>
          <Table.ScrollContainer>
            <Table.Content>
              <Table.Header>
                <Table.Column isRowHeader>Title</Table.Column>
                <Table.Column>AI Engine</Table.Column>
                <Table.Column>Visibility</Table.Column>
                <Table.Column>Status</Table.Column>
                <Table.Column>Copies</Table.Column>
                <Table.Column>Action</Table.Column>
              </Table.Header>

              <Table.Body>
                {userPrompts.map((userPrompt) => (
                  <Table.Row key={userPrompt?._id}>
                    <Table.Cell>{userPrompt?.prompt_title}</Table.Cell>

                    <Table.Cell>{userPrompt?.ai_tool.toUpperCase()}</Table.Cell>

                    <Table.Cell>
                      <p
                        className={`${userPrompt?.visibility == "public" ? "border border-yellow-500 text-yellow-600" : userPrompt?.visibility == "privet" ? "border border-green-600 text-green-600" : ""} w-fit px-2 py-.5 rounded-full text-[12px]`}
                      >
                        {userPrompt.visibility.toUpperCase()}
                      </p>
                    </Table.Cell>
                    <Table.Cell>
                      <p
                        className={`${userPrompt?.status == "Pending" ? "border border-yellow-500 text-yellow-600" : userPrompt?.status == "Pending" ? "border border-green-600 text-green-600" : ""} w-fit px-2 py-.5 rounded-full text-[12px]`}
                      >
                        {userPrompt.status.toUpperCase()}
                      </p>
                    </Table.Cell>

                    <Table.Cell>{userPrompt.copyCount}</Table.Cell>

                    <Table.Cell>
                      <div className="flex gap-3">
                        <Link href={`/all-prompts/${userPrompt?._id}`}>
                          <Button isIconOnly variant="tertiary" className={""}>
                            <Eye></Eye>
                          </Button>
                        </Link>

                        <Button isIconOnly variant="tertiary" className={""}>
                          <PencilToSquare></PencilToSquare>
                        </Button>

                        <Button isIconOnly variant="tertiary" className={""}>
                          <PencilToSquare></PencilToSquare>
                        </Button>

                        <Button isIconOnly variant="tertiary" className={""}>
                          <TrashBin className="text-red-600"></TrashBin>
                        </Button>
                      </div>
                    </Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table.Content>
          </Table.ScrollContainer>
        </Table>
      </div>
    </div>
  );
};

export default MyPromptsPage;
