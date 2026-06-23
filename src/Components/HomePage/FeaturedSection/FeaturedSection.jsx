import { getFeatures } from "@/lib/api/features";
import FeatureCard from "./FeatureCard/FeatureCard";

const FeaturedSection = async () => {
  const features = await getFeatures();

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
