import React from "react";
import { Person, SquareChartBar, StarFill, Copy } from "@gravity-ui/icons";
import { getUsers } from "@/lib/api/user";
import { getPrompts } from "@/lib/api/prompts";
import { getComments } from "@/lib/api/commentsAndRating";

const Analytics = async () => {
  const allUsers = await getUsers();

  const prompts = await getPrompts();

  const reviews = await getComments();

  const totalCopiesCount = prompts.reduce(
    (sum, prompt) => sum + prompt.copyCount,
    0,
  );

  // static data
  const totalUsers = allUsers.length;
  const totalPrompts = prompts.length;
  const totalReviews = reviews.length;
  const totalCopies = totalCopiesCount;

  return (
    <div className="max-w-330 mx-auto px-3 py-6">
      <div>
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          Platform{" "}
          <span className="bg-linear-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
            Analytics Hub
          </span>
        </h2>
        <p>
          Track key platform insights including total users, prompts, reviews,
          and copies to monitor growth and engagement.
        </p>
      </div>

      {/* Summary Cards */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {/* Total Users */}
        <div className="border rounded-xl p-5 bg-purple-50">
          <div className="flex justify-between items-center">
            <h3 className="font-semibold text-lg">Total Users</h3>
            <Person className="w-6 h-6 text-purple-600" />
          </div>
          <p className="text-4xl font-bold mt-4">{totalUsers}</p>
          <p className="text-sm text-gray-500 mt-2">
            Registered platform users
          </p>
        </div>

        {/* Total Prompts */}
        <div className="border rounded-xl p-5 bg-pink-50">
          <div className="flex justify-between items-center">
            <h3 className="font-semibold text-lg">Total Prompts</h3>
            <SquareChartBar className="w-6 h-6 text-pink-600" />
          </div>
          <p className="text-4xl font-bold mt-4">{totalPrompts}</p>
          <p className="text-sm text-gray-500 mt-2">Published AI prompts</p>
        </div>

        {/* Total Reviews */}
        <div className="border rounded-xl p-5 bg-purple-50">
          <div className="flex justify-between items-center">
            <h3 className="font-semibold text-lg">Total Reviews</h3>
            <StarFill className="w-6 h-6 text-purple-600" />
          </div>
          <p className="text-4xl font-bold mt-4">{totalReviews}</p>
          <p className="text-sm text-gray-500 mt-2">User submitted reviews</p>
        </div>

        {/* Total Copies */}
        <div className="border rounded-xl p-5 bg-pink-50">
          <div className="flex justify-between items-center">
            <h3 className="font-semibold text-lg">Total Copies</h3>
            <Copy className="w-6 h-6 text-pink-600" />
          </div>
          <p className="text-4xl font-bold mt-4">{totalCopies}</p>
          <p className="text-sm text-gray-500 mt-2">Total prompt copies</p>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
