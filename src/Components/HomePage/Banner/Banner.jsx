"use client";

import React from "react";
import { Input, Button, Chip } from "@heroui/react";
import { motion } from "motion/react";
import { HiOutlineSparkles } from "react-icons/hi";

const Banner = () => {
  const tags = [
    "ContentWriting",
    "JavaScript",
    "Marketing",
    "Automation",
    "Productivity",
    "ChatGPT",
    "Midjourney",
  ];

  return (
    <section className="relative overflow-hidden bg-linear-to-br from-purple-50 via-white to-pink-50 py-16 lg:py-22">
      {/* Background Blur */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-20 w-72 h-72 bg-purple-300/20 rounded-full blur-3xl"
      />

      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 right-20 w-72 h-72 bg-pink-300/20 rounded-full blur-3xl"
      />

      <div className="relative max-w-330 mx-auto px-3 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-purple-600/80 mb-4"
        >
          <HiOutlineSparkles className="text-purple-600" />
          <span className="text-sm font-medium text-gray-700">
            10,000+ Prompts Shared by AI Creators
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-250 w-full mx-auto text-4xl md:text-6xl font-bold"
        >
          Unlock the Power of AI with{" "}
          <span className="bg-linear-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
            Perfect Prompts
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-6 max-w-220 mx-auto text-gray-600 leading-relaxed"
        >
          Discover, and share high-quality AI prompts to boost productivity, and
          spark creativity. Find the right prompts for tools like OpenAI
          ChatGPT, Google Gemini, Anthropic Claude, and Midjourney — all in one
          place.
        </motion.p>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="max-w-150 w-full mx-auto my-6 md:my-8 flex gap-3 border border-purple-600 p-1.5 rounded-md"
        >
          <Input
            placeholder="Search prompts..."
            className="shadow-none rounded-md w-full bg-gray-200/30"
          />

          <Button className="bg-linear-to-r from-purple-600 to-pink-500 text-white font-semibold rounded-md">
            Search
          </Button>
        </motion.div>

        {/* Trending Tags */}
        <div>
          <motion.h3
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-lg font-semibold mb-4"
          >
            Trending Prompts
          </motion.h3>

          <div className="flex flex-wrap justify-center gap-3">
            {tags.map((tag, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + index * 0.08 }}
              >
                <Chip className="cursor-pointer rounded-md px-2 py-1 hover:scale-105 hover:bg-purple-100 transition-all duration-300">
                  #{tag}
                </Chip>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-8 flex flex-col md:flex-row items-center gap-4 justify-center"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
            <Button className="bg-linear-to-r from-purple-600 to-pink-500 text-white font-semibold px-6">
              Explore Prompts
            </Button>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
            <Button className="border-2 bg-transparent border-purple-500 text-purple-600 font-semibold px-5 hover:bg-purple-50">
              ✨ Share Your Prompt
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;
