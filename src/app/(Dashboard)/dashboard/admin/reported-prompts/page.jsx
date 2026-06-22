import DeletePromptAdminDashboard from "@/Components/Dashboard/Admin/DeletePrompt/DeletePrompt";
import DismissReport from "@/Components/Dashboard/Admin/DismissReport/DismissReport";
import WarningReport from "@/Components/Dashboard/Admin/WarningReport/WarningReport";
import { getReports } from "@/lib/api/report";
import { Button, Table } from "@heroui/react";

const ReportedPrompts = async () => {
  const reports = await getReports();

  return (
    <div className="max-w-330 mx-auto px-3">
      <div className="">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          Report{" "}
          <span className="bg-linear-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
            Review Dashboard
          </span>
        </h2>
        <p>
          Investigate user reports, manage violations, dismiss false reports,
          and take appropriate action against problematic prompts.
        </p>
      </div>

      {reports.length === 0 && (
        <div className="text-center mt-8">
          <p className="font-medium">No Reported data</p>
        </div>
      )}

      {reports.length > 0 && (
        <div className="mt-6">
          <Table>
            <Table.ScrollContainer>
              <Table.Content aria-label="Team members" className="">
                <Table.Header>
                  <Table.Column isRowHeader>Title</Table.Column>
                  <Table.Column>Reporter Email</Table.Column>
                  <Table.Column>Report Reason</Table.Column>
                  <Table.Column>Action</Table.Column>
                </Table.Header>
                <Table.Body>
                  {reports.map((report) => (
                    <Table.Row key={report._id}>
                      <Table.Cell>{report.reportPromptTitle}</Table.Cell>
                      <Table.Cell>{report.userEmail}</Table.Cell>
                      <Table.Cell>{report.report_reason}</Table.Cell>
                      <Table.Cell className={"flex gap-2.5"}>
                        <DismissReport reportId={report._id}></DismissReport>

                        <WarningReport report={report}></WarningReport>

                        <DeletePromptAdminDashboard
                          promptId={report.PromptId}
                          reportId={report._id}
                        ></DeletePromptAdminDashboard>
                      </Table.Cell>
                    </Table.Row>
                  ))}
                </Table.Body>
              </Table.Content>
            </Table.ScrollContainer>
          </Table>
        </div>
      )}
    </div>
  );
};

export default ReportedPrompts;
