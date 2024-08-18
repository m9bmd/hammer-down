import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { EllipsisVerticalIcon, EyeIcon } from "lucide-react";
import EditButton from "@/components/blog/edit/EditButton";
import DeleteButton from "@/components/blog/DeleteButton";
const PostCardMenu = ({ id, isAdmin }: { id: string; isAdmin: Boolean }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="">
        <Button variant={"ghost"} size={"icon"} className="">
          <EllipsisVerticalIcon className="h-4 w-4 text-primary" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-background">
        <DropdownMenuGroup className="space-y-2 bg-background">
          <DropdownMenuItem className="hover:bg-blue-50" asChild>
            {!isAdmin && <EditButton id={id} />}
          </DropdownMenuItem>
          <DropdownMenuItem className="hover:bg-red-50" asChild>
            <DeleteButton id={id} />
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default PostCardMenu;
