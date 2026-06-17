import React from "react";
import { FaSearch, FaBookmark, FaRocket } from "react-icons/fa";

const steps = [
  {
    step: "01",
    icon: <FaSearch size={22} />,
    title: "Discover Prompts",
    description:
      "Browse thousands of high-quality prompts by category, AI tool, popularity, or trending tags.",
  },
  {
    step: "02",
    icon: <FaBookmark size={22} />,
    title: "Save or Purchase",
    description:
      "Bookmark favorite prompts or purchase premium prompts from expert prompt creators.",
  },
  {
    step: "03",
    icon: <FaRocket size={22} />,
    title: "Use & Get Better Results",
    description:
      "Copy prompts and use them with ChatGPT, Gemini, Claude, or Midjourney for better output.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20">
      <div className="max-w-330 mx-auto px-3">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold">
            How{" "}
            <span className="bg-linear-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
              AIPromptify
            </span>{" "}
            Works
          </h2>

          <p className="mt-5 text-gray-600 text-lg">
            Getting high-quality AI prompts has never been easier. Follow three
            simple steps.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mt-20">
          {/* Center line */}
          <div className="hidden md:block absolute left-1/2 top-0 -translate-x-1/2 w-1 h-full bg-linear-to-b from-purple-500 to-pink-500 rounded-full"></div>

          <div className="space-y-6">
            {steps.map((item, index) => (
              <div
                key={index}
                className={`flex items-center ${
                  index % 2 === 0 ? "md:justify-start" : "md:justify-end"
                } justify-center`}
              >
                <div className="w-full md:w-[48%] bg-white rounded-md p-6 shadow border border-purple-200 hover:scale-102 transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-md bg-linear-to-r from-purple-600 to-pink-500 text-white flex items-center justify-center">
                      {item.icon}
                    </div>

                    <div>
                      <p className="text-sm text-purple-600 font-semibold">
                        Step {item.step}
                      </p>
                      <h3 className="text-xl font-bold">{item.title}</h3>
                    </div>
                  </div>

                  <p className="mt-4 text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
