"use client";

import { removeUser, updateUserRole } from "@/lib/action/users";
import { Button } from "@heroui/react";

const ChangeRole = ({ user }) => {
  const handleRoleChange = async (userId, newRole) => {
    const data = await updateUserRole(userId, newRole);
  };

  const handleRemove = async (userId) => {
    const data = await removeUser(userId);
  };

  return (
    <div className="flex gap-2.5">
      {user.role !== "user" && (
        <Button
          onClick={() => handleRoleChange(user._id, "user")}
          size="sm"
          className={"rounded-md bg-blue-100 text-blue-500"}
        >
          Make User
        </Button>
      )}

      {user.role !== "creator" && (
        <Button
          onClick={() => handleRoleChange(user._id, "creator")}
          size="sm"
          className={"rounded-md bg-yellow-100 text-yellow-600"}
        >
          Make Creator
        </Button>
      )}

      {user.role !== "admin" && (
        <Button
          onClick={() => handleRoleChange(user._id, "admin")}
          size="sm"
          className={"rounded-md bg-green-100 text-green-600"}
        >
          Make Admin
        </Button>
      )}

      <Button
        onClick={() => handleRemove(user._id)}
        className={"rounded-md bg-red-100 text-red-600"}
      >
        Remove
      </Button>
    </div>
  );
};

export default ChangeRole;
