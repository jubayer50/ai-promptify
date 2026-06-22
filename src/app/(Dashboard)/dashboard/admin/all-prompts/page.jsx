import ApprovePrompt from "@/Components/Dashboard/Admin/ApprovePrompt/ApprovePrompt";
import DeletePromptAdminDashboard from "@/Components/Dashboard/Admin/DeletePrompt/DeletePrompt";
import MakeFuturePrompt from "@/Components/Dashboard/Admin/MakeFuturePrompt/MakeFuturePrompt";
import PromptReject from "@/Components/Dashboard/Admin/PromptReject/PromptReject";
import { getPrompts } from "@/lib/api/prompts";
import { Table } from "@heroui/react";
import React from "react";

const AllPromptsPage = async () => {
  const prompts = await getPrompts();

  return (
    <div className="max-w-330 mx-auto px-3">
      <div>
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          Prompt{" "}
          <span className="bg-linear-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
            Management Hub
          </span>
        </h2>
        <p>
          Manage all AI prompts efficiently by reviewing submissions,
          controlling visibility, and highlighting featured content.
        </p>
      </div>

      <div className="mt-6">
        <Table>
          <Table.ScrollContainer>
            <Table.Content aria-label="Team members" className="">
              <Table.Header>
                <Table.Column isRowHeader>Title</Table.Column>
                <Table.Column>Visibility</Table.Column>
                <Table.Column>AI Engine</Table.Column>
                <Table.Column>Featured</Table.Column>
                <Table.Column>Status</Table.Column>
                <Table.Column>Action</Table.Column>
              </Table.Header>
              <Table.Body>
                {prompts.map((prompt) => (
                  <Table.Row key={prompt._id}>
                    <Table.Cell>{prompt.prompt_title}</Table.Cell>

                    <Table.Cell>{prompt.visibility}</Table.Cell>

                    <Table.Cell>{prompt.ai_tool}</Table.Cell>

                    <Table.Cell>
                      <p
                        className={`${prompt.featured ? "text-green-600" : "text-orange-500"}`}
                      >
                        {prompt.featured ? "True" : "False"}
                      </p>
                    </Table.Cell>

                    <Table.Cell>
                      <p
                        className={`${prompt.status == "Pending" ? "border-yellow-500 bg-yellow-50" : prompt.status == "Reject" ? "bg-red-50 border-red-500" : prompt.status == "Approve" ? "border-green-500 bg-gray-50" : ""} border w-fit rounded-full px-2 py-.5 text-[14px]`}
                      >
                        {prompt.status.toUpperCase()}
                      </p>
                    </Table.Cell>

                    <Table.Cell className={"flex gap-2.5"}>
                      <ApprovePrompt
                        promptId={prompt?._id}
                        approve={prompt.status}
                      ></ApprovePrompt>

                      <MakeFuturePrompt prompt={prompt}></MakeFuturePrompt>

                      <PromptReject
                        promptId={prompt?._id}
                        reject={prompt.status}
                      ></PromptReject>

                      <DeletePromptAdminDashboard
                        promptId={prompt?._id}
                      ></DeletePromptAdminDashboard>
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

export default AllPromptsPage;
