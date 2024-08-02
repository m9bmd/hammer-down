import React from "react";
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
import { Button } from "@/components/ui/button";
import { EllipsisVerticalIcon, PencilIcon, TrashIcon } from "lucide-react";
import { navigate } from "@/lib/navigate";
import EditButton from "@/components/blog/edit/EditButton";
const PostCardMenu = ({ id }: { id: string }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="">
        <Button variant={"ghost"} size={"icon"} className="">
          <EllipsisVerticalIcon className="h-4 w-4 text-primary" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <EditButton id={id} />
          </DropdownMenuItem>
          <DropdownMenuItem className="">
            <Button
              className="flex w-full justify-start"
              variant={"destructive"}
            >
              <TrashIcon className="mr-2 h-4 w-4" />
              <span>delete</span>
            </Button>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default PostCardMenu;
