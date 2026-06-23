import { getFeatures } from "@/lib/api/features";
import FeatureCard from "./FeatureCard/FeatureCard";

const FeaturedSection = async () => {
  const features = await getFeatures();

  /**
   {
    "_id": "6a39273f3f8ded3f82c2cdf2",
    "promptId": "6a37895b390d22b202a638a2",
    "prompt_title": "React Code Debugger",
    "promptObjectId": "6a37895b390d22b202a638a2",
    "promptData": {
        "_id": "6a37895b390d22b202a638a2",
        "prompt_title": "React Code Debugger",
        "prompt_description": "Analyze React component issues and suggest optimized solutions.",
        "prompt_content": "Review this React code, find bugs, explain the issue, and provide a clean optimized solution.",
        "ai_tool": "claude",
        "tags": "react,coding,debugging",
        "difficulty_level": "intermediate",
        "image": "https://i.ibb.co.com/CpD4hJrL/coding4.jpg",
        "visibility": "public",
        "copyCount": 18,
        "status": "Approve",
        "userId": "6a3787416610cb33cc9d467f",
        "createdAt": "2026-06-11T10:15:20.928Z",
        "featured": true
    }
}
   */

  return (
    <div className="max-w-330 px-3 mx-auto my-14 md:my-28">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold">
          Trending & Featured{" "}
          <span className="bg-linear-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
            Prompts
          </span>
        </h2>

        <p className="mt-5 text-gray-600 text-lg">
          Browse the most valuable and community-loved prompts that are making
          an impact right now.
        </p>
      </div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((feature) => (
          <FeatureCard key={feature._id} feature={feature}></FeatureCard>
        ))}
      </div>
    </div>
  );
};

export default FeaturedSection;
