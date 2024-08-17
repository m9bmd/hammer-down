import Footer from "@/components/Home/ChillDog";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { buttonVariants } from "@/components/ui/button";
import {
  CatIcon,
  HandMetalIcon,
  LollipopIcon,
  PopcornIcon,
} from "lucide-react";
const page = () => {
  return (
    <div className="px-10 flex flex-col justify-between h-[calc(100vh-64px)]">
      <div className="flex flex-col items-center space-y-4 pt-28">
        <div className="relative flex h-80 w-80">
          <div className="absolute left-0 top-0 h-full w-full animate-rotate rounded-full border-2 border-dashed border-primary"></div>
          <div className="absolute left-0 top-0 flex h-12 w-12 animate-rotate-fast items-center justify-center rounded-full border-2 border-dashed border-yellow-500">
            <PopcornIcon className="h-8 w-8 rounded-full border border-yellow-500 bg-yellow-200 p-1 text-yellow-500" />
          </div>

          <div className="absolute right-0 top-0 flex h-20 w-20 animate-rotate-fast items-center justify-center rounded-full border-2 border-dashed border-green-500 text-primary">
            <CatIcon className="h-8 w-8 rounded-full border border-green-500 bg-green-200 p-1 text-green-500" />
          </div>

          <div className="absolute bottom-0 left-0 flex h-24 w-24 animate-rotate-reverse items-center justify-center gap-2 rounded-full border-2 border-dashed border-purple-500">
            <HandMetalIcon className="h-9 w-9 rounded-full border border-purple-500 bg-purple-200 stroke-1 p-1 text-purple-500" />
          </div>

          <div className="absolute bottom-0 right-0 flex h-12 w-12 animate-rotate-fast items-center justify-center rounded-full border-2 border-dashed border-pink-500 text-xs text-primary">
            <p className="rounded-full border border-pink-500 bg-pink-200 p-1 text-pink-500">
              {":P"}
            </p>
          </div>
          <div className="flex h-full w-full items-center justify-center">
            <Image
              priority={true}
              src={
                "https://res.cloudinary.com/duseu6urj/image/upload/f_auto,q_auto/v1/hammer%20down/nr42nnxkygmzjun3nffu"
              }
              width={300}
              height={300}
              title="character design from Anton Studios"
              alt="chill sunflower resting on ground by Anton Studios"
              className="z-40"
            />
          </div>
        </div>

        <h1 className="w-[324px] text-pretty text-center text-primary">
          Sup Homie?
          <br /> Long time no see!
        </h1>
        <Link
          href={"/blogs"}
          className={buttonVariants({ variant: "default" })}
        >
          Lets go
        </Link>
      </div>
      {/* <RecentBlogs /> */}
      <Footer />
    </div>
  );
};

export default page;
