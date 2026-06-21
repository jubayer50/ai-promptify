"use client";

import React from "react";
import { Button } from "@heroui/react";

const PricingPage = () => {
  const freeBenefits = [
    "Add up to 3 prompts only",
    "Access public prompts",
    "Search & explore prompts",
    "Bookmark favorite prompts",
  ];

  const premiumBenefits = [
    "Add unlimited prompts",
    "Access all public prompts",
    "Unlock all private/premium prompts",
    "Lifetime premium access",
    "Priority access to trending prompts",
  ];

  return (
    <div className="max-w-330 mx-auto px-3 py-10">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-5xl font-bold mb-3">
          Unlock{" "}
          <span className="bg-linear-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
            Premium Access
          </span>
        </h2>

        <p className="max-w-3xl mx-auto text-gray-600">
          Choose the plan that fits your needs. Start free or upgrade once to
          unlock lifetime access to premium AI prompts and exclusive features.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-225 mx-auto">
        {/* Free Card */}
        <div className="border rounded-xl p-6 shadow-sm bg-white flex flex-col">
          <h3 className="text-2xl font-bold mb-2">Free Plan</h3>
          <p className="text-4xl font-bold mb-4">$0</p>
          <p className="text-gray-500 mb-6">Perfect for beginners</p>

          <div className="space-y-3 flex-1">
            {freeBenefits.map((benefit, i) => (
              <div key={i} className="flex items-center gap-3">
                <span className="text-green-500 font-bold">✓</span>
                <span>{benefit}</span>
              </div>
            ))}
          </div>

          <Button className="w-full mt-6 rounded-md">Current Plan</Button>
        </div>

        {/* Premium Card */}
        <div className="rounded-xl p-6 shadow-lg bg-linear-to-r from-purple-600 to-pink-500 text-white flex flex-col relative">
          <span className="absolute top-4 right-4 bg-white text-purple-600 text-xs font-semibold px-3 py-1 rounded-full">
            Most Popular
          </span>

          <h3 className="text-2xl font-bold mb-2">Premium Plan</h3>
          <p className="text-4xl font-bold mb-4">$5</p>
          <p className="mb-6">One-time payment • Lifetime access</p>

          <div className="space-y-3 flex-1">
            {premiumBenefits.map((benefit, i) => (
              <div key={i} className="flex items-center gap-3">
                <span className="text-green-300 font-bold">✓</span>
                <span>{benefit}</span>
              </div>
            ))}
          </div>

          <form action={"/api/subscription"} method="POST">
            <Button
              type="submit"
              className="w-full mt-6 rounded-md bg-white text-purple-600 font-semibold"
            >
              Unlock Premium
            </Button>
          </form>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="text-center mt-10">
        <h4 className="text-xl font-bold mb-2">
          One Payment. Lifetime Premium.
        </h4>
        <p className="text-gray-600">
          Pay once with Stripe and unlock the full power of AIPromptify forever.
        </p>
      </div>
    </div>
  );
};

export default PricingPage;
