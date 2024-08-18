import { getAllBlogsCount } from "@/actions/blog/getBlog";
import { getUserCount } from "@/actions/user/getUserCount";
import { Button, buttonVariants } from "@/components/ui/button";
import { getCurrentUserRole } from "@/lib/auth";

import { ArrowDown, ArrowRight } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";

const page = async () => {
  const role = await getCurrentUserRole();

  if (role !== "ADMIN") {
    return redirect("/");
  }
  const BlogCount = await getAllBlogsCount();
  const UserCount = await getUserCount();
  const AdminPaths = [
    {
      title: "All Posts",
      count: BlogCount,
      link: "/dashboard/admin/posts",
      icon: <ArrowRight className="h-5 w-5 text-primary" />,
    },
    {
      title: "All Users",
      count: UserCount,
      link: "/dashboard/admin/users",
      icon: <ArrowRight className="h-5 w-5 text-primary" />,
    },
  ];
  return (
    <div className="flex flex-col gap-4 md:flex-row">
      {AdminPaths.map((item, index) => (
        <div
          className="flex h-24 w-full items-center justify-between rounded-md border border-secondary bg-accent p-4"
          key={index}
        >
          <h2 className="text-primary">
            {item.title} <span className="font-bold">({item.count})</span>
          </h2>
          <Link
            href={item.link}
            className={buttonVariants({ variant: "secondary", size: "icon" })}
          >
            {item.icon}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default page;
