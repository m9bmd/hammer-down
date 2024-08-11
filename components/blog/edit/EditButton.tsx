"use client";
import { Button } from "@/components/ui/button";
import { navigate } from "@/lib/navigate";
import { PencilIcon } from "lucide-react";
import React from "react";

const EditButton = ({ id }: { id: string }) => {
  return (
    <Button
      variant={"secondary"}
      className="flex w-full justify-start"
      onClick={() => navigate(`/blog/edit?id=${id}`)}
    >
      <PencilIcon className="mr-1 h-4 w-4 stroke-[1]" />
      <span>edit</span>
    </Button>
  );
};

export default EditButton;
