import React from "react";
import { EditorContent, useEditor } from "@tiptap/react";
import { blogExtensions } from "./blogExtenstions";
import { BlogType } from "@/schemas/blog/BlogSchema";

const PreviewBlog = ({ title, content, categories }: BlogType) => {
  const editor = useEditor({
    editorProps: {
      attributes: { class: "text-muted-foreground  leading-relaxed" },
    },
    extensions: blogExtensions,
    content: content,
    editable: false,
  });
  return (
    <div className="space-y-16" suppressHydrationWarning >
      <div className="space-y-6">
        {title ? (
          <h1 className="text-4xl font-bold leading-relaxed text-primary">
            {title}
          </h1>
        ) : (
          <h1 className="text-4xl text-destructive">No Title No Fun</h1>
        )}
        <div className="flex items-center gap-2">
          {categories.map((category, index) => (
            <p
              key={index}
              className="flex h-8 cursor-pointer items-center rounded-md border-2 border-b-4 border-r-4 border-b-secondary border-r-secondary px-2 text-sm text-primary transition-all duration-75 hover:border-b hover:border-r"
            >
              {category.name}
            </p>
          ))}
        </div>
      </div>
      {content ? (
        <EditorContent editor={editor}  />
      ) : (
        <p className="whitespace-pre-wrap text-destructive">no ink splashed</p>
      )}
    </div>
  );
};

export default PreviewBlog;
