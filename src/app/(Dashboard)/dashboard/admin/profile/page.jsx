import { getUserPromptsByUserId } from "@/lib/api/prompts";
import { getUserSession } from "@/lib/core/session";
import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

const CreatorProfilePage = async () => {
  const user = await getUserSession();

  // const totalPrompts = 0; // Later fetch from DB
  return (
    <section className="py-5 px-3">
      <div className="max-w-330 mx-auto">
        {/* Page Title */}
        <h1 className="text-3xl md:text-4xl font-bold mb-8">
          My{" "}
          <span className="bg-linear-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
            Profile
          </span>
        </h1>

        {/* Profile Card */}
        <div className="bg-white rounded-md shadow border border-gray-200 p-6 md:p-8">
          {/* Top Section */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            {/* Profile Image */}
            <div className="relative w-32 h-32">
              <Image
                src={user?.image || "/default-avatar.png"}
                alt={user?.name || "User"}
                fill
                className="rounded-full object-cover border-4 border-purple-200"
              />
            </div>

            {/* User Info */}
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-2xl font-bold text-gray-800">{user?.name}</h2>

              <p className="text-gray-600 mt-1">{user?.email}</p>

              <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-4">
                <span className="px-4 py-1 rounded-full bg-purple-100 text-purple-700 font-medium text-sm">
                  Role:{" "}
                  <span className="text-sm">{user?.role?.toUpperCase()}</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreatorProfilePage;
