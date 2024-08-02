import React from "react";

import { EllipsisVerticalIcon } from "lucide-react";
import { type Post, type Category } from "@prisma/client";
import DOMPurify from "isomorphic-dompurify";
import { showDate } from "@/lib/utils";
import PostCardMenu from "./PostCardMenu";
type PostWithCategories = Post & {
  categories: Category[];
};

type PostCardProps = {
  post: PostWithCategories;
};

const PostCard = ({ post }: PostCardProps) => {
  const clean = DOMPurify.sanitize(post.content.substring(0, 50));
  return (
    <article className="w-full space-y-4 rounded-md border border-secondary p-4 md:w-[520px]">
      <div className="flex items-baseline justify-between">
        <h2 className="text-lg text-primary">{post.title}</h2>
        {/* <EllipsisVerticalIcon className="h-4 w-5 text-muted-foreground" /> */}
        <PostCardMenu id={post.id} />
      </div>

      <div className="flex gap-2">
        {post.categories.map((category) => (
          <p
            key={category.id}
            className="cursor-pointer rounded-md border border-b-2 border-r-2 border-b-secondary border-r-secondary px-2 text-sm text-primary transition-all duration-0 hover:border-b hover:border-r"
          >
            {category.name}
          </p>
        ))}
      </div>
      <div className="flex items-baseline">
        <div
          className="text-sm text-muted-foreground"
          dangerouslySetInnerHTML={{
            __html: clean,
          }}
        ></div>
        <p className="text-sm text-muted-foreground">....</p>
      </div>
      <footer className="">
        <p className="text-xs text-muted-foreground">
          {post.createdAt.getTime() === post.updatedAt.getTime() ? (
            showDate(post.createdAt.toISOString())
          ) : (
            <>
              <span>Updated: </span>
              {showDate(post.updatedAt.toISOString())}
            </>
          )}
        </p>
      </footer>
    </article>
  );
};

export default PostCard;
