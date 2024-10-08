"use client";
import React, { forwardRef, useEffect, useImperativeHandle } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import TextEditorToolbar from "./TextEditorToolbar";
import { blogExtensions } from "./blogExtenstions";

type TextEditorProps = {
  value: string;
  isPending: boolean;
  onChange: (value: string) => void;
};

const TextEditor = ({ value, onChange, isPending }: TextEditorProps) => {
  const editor = useEditor({
    editorProps: {
      attributes: {
        class:
          "min-h-[446px] w-full rounded-md  border border-primary/20  bg-transparent px-3 py-2  ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 overflow-auto ",
      },
    },
    extensions: blogExtensions,
    content: value,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
    immediatelyRender: false,
  });

  return (
    <>
      {editor ? (
        <TextEditorToolbar editor={editor} isDisabled={isPending} />
      ) : null}
      <EditorContent editor={editor} />
    </>
  );
};

export default TextEditor;
