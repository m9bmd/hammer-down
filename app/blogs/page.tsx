import AllBlogs from "@/components/Home/AllBlogs";
import React, { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { getAllBlogsCount } from "@/actions/blog/getBlog";

const page = async () => {
  const blogCount = await getAllBlogsCount();
  return (
    <div className="px-2 pb-14 pt-14 lg:px-0">
      <div className="mx-auto max-w-[800px] space-y-12">
        <h2 className="text-4xl font-bold text-primary">Recent Posts</h2>

        <Suspense fallback={<AllBlogsLoaderSkelton counts={blogCount!} />}>
          <AllBlogs />
        </Suspense>
      </div>
    </div>
  );
};

export default page;

function AllBlogsLoaderSkelton({ counts }: { counts: number }) {
  return (
    <div>
      <div className="flex flex-col gap-4">
        <Skeleton className="h-[40px] w-full rounded-md bg-accent" />
        <div className="flex gap-4">
          <Skeleton className="h-[20px] w-[80px] rounded-md bg-accent" />
          <Skeleton className="h-[20px] w-[80px] rounded-md bg-accent" />
        </div>
        <Skeleton className="h-[20px] w-full rounded-md bg-accent" />
        <div className="flex justify-between">
          <Skeleton className="h-[40px] w-[100px] rounded-md bg-accent" />
          <Skeleton className="h-[40px] w-[100px] rounded-full bg-accent" />
        </div>
      </div>
    </div>
  );
}
