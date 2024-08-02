import { blogType } from "@/types/blog";
import React from "react";
import { Button } from "../ui/button";
import moment from "moment";
import { showDate } from "@/lib/utils";
import { HammerIcon } from "lucide-react";

type BlogCardProps = {
  blog: blogType;
};
const BlogCard = ({ blog }: BlogCardProps) => {
  return (
    <article className="w-full lg:w-[520px]  p-4 border border-primary/60 rounded-md space-y-3  cursor-pointer hover:bg-card ">
      <h2 className="text-primary text-xl">{blog.title}</h2>
      <div className="space-y-2">
        <p className="text-xs text-primary">{blog.category}</p>
        <p className="text-muted-foreground text-sm">
          {blog.content.substring(0, 50)}..
        </p>
      </div>

      <footer className="flex justify-between items-end  w-full">
        <div className="flex items-end gap-4">
          <Button className="rounded-full text-xs" size={"sm"}>
            {blog.author}
          </Button>
          {/* <div className="flex items-center gap-1">
            <HammerIcon className="text-primary w-5 h-5"/>
            <p className="text-primary">{blog.likeCount}</p>
          </div> */}
        </div>

        <p className="text-xs text-muted-foreground"></p>
        <p className="text-xs text-muted-foreground">
          {showDate(blog.createdAt)}
        </p>
      </footer>
    </article>
  );
};

export default BlogCard;
