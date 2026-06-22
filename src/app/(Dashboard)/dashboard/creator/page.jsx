import { Copy, Bookmark, SquareChartBar } from "@gravity-ui/icons";

import TotalCopiesChart from "@/Components/Dashboard/Creator/TotalCopiesChart/TotalCopiesChart";
import GrowthChart from "@/Components/Dashboard/Creator/GrowthChart/GrowthChart";
import { getUserSession } from "@/lib/core/session";
import { getUserPromptsByUserId } from "@/lib/api/prompts";
import { getUserAllBookmarks } from "@/lib/api/bookmarks";

const CreatorDashboardHome = async () => {
  const user = await getUserSession();

  const userPrompts = await getUserPromptsByUserId(user.id);

  const userPromptsBookmarks = await getUserAllBookmarks(user.id);

  const totalCopyCounts = userPrompts.reduce(
    (sum, prompt) => sum + prompt.copyCount,
    0,
  );
  // console.log(userPrompts, "from creator home page");

  const totalPrompts = userPrompts.length;
  const totalBookmarks = userPromptsBookmarks.length;
  const totalCopies = totalCopyCounts;

  return (
    <div className="max-w-330 mx-auto px-3 py-6">
      {/* heading */}
      <div>
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          Creator{" "}
          <span className="bg-linear-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
            Analytics Hub
          </span>
        </h2>
        <p>
          Track your prompt performance with real-time insights including total
          prompts, copies, bookmarks, and growth trends.
        </p>
      </div>

      {/* summary cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-8">
        <div className="rounded-xl border p-5 bg-purple-50">
          <div className="flex justify-between items-center">
            <h3 className="font-semibold text-lg">Total Prompts</h3>
            <SquareChartBar className="w-6 h-6 text-purple-600" />
          </div>
          <p className="text-4xl font-bold mt-4">{totalPrompts}</p>
        </div>

        <div className="rounded-xl border p-5 bg-pink-50">
          <div className="flex justify-between items-center">
            <h3 className="font-semibold text-lg">Total Copies</h3>
            <Copy className="w-6 h-6 text-pink-600" />
          </div>
          <p className="text-4xl font-bold mt-4">{totalCopies}</p>
        </div>

        <div className="rounded-xl border p-5 bg-purple-50">
          <div className="flex justify-between items-center">
            <h3 className="font-semibold text-lg">Total Bookmarks</h3>
            <Bookmark className="w-6 h-6 text-purple-600" />
          </div>
          <p className="text-4xl font-bold mt-4">{totalBookmarks}</p>
        </div>
      </div>

      {/* charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-8">
        <TotalCopiesChart prompts={userPrompts}></TotalCopiesChart>

        <GrowthChart prompts={userPrompts}></GrowthChart>
      </div>
    </div>
  );
};

export default CreatorDashboardHome;
