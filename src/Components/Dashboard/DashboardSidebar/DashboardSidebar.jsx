"use client";

import Logo from "@/Components/Logo/Logo";
import { authClient } from "@/lib/auth-client";
import { Bars, Envelope, House, Person } from "@gravity-ui/icons";

import { Button, Drawer } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CiBookmark } from "react-icons/ci";
import { HiOutlineUsers } from "react-icons/hi";
import { IoMdAdd } from "react-icons/io";
import {
  MdOutlineAnalytics,
  MdOutlineCreate,
  MdOutlinePreview,
  MdOutlineReportProblem,
} from "react-icons/md";

export function DashboardSidebar() {
  const pantName = usePathname();

  const { data: session } = authClient.useSession();
  const user = session?.user;

  const userNavContent = [
    { href: "/dashboard/user/add-prompt", icon: IoMdAdd, label: "Add Prompt" },
    {
      href: "/dashboard/user/my-prompts",
      icon: MdOutlineCreate,
      label: "My Prompts",
    },
    {
      href: "/dashboard/user/saved-prompts",
      icon: CiBookmark,
      label: "Saved Prompts ",
    },
    {
      href: "/dashboard/user/my-reviews",
      icon: MdOutlinePreview,
      label: "My Reviews",
    },
    { href: "/dashboard/user/profile", icon: Person, label: "Profile" },
  ];

  const creatorNavContent = [
    { href: "/dashboard/creator", icon: House, label: "Creator Home" },
    {
      href: "/dashboard/creator/add-prompt",
      icon: MdOutlineCreate,
      label: "Add Prompt",
    },
    {
      href: "/dashboard/creator/my-prompts",
      icon: Envelope,
      label: "My Prompts",
    },
  ];

  const adminNavContent = [
    {
      href: "/dashboard/admin/all-users",
      icon: HiOutlineUsers,
      label: "All Users",
    },
    {
      href: "/dashboard/admin/all-prompts",
      icon: MdOutlineCreate,
      label: "All Prompts",
    },
    {
      href: "/dashboard/admin/reported-prompts",
      icon: MdOutlineReportProblem,
      label: "Reported Prompts",
    },
    {
      href: "/dashboard/admin/analytics",
      icon: MdOutlineAnalytics,
      label: "Analytics",
    },
  ];

  const navLinksMap = {
    user: userNavContent,
    creator: creatorNavContent,
    admin: adminNavContent,
  };

  const navItems = navLinksMap[user?.role || "user"];

  const navLinks = (
    <>
      {navItems.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-foreground transition-colors hover:bg-default`}
        >
          <item.icon className="size-5 text-muted" />
          {item.label}
        </Link>
      ))}
    </>
  );

  return (
    <>
      <aside className="hidden md:block w-fit border-r min-h-screen">
        <div className="py-6 border-b px-4">
          <Logo></Logo>
        </div>

        <div className="flex items-center gap-3 py-6 px-4">
          <Image
            src={user?.image}
            alt={user?.name}
            width={100}
            height={100}
            className="w-14 h-14 rounded-full object-cover"
          ></Image>

          <div>
            <h2 className="font-bold text-xl">{user?.name}</h2>
            <p
              className={`px-2.5 py-.5 w-fit text-[12px] font-medium border rounded-full mt-1`}
            >
              {user.role.toUpperCase()}
            </p>
          </div>
        </div>

        <div className="px-4">{navLinks}</div>
      </aside>

      <Drawer>
        <Button
          variant="ghost"
          className={"border-b rounded-none w-full justify-start md:hidden"}
        >
          <Bars />
          Menu
        </Button>
        <Drawer.Backdrop>
          <Drawer.Content placement="left">
            <Drawer.Dialog>
              <Drawer.CloseTrigger />
              <Drawer.Header>
                <Drawer.Heading>Navigation</Drawer.Heading>
              </Drawer.Header>
              <Drawer.Body>
                <nav className="flex flex-col gap-1">{navLinks}</nav>
              </Drawer.Body>
            </Drawer.Dialog>
          </Drawer.Content>
        </Drawer.Backdrop>
      </Drawer>
    </>
  );
}
