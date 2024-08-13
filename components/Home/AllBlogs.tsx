import React from "react";
import BlogCard from "../Blogs/BlogCard";
import { getAllBlogs } from "@/actions/blog/getBlog";
const AllBlogs = async () => {
  const res = await getAllBlogs();
  return (
    <div className="flex flex-col gap-6 px-1">
      {res.success === true
        ? res.posts?.map((post) => <BlogCard key={post.id} blog={post} />)
        : null}
    </div>
  );
};

export default AllBlogs;
