import React, { use } from "react";
import { Button, buttonVariants } from "../button";
import Link from "next/link";
import { auth, signOut } from "@/auth";
import { apiAuthPrefix } from "@/routes/routes";
import SignoutButton from "./SignoutButton";
import AccountMenu from "./AccountMenu";
import { getCurrentUser } from "@/lib/auth";

const Navbar = async () => {
  const user = await getCurrentUser();
  return (
    <nav className="lg-px-6 flex h-16 items-center justify-between border-b px-2">
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
            {/* <SignoutButton /> */}
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
