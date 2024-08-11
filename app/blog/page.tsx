import { getBlogByTitle } from "@/actions/blog/getBlog";
import Blog from "@/components/blog/Blog";
import React from "react";

const page = async ({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const title = searchParams.title as string;
  const blog = await getBlogByTitle(title.replaceAll("-", " "));
  // console.log(blog);
  return (
    <div className="px-6 pt-24 lg:mx-auto lg:w-[800px] lg:px-0">
      {blog.success === true ? <Blog blog={blog.post!} /> : null}
    </div>
  );
};

export default page;
