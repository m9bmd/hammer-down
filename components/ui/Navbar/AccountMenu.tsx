import React from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { auth } from "@/auth";
import SignoutButton from "./SignoutButton";
import { NotebookTextIcon, User } from "lucide-react";
import Link from "next/link";
const AccountMenu = async () => {
  const session = await auth();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarImage src={session?.user.image || ""} alt="@shadcn" />
          <AvatarFallback className="bg-primary/15 text-primary font-bold">
            {"^_^"}
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-background shadow-none w-56">
        <DropdownMenuLabel className="text-primary">
          My Account
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <User className="mr-2 w-4 h-4 text-primary" />
            <span className="text-primary">Profile</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href={"/dashboard"} className="flex items-center">
            <NotebookTextIcon className="mr-2 w-4 h-4 text-primary" />
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
