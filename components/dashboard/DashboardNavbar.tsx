import { HomeIcon, NotebookTextIcon, UserIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const DashboardNavbar = () => {
  const links = [
    {
      address: "/dashboard",
      icon: <HomeIcon className="text-primary" />,
      name: "Home",
    },
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
    <aside className="absolute bottom-0 left-0 z-20 flex h-16 w-full items-center justify-around bg-primary/10 md:gap-4 md:px-4">
      {links.map((link, index) => (
        <Link
          key={index}
          href={link.address}
          className="md:flex md:w-full md:items-center md:justify-center md:gap-4 md:rounded md:border md:border-secondary"
        >
          {link.icon}
          <span className="hidden text-primary md:inline-block md:text-lg">
            {link.name}
          </span>
        </Link>
      ))}
    </aside>
  );
};

export default DashboardNavbar;
