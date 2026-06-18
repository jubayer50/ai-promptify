import Image from "next/image";
import { getUserSession } from "@/lib/core/session";

const ProfilePage = async () => {
  const user = await getUserSession();

  const totalPrompts = 0; // Later fetch from DB

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
                  Role: {user?.role?.toUpperCase()}
                </span>

                <span
                  className={`px-4 py-1 rounded-full font-medium text-sm ${
                    user?.plan === "premium"
                      ? "bg-yellow-100 text-yellow-700"
                      : "bg-gray-100 text-gray-700"
                  }`}
                >
                  Plan: {user?.plan?.toUpperCase()}
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
              <h3 className="text-xl font-bold mt-1">{totalPrompts}</h3>
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
    </section>
  );
};

export default ProfilePage;
