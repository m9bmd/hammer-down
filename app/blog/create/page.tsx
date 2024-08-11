import { createBlog } from "@/actions/blog/createBlog";
import BlogMaker from "@/components/blog/create/BlogMaker";
import React from "react";

const CreatePost = () => {
  return (
    <div className="mx-auto max-w-[42rem] pt-24">
      <BlogMaker type="create" />
    </div>
  );
};

export default CreatePost;
