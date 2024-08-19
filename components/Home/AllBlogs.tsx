import React from "react";

import { getAllBlogs } from "@/actions/blog/getBlog";

import SearchBlog from "../Blogs/SearchBlog";

const AllBlogs = async () => {
  const res = await getAllBlogs();
  return (
    <div className="flex flex-col gap-6 px-1">
      {res.success === true && res.posts ? (
        <SearchBlog blogs={res.posts} />
      ) : (
        <p>No posts in the website</p>
      )}
    </div>
  );
};

export default AllBlogs;
