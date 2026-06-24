import Image from "next/image";
import { topCreators } from "@/lib/api/topCreator";

const TopCreatorSection = async () => {
  const topCreator = await topCreators();

  return (
    <section className="max-w-330 px-3 mx-auto my-16 md:my-28">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">
          Meet Our{" "}
          <span className="bg-linear-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
            Top Creators
          </span>
        </h2>

        <p className="max-w-180 mx-auto text-gray-600">
          Discover the most active creators who consistently craft powerful AI
          prompts and inspire the community with high-quality content.
        </p>
      </div>

      {/* Cards */}
      <div className="flex justify-between flex-wrap gap-6">
        {topCreator.map((creator, index) => (
          <div
            key={index}
            className="bg-white rounded-md border border-purple-100  p-6 hover:shadow-md transition-all duration-300 flex-1"
          >
            <div className="flex flex-col items-center text-center">
              <Image
                src={creator.image}
                alt={creator.name}
                width={90}
                height={90}
                className="w-22 h-22 rounded-full object-cover border-4 border-purple-100"
              />

              <h3 className="mt-4 text-xl font-semibold">{creator.name}</h3>

              <span className="mt-2 text-sm bg-purple-100 text-purple-700 px-3 py-1 rounded-full">
                Top Creator
              </span>

              <div className="mt-5 w-full rounded-xl bg-purple-50 py-3">
                <p className="text-2xl font-bold text-purple-600">
                  {creator.totalPrompts}
                </p>
                <p className="text-sm text-gray-500">Total Prompts</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopCreatorSection;
