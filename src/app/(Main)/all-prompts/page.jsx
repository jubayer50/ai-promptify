import FilterAndSearch from "@/Components/AllPrompts/FilterAndSearch/FilterAndSearch";
import PromptCard from "@/Components/AllPrompts/PromptCard/PromptCard";
import { getPrompts } from "@/lib/api/prompts";

const AllPromptsPage = async ({ searchParams }) => {
  const sParams = await searchParams;
  // console.log(sParams, "from all prom;ts");

  const search = sParams.search;
  const category = sParams.category;
  const difficulty_level = sParams.difficulty_level;
  const ai_tool = sParams.ai_tool;
  const sortBy = sParams.sortBy;

  const params = new URLSearchParams();
  if (search) {
    params.set("search", search);
  }
  if (category) {
    params.set("category", category);
  }
  if (difficulty_level) {
    params.set("difficulty_level", difficulty_level);
  }
  if (ai_tool) {
    params.set("ai_tool", ai_tool);
  }
  if (sortBy) {
    params.set("sortBy", sortBy);
  }

  const prompts = await getPrompts(params);

  return (
    <div className="max-w-330 mx-auto px-3 mt-6">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          Explore{" "}
          <span className="bg-linear-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
            Prompt Universe
          </span>
        </h2>
        <p className="max-w-160 mx-auto">
          Explore an ever-growing universe of powerful AI prompts designed to
          inspire creativity, boost productivity, and unlock smarter workflows.
        </p>
      </div>

      <div>
        <FilterAndSearch></FilterAndSearch>
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {prompts.map((prompt) => (
          <PromptCard key={prompt._id} prompt={prompt}></PromptCard>
        ))}
      </div>
    </div>
  );
};

export default AllPromptsPage;
