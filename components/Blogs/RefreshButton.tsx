import React from "react";
import { Button } from "../ui/button";
import { RotateCcw, RotateCcwIcon } from "lucide-react";

const RefreshButton = ({ pathName }: { pathName: string }) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <Button variant={"secondary"} size={"icon"} className="group">
        <RotateCcwIcon className="transition-all duration-20 group-active:rotate-[-360deg] group-active:text-orange-500" />
      </Button>
      <p className="text-xs text-muted-foreground">refresh</p>
    </div>
  );
};

export default RefreshButton;
