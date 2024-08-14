import { BlogType } from "@/schemas/blog/BlogSchema";
import React from "react";
import { Button } from "../ui/button";
import moment from "moment";
import { showDate } from "@/lib/utils";
import { ArrowRight, HammerIcon } from "lucide-react";
import { BlogFullType } from "@/types/BlogFullType";
import Link from "next/link";


const BlogCard = ({ blog }: {blog:BlogFullType}) => {
  function removeHtmlTags(input: string) {
    return input.replace(/<[^>]*>/g, "");
  }
  const CleanContent = removeHtmlTags(blog.content.substring(0, 50));
  // const titleParams = blog.title.replaceAll(" ", "-");
  const titleParams = encodeURIComponent(blog.title.replaceAll(" ", "-"));
  // console.log(titleParams)
  return (
    <Link
      href={`/blog?title=${titleParams}`}
      className="group space-y-4 rounded-md border border-secondary p-4"
    >
      <h1 className="text-xl text-primary">{blog.title}</h1>
      <div className="flex gap-4">
        {blog.categories.map((category) => (
          <p
            key={category.id}
            className="border-b border-r border-secondary px-2 text-primary"
            // className="flex h-8 cursor-pointer items-center rounded-md border-2 border-b-4 border-r-4 border-b-secondary border-r-secondary px-2 text-sm text-primary transition-all duration-75 hover:border-b hover:border-r"
          >
            
            {category.name}
          </p>
        ))}
      </div>
      <p className="text-sm text-muted-foreground">{CleanContent}...</p>
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-2">
          <p className="w-fit bg-primary px-4 py-1 text-primary-foreground">
            {blog.author.name}
          </p>
          <p className="text-sm text-muted-foreground">
            {blog.createdAt !== blog.updatedAt ? (
              <span>updated: {showDate(blog.updatedAt.toISOString())}</span>
            ) : (
              showDate(blog.createdAt.toISOString())
            )}
          </p>
        </div>
        <p className="flex items-center justify-center rounded-full border-2 border-dashed border-secondary px-6 transition-all duration-300 group-hover:border-solid group-hover:px-2">
          <ArrowRight className="h-10 w-10 stroke-[1] text-primary transition-all duration-700 group-hover:rotate-[360deg]" />
        </p>
      </div>
    </Link>
  );
};

export default BlogCard;
