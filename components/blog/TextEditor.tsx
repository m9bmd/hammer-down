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

const TextEditor = forwardRef(
  ({ value, onChange, isPending }: TextEditorProps, ref) => {
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
    useEffect(() => {
      if (editor) {
        editor.setEditable(!isPending);
      }
    }, [isPending]);

    useImperativeHandle(
      ref,
      () => ({
        getEditor: () => editor,
      }),
      [editor]
    );

    return (
      <>
        {editor ? <TextEditorToolbar editor={editor} isDisabled={isPending} /> : null}
        <EditorContent editor={editor} />
      </>
    );
  }
);
TextEditor.displayName = "TextEditor";
export default TextEditor;
