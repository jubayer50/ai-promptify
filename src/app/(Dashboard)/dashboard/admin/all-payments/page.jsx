import { getPayments } from "@/lib/api/payments";
import { Table } from "@heroui/react";

const AllPaymentsPage = async () => {
  const payments = await getPayments();
  console.log(payments, "from admin payments page");

  return (
    <div>
      <div>
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          Payment{" "}
          <span className="bg-linear-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
            Managements
          </span>
        </h2>
        <p>
          Monitor all payment transactions, track premium subscriptions, and
          review complete payment history across the platform.
        </p>
      </div>

      <div className="mt-6">
        <Table>
          <Table.ScrollContainer>
            <Table.Content aria-label="Team members" className="">
              <Table.Header>
                <Table.Column isRowHeader>User Name</Table.Column>
                <Table.Column>User Email</Table.Column>
                <Table.Column>User Role</Table.Column>
                <Table.Column>User Payments</Table.Column>
              </Table.Header>
              <Table.Body>
                {payments.map((payment) => (
                  <Table.Row key={payment._id}>
                    <Table.Cell>{payment.userNama}</Table.Cell>
                    <Table.Cell>{payment.userEmail}</Table.Cell>
                    <Table.Cell>{payment.userRole}</Table.Cell>
                    <Table.Cell>$ {payment.payAmount}</Table.Cell>
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

export default AllPaymentsPage;
