import React from "react";
import { EditorContent, useEditor } from "@tiptap/react";
import Link from "next/link";

import { useSession } from "next-auth/react";

import { blogExtensions } from "./blogExtenstions";
import { EditBlogType } from "@/schemas/blog/EditBlogSchema";
import { newBlogType } from "@/schemas/blog/newBlogSchema";

const Blog = ({ title, content, categories }: EditBlogType) => {

  const editor = useEditor({
    editorProps: {
      attributes: { class: "text-muted-foreground  leading-relaxed" },
    },
    extensions: blogExtensions,
    content: content,
    editable: false,
  });
  return (
    <div className="space-y-16">
      <div className="space-y-6">

        {title ? (
          <h1 className="text-4xl font-bold leading-relaxed text-primary">
            {title}
          </h1>
        ) : (
          <h1 className="text-4xl text-destructive">No Title No Fun</h1>
        )}
        <div className="flex gap-2">
          {categories.length > 0
            ? categories.map((category) => (
                <Link
                  href={"#"}
                  className="rounded-md bg-primary/15 px-1.5 py-0.5 text-primary"
                >
                  #{category}
                </Link>
              ))
            : null}
        </div>
      </div>
      {content ? (
        <EditorContent editor={editor} />
      ) : (
        <p className="whitespace-pre-wrap text-destructive">no ink splashed</p>
      )}
    </div>
  );
};

export default Blog;
