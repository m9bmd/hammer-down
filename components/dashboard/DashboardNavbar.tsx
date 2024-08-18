import { getCurrentUserRole } from "@/lib/auth";
import { HomeIcon, NotebookTextIcon, UserCog, UserIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const DashboardNavbar = async () => {
  const currentRole = await getCurrentUserRole();
  const links = [
    // {
    //   address: "/dashboard",
    //   icon: <HomeIcon className="text-primary" />,
    //   name: "Home",
    // },
    {
      address: "/dashboard/posts",
      icon: <NotebookTextIcon className="text-primary" />,
      name: "Posts",
    },
    {
      address: "/dashboard/profile",
      icon: <UserIcon className="text-primary" />,
      name: "Profile",
    },
  ];
  return (
    <aside className="fixed bottom-0 right-0 z-20 flex h-16 w-full items-center justify-around bg-accent lg:gap-4 lg:px-4">
      {links.map((link, index) => (
        <Link
          key={index}
          href={link.address}
          className="lg:flex lg:w-full lg:items-center lg:justify-center lg:gap-4 lg:rounded lg:border lg:border-secondary"
        >
          {link.icon}
          <span className="hidden text-primary lg:inline-block lg:py-2 lg:text-lg">
            {link.name}
          </span>
        </Link>
      ))}
      {currentRole === "ADMIN" && (
        <Link
          href={"/dashboard/admin"}
          className="lg:flex lg:w-full lg:items-center lg:justify-center lg:gap-4 lg:rounded lg:border lg:border-secondary"
        >
          <UserCog className="text-primary" />
          <span className="hidden text-primary lg:inline-block lg:py-2 lg:text-lg">
            ADMIN
          </span>
        </Link>
      )}
    </aside>
  );
};

export default DashboardNavbar;
