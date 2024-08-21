import React from "react";

import { EllipsisVerticalIcon } from "lucide-react";
import { type Post, type Category } from "@prisma/client";
import DOMPurify from "isomorphic-dompurify";
import {  showDateNative } from "@/lib/utils";
import PostCardMenu from "./PostCardMenu";
type PostWithCategories = Post & {
  categories: Category[];
};

type PostCardProps = {
  post: PostWithCategories;
  isAdmin?: Boolean
};

const PostCard = ({ post, isAdmin=false }: PostCardProps) => {
  const cleanHTML = DOMPurify.sanitize(post.content.substring(0, 50));
  return (
    <article className="space-y-4 rounded-md border border-secondary p-4">
      <div className="flex items-baseline justify-between">
        <h2 className="text-lg text-primary">{post.title}</h2>
        {/* <EllipsisVerticalIcon className="h-4 w-5 text-muted-foreground" /> */}
         <PostCardMenu id={post.id} isAdmin={isAdmin}/>
      </div>

      <div className="flex h-5 items-center gap-2">
        {post.categories.map((category) => (
          <p
            key={category.id}
            className="cursor-pointer rounded-md border border-b-2 border-r-2 border-b-secondary border-r-secondary px-2 text-sm text-primary transition-all duration-0 hover:border-b hover:border-r"
          >
            {category.name}
          </p>
        ))}
      </div>
      <div className="">
        <div
          className="truncate text-sm text-muted-foreground"
          dangerouslySetInnerHTML={{
            __html: cleanHTML,
          }}
        ></div>
      </div>
      <footer className="">
        <p className="text-xs text-muted-foreground">
          last updated: {showDateNative(post.updatedAt)}
        </p>
      </footer>
    </article>
  );
};

export default PostCard;
