import React from "react";
import BlogCard from "../Blogs/BlogCard";
import { getAllBlogs } from "@/actions/blog/getBlog";
import { BlogFullType } from "@/types/BlogFullType";
const AllBlogs = async () => {
  const res = await getAllBlogs();
  // console.log(res);
  return (
    <div className="flex flex-col gap-6 px-1">
      {res.success === true && res.posts ? (
        res.posts.map((post) => <BlogCard key={post.id} blog={post} />)
      ) : (
        <p>No posts found</p>
      )}
    </div>
  );
};

export default AllBlogs;
