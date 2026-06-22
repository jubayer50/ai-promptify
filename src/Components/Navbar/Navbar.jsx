"use client";

import { useState } from "react";
import { Avatar, Button } from "@heroui/react";
import { authClient } from "@/lib/auth-client";
import { ArrowRightFromSquare, ChevronDown } from "@gravity-ui/icons";
import Logo from "../Logo/Logo";

import { usePathname } from "next/navigation";
import MyNavLink from "./MyNavLink";
import { LuLayoutDashboard } from "react-icons/lu";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const { data: session } = authClient.useSession();
  const user = session?.user;

  const pathName = usePathname();

  const navLinks = (
    <>
      <MyNavLink href={"/"} pathName={pathName}>
        Home
      </MyNavLink>

      <MyNavLink href={"/all-prompts"} pathName={pathName}>
        All Prompts
      </MyNavLink>

      {user && (
        <MyNavLink href={`/dashboard/${user?.role}`}>Dashboard</MyNavLink>
      )}
    </>
  );

  return (
    <nav className="sticky top-0 z-40 w-full border-b border-separator backdrop-blur-lg">
      <header className="flex max-w-340 mx-auto py-3 items-center justify-between px-3">
        <div className="flex items-center gap-2">
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
          <div>
            <Logo></Logo>
          </div>
        </div>

        <ul className="hidden items-center gap-4 md:flex">{navLinks}</ul>

        <div>
          {user ? (
            <div
              onClick={() => setShowProfileMenu(!showProfileMenu)}
              className="relative px-2 py-1 rounded-md hover:bg-gray-200 flex items-center gap-2 transition-all duration-300"
            >
              <div className="rounded-full bg-linear-to-b from-[#654EFB] to-[#D407D1]">
                <Avatar>
                  <Avatar.Image
                    referrerPolicy="no"
                    alt={user?.name || "John Doe"}
                    src={
                      user?.image ||
                      "https://img.heroui.chat/image/avatar?w=400&h=400&u=3"
                    }
                    className="object-cover aspect-square"
                  />
                  <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
                </Avatar>
              </div>

              <ChevronDown
                className={`${showProfileMenu ? "rotate-180 transition-all duration-300" : ""}`}
              ></ChevronDown>

              {showProfileMenu && (
                <ul className="absolute top-13 border right-0 rounded-md px-2.5 py-1.5 bg-white/80 backdrop-blur-lg">
                  <Link href={`/dashboard/${user?.role}`}>
                    <li className="hover:bg-gray-200 rounded-md px-2.5 py-1 flex items-center gap-1.5">
                      <LuLayoutDashboard></LuLayoutDashboard> Dashboard
                    </li>
                  </Link>

                  <li
                    onClick={async () => await authClient.signOut()}
                    className="hover:bg-gray-200 rounded-md px-2.5 py-1 flex items-center gap-1.5 text-red-500"
                  >
                    <ArrowRightFromSquare></ArrowRightFromSquare> Signout
                  </li>
                </ul>
              )}
            </div>
          ) : (
            <div className="flex gap-2">
              <Link href={"signin"}>
                <Button
                  size="sm"
                  className={
                    "rounded-md bg-linear-to-r from-purple-600 to-pink-500 text-white font-semibold"
                  }
                >
                  Sign In
                </Button>
              </Link>

              <Link href={"/signup"}>
                <Button
                  size="sm"
                  className={
                    "rounded-md border-2 bg-transparent border-purple-500 text-purple-600 font-semibold"
                  }
                >
                  Sign Up
                </Button>
              </Link>
            </div>
          )}
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
