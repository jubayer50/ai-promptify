"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { FaQuoteLeft } from "react-icons/fa";

import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

const CustomerReview = () => {
  const reviews = [
    {
      name: "Sarah Johnson",
      avatar: "https://i.pravatar.cc/150?img=1",
      review:
        "AIPromptify completely changed how I work with AI. I now create better content in half the time.",
    },
    {
      name: "Michael Chen",
      avatar: "https://i.pravatar.cc/150?img=2",
      review:
        "The prompt quality is amazing. I found incredible coding prompts that improved my workflow instantly.",
    },
    {
      name: "Emily Davis",
      avatar: "https://i.pravatar.cc/150?img=3",
      review:
        "The marketplace is brilliant. I sold my premium prompts and started earning from my creativity.",
    },
    {
      name: "David Wilson",
      avatar: "https://i.pravatar.cc/150?img=4",
      review:
        "Best platform for discovering AI prompts. Everything is organized and easy to search.",
    },
    {
      name: "Sophia Brown",
      avatar: "https://i.pravatar.cc/150?img=5",
      review:
        "I love the community aspect. Reviews and ratings help me choose the best prompts quickly.",
    },
    {
      name: "James Lee",
      avatar: "https://i.pravatar.cc/150?img=6",
      review:
        "Perfect for marketers and creators. High-quality prompts save me hours every week.",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-linear-to-b from-white to-purple-50">
      <div className="max-w-330 mx-auto px-3">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl md:text-5xl font-bold">
            What Our Users Say About{" "}
            <span className="bg-linear-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
              AIPromptify
            </span>
          </h2>

          <p className="mt-5 text-gray-600 text-lg leading-relaxed">
            Join thousands of creators, developers, and professionals using
            AIPromptify to unlock better AI results every day.
          </p>
        </div>

        {/* Swiper */}
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={24}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop={true}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <div className="h-full min-h-70 rounded-md bg-white border border-purple-200 p-8 shadow-md transition-all duration-300 flex flex-col">
                <FaQuoteLeft className="text-4xl text-purple-400 mb-5" />

                <p className="text-gray-600 leading-relaxed">{review.review}</p>

                {/* Bottom Right */}
                <div className="flex items-center gap-2 mt-8 flex-1">
                  <Image
                    src={review.avatar}
                    alt={review.name}
                    width={50}
                    height={50}
                    className="w-10 h-10 object-cover rounded-full"
                  ></Image>

                  <div>
                    <h4 className="font-semibold text-right">{review.name}</h4>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default CustomerReview;
