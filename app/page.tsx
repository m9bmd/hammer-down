import { Button, buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import sunflower from "../public/sun-flower.png";
import RecentBlogs from "@/components/Home/RecentBlogs";
import Footer from "@/components/Home/ChillDog";
import Link from "next/link";

export default function Home() {
  return (
    <div className="px-10 ">
      <div className="flex flex-col items-center pt-28 space-y-4">
        <Image
          src={sunflower}
          width={300}
          height={300}
          alt="chill sunflower resting on ground"
          className="border-dashed border-2 border-primary/60 rounded-full"
        />
        <h1 className="text-center text-primary text-pretty w-[324px]">
          Sup Homie?
          <br /> Long time no see!
          <br />
          Check what other's are upto.
        </h1>
        <Link
          href={"/blogs"}
          className={buttonVariants({ variant: "default" })}
        >
          Let's go
        </Link>
      </div>
      <RecentBlogs />
      <Footer />
    </div>
  );
}
