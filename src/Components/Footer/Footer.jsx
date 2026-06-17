"use client";

import React from "react";
import { Input, Button } from "@heroui/react";
import { FaFacebookF, FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const linkStyle =
    "relative inline-block text-gray-600 hover:text-purple-600 transition-all duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-purple-600 after:transition-all after:duration-300 hover:after:w-full";

  return (
    <footer className="bg-linear-to-b from-purple-50 to-pink-50 border-t border-gray-200 mt-20">
      <div className="max-w-330 mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl md:text-4xl font-bold bg-linear-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
              AIPromptify
            </h2>

            <p className="mt-5 text-gray-600 max-w-138 leading-relaxed">
              Discover, share, and monetize powerful AI prompts for tools like
              OpenAI ChatGPT, Google Gemini, Anthropic Claude, and Midjourney.
              Empowering creators and helping users unlock better AI results.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 mt-6">
              {[FaFacebookF, FaLinkedinIn, FaGithub, FaTwitter].map(
                (Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="p-2 rounded-full bg-linear-to-r from-purple-600 to-pink-500 hover:scale-105 transition-all duration-300"
                  >
                    <Icon className="text-white text-lg" />
                  </a>
                ),
              )}
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-16">
            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className={linkStyle}>
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className={linkStyle}>
                    Explore Prompts
                  </a>
                </li>
                <li>
                  <a href="#" className={linkStyle}>
                    Trending Prompts
                  </a>
                </li>
                <li>
                  <a href="#" className={linkStyle}>
                    Marketplace
                  </a>
                </li>
                <li>
                  <a href="#" className={linkStyle}>
                    Pricing
                  </a>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Resources</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className={linkStyle}>
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className={linkStyle}>
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className={linkStyle}>
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className={linkStyle}>
                    FAQs
                  </a>
                </li>
                <li>
                  <a href="#" className={linkStyle}>
                    Community Guidelines
                  </a>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Company</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className={linkStyle}>
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className={linkStyle}>
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className={linkStyle}>
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className={linkStyle}>
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className={linkStyle}>
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        {/* <div className="mt-16 bg-white rounded-2xl p-8 shadow-md">
          <h3 className="text-2xl font-bold">Stay Updated with AI Trends</h3>
          <p className="text-gray-600 mt-2">
            Get the latest premium prompts, AI updates, and creator insights
            delivered to your inbox.
          </p>

          <div className="flex flex-col md:flex-row gap-4 mt-6">
            <Input
              type="email"
              placeholder="Enter your email"
              className="flex-1"
            />
            <Button className="bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold px-8">
              Subscribe
            </Button>
          </div>
        </div> */}

        {/* Bottom Footer */}
        <div className="border-t border-gray-200 mt-12 pt-6 text-center text-gray-500">
          <p>© 2026 AIPromptify. All rights reserved.</p>
          <p className="mt-2">
            Built for AI creators, innovators, and prompt engineers
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
