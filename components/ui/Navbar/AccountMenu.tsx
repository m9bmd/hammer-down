import React from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,

  DropdownMenuSeparator,

  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { auth } from "@/auth";
import SignoutButton from "./SignoutButton";
import { NotebookTextIcon, User } from "lucide-react";
import Link from "next/link";
import { getCurrentUser } from "@/lib/user_utils";
const AccountMenu = async () => {
  const user = await getCurrentUser();
  // console.log(session);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarImage src={user?.image || ""} alt="user profile" />
          <AvatarFallback className="bg-primary/15 font-bold text-primary">
            {"^_^"}
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 bg-background shadow-none">
        <DropdownMenuLabel className="text-primary">
          My Account
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem asChild>
            <Link href={"/dashboard/profile"} className="flex items-center">
              <User className="mr-2 h-4 w-4 text-primary" />
              <span className="text-primary">
                {user?.name} {user?.role === "ADMIN" && "(ADMIN)"}
              </span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href={"/dashboard/posts"} className="flex items-center">
              <NotebookTextIcon className="mr-2 h-4 w-4 text-primary" />
              <span className="text-primary">Dashboard</span>
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator className="bg-secondary" />
        <DropdownMenuItem className="">
          <SignoutButton />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default AccountMenu;
