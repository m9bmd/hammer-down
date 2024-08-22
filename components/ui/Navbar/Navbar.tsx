import React from "react";
import {  buttonVariants } from "../button";
import Link from "next/link";

import AccountMenu from "./AccountMenu";
import { getCurrentUser } from "@/lib/user_utils";

const Navbar = async () => {
  const user = await getCurrentUser();
  return (
    <nav className="lg-px-6 flex h-16 items-center justify-between border-b px-2 shadow-sm">
      <a href="/" className="text-2xl font-bold text-primary">
        Hammer Down
      </a>
      <div>
        {user ? (
          <div className="flex items-center gap-4 lg:gap-8">
            <Link
              href={"/blog/create"}
              className={buttonVariants({ variant: "default", size: "sm" })}
            >
              create post
            </Link>
            <AccountMenu />
          </div>
        ) : (
          <Link
            href="/auth/login"
            className={buttonVariants({ variant: "link" })}
          >
            login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
