import ChangeRole from "@/Components/Dashboard/Admin/ChangeRole/ChangeRole";
import { getUsers } from "@/lib/api/user";
import { Table } from "@heroui/react";
import React from "react";

const AllUsersPage = async () => {
  const allUsers = await getUsers();

  return (
    <div className="max-w-330 px-3 mx-auto">
      <div className="mb-5">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          User{" "}
          <span className="bg-linear-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
            Management Center
          </span>
        </h2>
        <p>
          Manage all registered users, monitor account activity, and take
          administrative actions efficiently from one place.
        </p>
      </div>

      {/* 
      {
    "_id": "6a336af353c1e1314629a754",
    "name": "Reagan Baker",
    "email": "qyfygy@mailinator.com",
    "emailVerified": false,
    "image": "Blanditiis amet et ",
    "createdAt": "2026-06-18T03:50:11.283Z",
    "updatedAt": "2026-06-18T03:50:11.283Z",
    "role": "creator",
    "plan": "free"
}
      */}

      <div className="mt-6">
        <Table>
          <Table.ScrollContainer>
            <Table.Content aria-label="Team members" className="">
              <Table.Header>
                <Table.Column isRowHeader>User Name</Table.Column>
                <Table.Column>Email Address</Table.Column>
                <Table.Column>Role</Table.Column>
                <Table.Column>Join Date</Table.Column>
                <Table.Column>Status</Table.Column>
                <Table.Column>Actions</Table.Column>
              </Table.Header>

              <Table.Body>
                {allUsers.map((user) => (
                  <Table.Row key={user?._id}>
                    <Table.Cell>{user.name}</Table.Cell>
                    <Table.Cell>{user.email}</Table.Cell>

                    <Table.Cell>
                      <p
                        className={`${user.role == "user" ? "border-blue-600 bg-blue-50" : user.role == "creator" ? "border-yellow-600 bg-yellow-50" : user.role == "admin" ? "border-green-600 bg-green-50" : ""} border w-fit px-2 py-.5 rounded-full text-[14px]`}
                      >
                        {user.role.toUpperCase()}
                      </p>
                    </Table.Cell>

                    <Table.Cell>
                      {new Date(user.createdAt).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </Table.Cell>

                    <Table.Cell>
                      <p
                        className={`border rounded-full px-2 py-.5 w-fit text-[14px] ${user.plan === "premium" ? "border-green-600 bg-green-100" : ""}`}
                      >
                        {user.plan.toUpperCase()}
                      </p>
                    </Table.Cell>

                    <Table.Cell>
                      <ChangeRole user={user}></ChangeRole>
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

export default AllUsersPage;
