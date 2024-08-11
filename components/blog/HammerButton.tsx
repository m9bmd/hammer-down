import React from "react";
import { Button } from "../ui/button";
import { HammerIcon } from "lucide-react";

const HammerButton = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <div className="flex w-fit items-center justify-center rounded-full border-4 p-2 transition-all duration-500">
        <Button
          variant={"secondary"}
          size={"icon"}
          // className="group h-14 w-14 rounded-full border-2 border-dashed border-secondary bg-transparent p-0 ring-rose-200 transition-transform duration-500 hover:scale-125 hover:border-0 active:ring-2"
          className={
            "group h-14 w-14 rounded-full border-2 border-dashed border-secondary bg-transparent p-0 ring-rose-200 transition-transform duration-500 hover:scale-125 hover:border-0 active:ring-2"
          }
        >
          <HammerIcon
            // className="stroke-1 transition-all duration-300 group-hover:rotate-45 group-hover:scale-125"
            className={
              "stroke-1 transition-all duration-300 group-hover:rotate-45 group-hover:scale-125"
            }
          />
        </Button>
      </div>
      <p className="animate-fade-in text-primary"></p>
    </div>
  );
};

export default HammerButton;
