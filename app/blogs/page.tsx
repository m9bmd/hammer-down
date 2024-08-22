import AllBlogs from "@/components/Home/AllBlogs";
import React, { Suspense } from "react";

import { getAllBlogsCount } from "@/actions/blog/getBlog";
import { AllBlogsLoaderSkelton } from "@/components/blog/AllBlogsLoaderSkeleton";


const page = async () => {
  const blogCount = await getAllBlogsCount();
  return (
    <div className="bg-svg  px-2 pb-14 pt-14 lg:px-0">
      <div className="space-y-12 mx-auto max-w-[626px]">
        <div className="flex items-center justify-between px-1">
          <h2 className="text-4xl font-bold text-primary">Recent Posts</h2>
          {/* <RefreshButton pathName={"/blogs"}/> */}
        </div>

        <Suspense fallback={<AllBlogsLoaderSkelton blogCount={blogCount!} />}>
          <AllBlogs />
        </Suspense>
      </div>
    </div>
  );
};

export default page;
