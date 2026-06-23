"use client";

import { Button, Input } from "@heroui/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const FilterAndSearch = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [difficulty_level, setDifficulty_level] = useState("");
  const [ai_tool, setAi_tool] = useState("");
  const [sortBy, setSortBy] = useState("");
  const router = useRouter();

  const handleFilterApply = () => {
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

    router.push(`/all-prompts?${params.toString()}`);
  };

  //

  return (
    <div className="max-w-330 px-3 mx-auto mt-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-3 items-center">
        {/* Search */}
        <Input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search prompt..."
          className="border border-gray-200 rounded-md shadow-none"
        />

        {/* Category */}
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border p-2 rounded-md"
        >
          <option value="">Filter by Category</option>
          <option value="content writing">Content & Writing</option>
          <option value="coding & development">Coding & Development</option>
          <option value="marketing & seo">Marketing & SEO</option>
          <option value="design & creativity">Design & Creativity</option>
          <option value="productivity & automation">
            Productivity & Automation
          </option>
        </select>

        {/* Difficulty */}
        <select
          value={difficulty_level}
          onChange={(e) => setDifficulty_level(e.target.value)}
          className="border p-2 rounded-md"
        >
          <option value="">Filter by difficulty level</option>
          <option value="beginner">Beginner</option>
          <option value="intermediate">Intermediate</option>
          <option value="pro">Pro</option>
        </select>

        {/* AI Tool */}
        <select
          value={ai_tool}
          onChange={(e) => setAi_tool(e.target.value)}
          className="border p-2 rounded-md"
        >
          <option value="">Filter by AI Tool</option>
          <option value="gemini">Gemini</option>
          <option value="midjourney">Midjourney</option>
          <option value="chatgpt">ChatGPT</option>
          <option value="claude">Claude</option>
          <option value="other">Other</option>
        </select>

        {/* Sorting */}
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="border p-2 rounded-md"
        >
          <option value="">Sort By</option>
          <option value="most_popular">Most Popular</option>
          <option value="most_copied">Most Copied</option>
          <option value="latest">Latest</option>
        </select>

        <div>
          <Button
            onClick={handleFilterApply}
            className={"w-full md:w-fit rounded-md"}
          >
            Filter Apply
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FilterAndSearch;
