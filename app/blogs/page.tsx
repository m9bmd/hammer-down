import AllBlogs from "@/components/Home/AllBlogs";
import React from "react";

const page = () => {
  return (
    <div className="px-2 pb-14 pt-14 lg:px-0">
      <div className="max-w-[800px] mx-auto space-y-12">
        <h2 className="text-4xl font-bold text-primary ">Recent Posts</h2>
        <AllBlogs />
      </div>
    </div>
  );
};

export default page;
