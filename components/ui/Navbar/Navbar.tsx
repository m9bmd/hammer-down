import React from "react";
import { Button, buttonVariants } from "../button";
import Link from "next/link";
import { auth, signOut } from "@/auth";
import { apiAuthPrefix } from "@/routes/routes";
import SignoutButton from "./SignoutButton";
import AccountMenu from "./AccountMenu";

const Navbar = async () => {
  const session = await auth();
  return (
    <nav className="border-b flex items-center justify-between px-2 lg-px-6  h-16">
      <a href="/" className="text-primary font-bold text-2xl">
        Hammer Down
      </a>
      <div>
        {session ? (
          <div className="flex items-center  gap-4 lg:gap-8">
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
