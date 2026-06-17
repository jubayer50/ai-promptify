"use client";

import { useState } from "react";
import { Link, Button } from "@heroui/react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const navLinks = (
    <>
      <li>Home</li>
      <li>All Prompts</li>
      <li>Home</li>
    </>
  );

  return (
    <nav className="sticky top-0 z-40 w-full border-b border-separator backdrop-blur-lg">
      <header className="flex max-w-340 mx-auto py-3 items-center justify-between px-6">
        <div className="flex items-center gap-4">
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className="sr-only">Menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
          <div>Logo</div>
        </div>

        <ul className="hidden items-center gap-4 md:flex">{navLinks}</ul>

        <div>
          <div className="p-1 rounded-md hover:bg-gray-200">
            <div className="h-8 w-8 rounded-full bg-linear-to-b from-[#654EFB] to-[#D407D1]"></div>

            <div className=""></div>
          </div>
        </div>
      </header>

      {isMenuOpen && (
        <div className="border-t border-separator md:hidden">
          <ul className="flex flex-col gap-2 p-4">{navLinks}</ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
