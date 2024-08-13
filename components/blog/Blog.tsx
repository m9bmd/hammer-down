"use client";
import { BlogFullType } from "@/types/BlogFullType";
import { EditorContent, useEditor } from "@tiptap/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { blogExtensions } from "./blogExtenstions";
import { HammerIcon } from "lucide-react";
import { Button } from "../ui/button";
import {
  hasHammeredBlog,
  likeBlog,
  likeBlogProps,
} from "@/actions/blog/likeBlog";
import { usePathname } from "next/navigation";

//4f5d75
const Blog = ({ blog,hasLiked }: { blog: BlogFullType,hasLiked:boolean }) => {
  const [likeStatus, setLikeStatus] = useState("");
  const [hasliked, setHasLiked] = useState(hasLiked);
  const [hammerCount, setHammerCount] = useState(blog.hammerCount);
  const pathName = usePathname();
  const editor = useEditor({
    editorProps: {
      attributes: { class: "text-[#333533]  leading-relaxed text-base" },
    },
    extensions: blogExtensions,
    content: blog.content,
    editable: false,
  });

  const handleLike = async () => {
    const newHasLiked = !hasliked;
    const prevCount = hammerCount;

    // Optimistic update
    setHasLiked(newHasLiked);
    setHammerCount(newHasLiked ? prevCount + 1 : prevCount - 1);

    try {
      const { message, success } = await likeBlog({
        pathName: pathName,
        postId: blog.id,
      });

      if (success) {
        setLikeStatus(message);
      } else {
        setHasLiked(!newHasLiked);
        setHammerCount(prevCount);
        setLikeStatus("Failed to update. Please try again.");
      }
    } catch (error) {
      setHasLiked(!newHasLiked);
      setHammerCount(prevCount);
      setLikeStatus("An error occurred. Please try again.");
    }

    setTimeout(() => {
      setLikeStatus("");
    }, 3000);
  };

  return (
    <article className="space-y-6">
      <Link href={"#"} className="text-primary">
        {blog.author.name}
      </Link>
      <h1 className="text-3xl font-bold text-primary">{blog.title}</h1>
      <div className="flex gap-2">
        {blog.categories.map((category, index) => (
          <p
            key={index}
            // className="flex h-8 cursor-pointer items-center rounded-md border-2 border-b-4 border-r-4 border-b-secondary border-r-secondary px-2 text-sm text-primary transition-all duration-75 hover:border-b hover:border-r"
            className="border-b-2 border-r-2 border-secondary px-2 text-primary"
          >
            {category.name}
          </p>
        ))}
      </div>
      <EditorContent editor={editor} />
      <footer>
        <div className="flex flex-col items-center justify-center gap-2">
          <div className="flex w-fit items-center justify-center rounded-full border-4 p-2 shadow shadow-primary transition-all duration-500">
            <Button
              variant={"secondary"}
              size={"icon"}
              onClick={handleLike}
              // className="group h-14 w-14 rounded-full border-2 border-dashed border-secondary bg-transparent p-0 ring-rose-200 transition-transform duration-500 hover:scale-125 hover:border-0 active:ring-2"
              className={
                hasliked
                  ? "group h-14 w-14 scale-125 rounded-full border-0 p-0 ring-rose-200 transition-all duration-500 hover:shadow hover:shadow-primary active:ring-2"
                  : "group h-14 w-14 rounded-full border-2 border-dashed border-secondary bg-transparent p-0 ring-rose-200 transition-transform duration-500 hover:scale-125 hover:border-0 hover:shadow hover:shadow-primary active:ring-2"
              }
            >
              <HammerIcon
                // className="stroke-1 transition-all duration-300 group-hover:rotate-45 group-hover:scale-125"
                className={
                  hasliked
                    ? "rotate-45 scale-125 stroke-1 transition-all duration-300"
                    : "stroke-1 transition-all duration-300 group-hover:rotate-45 group-hover:scale-125"
                }
              />
            </Button>
          </div>
          <p className="text-primary">{hammerCount}</p>

          <p className="mt-2 text-primary">{likeStatus}</p>
        </div>
      </footer>
    </article>
  );
};

export default Blog;
