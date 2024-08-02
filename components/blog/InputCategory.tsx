import { Category } from "@prisma/client";
import React from "react";
import { Button, buttonVariants } from "../ui/button";
import { XIcon } from "lucide-react";
import { Input } from "../ui/input";

type InputCategoryProps = {

  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
const InputCategory = ({value,onChange }: InputCategoryProps) => {
  return (
    <div className="flex flex-col gap-2">
      <Input
        placeholder="add upto 2 category"
        className="border-0 p-0 text-base focus-visible:outline-0 focus-visible:ring-0 focus-visible:ring-offset-0"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default InputCategory;
