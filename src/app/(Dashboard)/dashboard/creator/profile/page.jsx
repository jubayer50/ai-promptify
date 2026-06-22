import { getUserPromptsByUserId } from "@/lib/api/prompts";
import { getUserSession } from "@/lib/core/session";
import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

const CreatorProfilePage = async () => {
  const user = await getUserSession();

  const userTotalPrompts = await getUserPromptsByUserId(user?.id);

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

                <span
                  className={`px-4 py-1 rounded-full font-medium text-sm ${
                    user?.plan === "premium"
                      ? "bg-yellow-100 text-yellow-700"
                      : "bg-gray-100 text-gray-700"
                  }`}
                >
                  Plan:{" "}
                  <span className="text-sm">{user?.plan?.toUpperCase()}</span>
                </span>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            <div className="rounded-xl p-5 bg-purple-50 border border-purple-100">
              <p className="text-sm text-gray-500">Account Role</p>
              <h3 className="text-xl font-bold capitalize mt-1">
                {user?.role}
              </h3>
            </div>

            <div className="rounded-xl p-5 bg-pink-50 border border-pink-100">
              <p className="text-sm text-gray-500">Total Prompts</p>
              <h3 className="text-xl font-bold mt-1">
                {userTotalPrompts?.length}
              </h3>
            </div>

            <div className="rounded-xl p-5 bg-indigo-50 border border-indigo-100">
              <p className="text-sm text-gray-500">Subscription</p>
              <h3 className="text-xl font-bold capitalize mt-1">
                {user?.plan}
              </h3>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 max-w-330 mx-auto">
        {user?.plan === "free" ? (
          <div className="rounded-xl border border-purple-200 bg-linear-to-r from-purple-50 to-pink-50 p-5 flex flex-col md:flex-row md:items-center items-start md:justify-between gap-4">
            <div>
              <h3 className="text-lg font-bold text-gray-800">
                Upgrade to Premium
              </h3>
              <p className="text-gray-600 text-sm mt-1">
                Unlock premium prompts, advanced tools, and exclusive features.
              </p>
            </div>

            <div className="flex gap-2.5">
              <form action={"/api/subscription"} method="POST">
                <Button className="rounded-md bg-linear-to-r from-purple-600 to-pink-500 text-white font-semibold shadow-md hover:scale-105 transition-all duration-300">
                  Upgrade Now
                </Button>
              </form>

              <Link href={"/plan"}>
                <Button
                  className={
                    "rounded-md bg-transparent text-black border border-purple-600 hover:scale-105 transition-all duration-300"
                  }
                >
                  View Plan
                </Button>
              </Link>
            </div>
          </div>
        ) : (
          <div className="rounded-xl border border-yellow-200 bg-linear-to-r from-yellow-50 to-orange-50 p-5 flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-bold text-gray-800">
                Premium Member ✨
              </h3>
              <p className="text-gray-600 text-sm mt-1">
                You have access to all premium prompts and exclusive benefits.
              </p>
            </div>

            <div className="px-5 py-3 rounded-md bg-yellow-100 text-yellow-700 font-semibold">
              Active Plan
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CreatorProfilePage;
