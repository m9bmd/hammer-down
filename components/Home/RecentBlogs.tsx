import React from "react";
import sampleData from "../../lib/sampleData.json";
import BlogCard from "../Blogs/BlogCard";
const RecentBlogs = () => {
  return (
    <div className="pt-24 flex flex-col justify-center items-center">
      <div className="space-y-6 pb-8">
        <h2 className="text-primary font-bold text-2xl   self-start ">
          Recent Vibes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {sampleData.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
        </div>

      </div>
    </div>
  );
};

export default RecentBlogs;
