"use client";
import React from "react";
import { Button } from "../ui/button";
import { TrashIcon } from "lucide-react";
import { deleteBlog } from "@/actions/blog/deleteBlog";

const DeleteButton = ({ id }: { id: string }) => {
  return (
    <Button
      className="flex w-full justify-start "
      variant={"destructive"}
      onClick={() => deleteBlog(id)}
    >
      <TrashIcon className="mr-2 h-4 w-4" />
      <span>delete</span>
    </Button>
  );
};

export default DeleteButton;
