import Link from "next/link";
import React from "react";
import { buttonVariants } from "@/components/ui/button";
import { CatIcon, HandMetalIcon, PopcornIcon } from "lucide-react";
import SunflowerImage from "@/components/Home/SunflowerImage";
const page = () => {
  return (
    <div className="">
      <div className="relative h-[calc(100dvh-4rem)]">
        <div className="flex h-full w-full flex-col items-center space-y-2 pt-28">
          <div className="relative flex h-80 w-80 flex-col">
            <div className="absolute left-5 top-2 h-[90%] w-[90%] animate-rotate rounded-full border-2 border-dashed border-primary"></div>
            <div className="absolute left-2 top-0 flex h-12 w-12 animate-rotate-fast items-center justify-center rounded-full border-2 border-dashed border-yellow-500">
              <PopcornIcon className="h-8 w-8 rounded-full border border-yellow-500 bg-yellow-200 p-1 text-yellow-500" />
            </div>
            <div className="absolute right-5 top-5 flex h-16 w-16 animate-rotate-fast items-center justify-center rounded-full border-2 border-dashed border-green-500 text-primary">
              <CatIcon className="h-8 w-8 rounded-full border border-green-500 bg-green-200 p-1 text-green-500" />
            </div>
            <div className="absolute bottom-7 left-6 flex h-20 w-20 animate-rotate-reverse items-center justify-center gap-2 rounded-full border-2 border-dashed border-purple-500">
              <HandMetalIcon className="h-9 w-9 rounded-full border border-purple-500 bg-purple-200 stroke-1 p-1 text-purple-500" />
            </div>
            <div className="absolute bottom-9 right-2 flex h-10 w-10 animate-rotate-fast items-center justify-center rounded-full border-2 border-dashed border-pink-500 text-xs text-primary">
              <p className="rounded-full border border-pink-500 bg-pink-200 p-1 text-pink-500">
                {":P"}
              </p>
            </div>
            <SunflowerImage/>
          </div>
          <div className="flex flex-col items-center justify-center gap-4">
            <h1 className="text-center text-sm text-primary md:text-base lg:text-lg">
              {/* Sup Homie? <br /> Long time no see! */}
              Sup homie!
              <br />
              Hammer down your Vibe <br />
              I&apos;ll catch it
            </h1>
            <Link
              href={"/blogs"}
              className={buttonVariants({
                variant: "default",
                className: "",
              })}
            >
              Let&apos;s go
            </Link>
          </div>
        </div>
        <div className="absolute bottom-0 w-full pb-6 text-center">
          <p className="text-xs text-muted-foreground">
            for my baddie, no cap✌️
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
