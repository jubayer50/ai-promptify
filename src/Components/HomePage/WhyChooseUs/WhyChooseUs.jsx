"use client";

import React from "react";
import {
  FaCrown,
  FaRobot,
  FaFire,
  FaBookmark,
  FaStore,
  FaUsers,
} from "react-icons/fa";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <FaCrown size={24} />,
      title: "Premium Quality Prompts",
      description:
        "Access carefully crafted prompts for writing, coding, design, marketing, automation, and more. Save time and get better AI results instantly.",
    },
    {
      icon: <FaRobot size={24} />,
      title: "All AI Tools in One Place",
      description:
        "Find prompts for popular AI platforms like OpenAI ChatGPT, Google Gemini, Anthropic Claude, and Midjourney — all from a single platform.",
    },
    {
      icon: <FaFire size={24} />,
      title: "Discover Trending Prompts",
      description:
        "Stay ahead with trending and top-rated prompts based on community engagement, reviews, and popularity.",
    },
    {
      icon: <FaBookmark size={24} />,
      title: "Save & Organize Favorites",
      description:
        "Bookmark your favorite prompts and build your own personalized prompt library for quick access anytime.",
    },
    {
      icon: <FaStore size={24} />,
      title: "Creator Marketplace",
      description:
        "Publish free or premium prompts, grow your audience, and monetize your creativity through a secure marketplace.",
    },
    {
      icon: <FaUsers size={24} />,
      title: "Community Driven",
      description:
        "Read reviews, rate prompts, and connect with other prompt creators to learn, improve, and collaborate.",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold">
            Why Choose{" "}
            <span className="bg-linear-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
              AIPromptify?
            </span>
          </h2>

          <p className="mt-5 text-gray-600 text-lg leading-relaxed">
            Discover why thousands of creators, professionals, and AI
            enthusiasts trust AIPromptify to find, share, and monetize
            high-quality AI prompts.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-7 rounded-md border border-purple-200 bg-white shadow-sm  hover:scale-102 transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-md bg-linear-to-r from-purple-600 to-pink-500 text-white flex items-center justify-center shadow-md group-hover:scale-102 transition-transform duration-300">
                {feature.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold mt-5">{feature.title}</h3>

              <p className="mt-3 text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
