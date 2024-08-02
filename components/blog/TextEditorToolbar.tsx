import React from "react";
import { type Editor } from "@tiptap/react";
import { Toggle } from "../ui/toggle";
import {
  BoldIcon,
  CodeIcon,
  HeadingIcon,
  HighlighterIcon,
  ItalicIcon,
  ListIcon,
  ListOrderedIcon,
  PilcrowIcon,
  StrikethroughIcon,
} from "lucide-react";
import { Separator } from "../ui/separator";
const TextEditorToolbar = ({
  editor,
  isDisabled,
}: {
  editor: Editor;
  isDisabled: boolean;
}) => {
  return (
    <div className="flex gap-2 border rounded-md p-1">
      <Toggle
        size="sm"
        pressed={editor.isActive("heading")}
        onPressedChange={() =>
          editor.chain().focus().toggleHeading({ level: 1 }).run()
        }
        disabled={isDisabled}
      >
        <HeadingIcon className="h-4 w-4" />
      </Toggle>
      <Toggle
        size="sm"
        pressed={editor.isActive("bold")}
        onPressedChange={() => editor.chain().focus().toggleBold().run()}
          disabled={isDisabled}
      >
        <BoldIcon className="h-4 w-4 " />
      </Toggle>
      <Toggle
        size="sm"
        pressed={editor.isActive("italic")}
        onPressedChange={() => editor.chain().focus().toggleItalic().run()}
          disabled={isDisabled}
      >
        <ItalicIcon className="h-4 w-4 " />
      </Toggle>
      <Toggle
        size="sm"
        pressed={editor.isActive("strike")}
        onPressedChange={() => editor.chain().focus().toggleStrike().run()}
          disabled={isDisabled}
      >
        <StrikethroughIcon className="h-4 w-4" />
      </Toggle>
      <Toggle
        size="sm"
        pressed={editor.isActive("highlight")}
        onPressedChange={() => editor.chain().focus().toggleHighlight().run()}
        disabled={isDisabled}
      >
        <HighlighterIcon className="h-4 w-4" />
      </Toggle>
      <Separator orientation="vertical" className="w-[1px] h-8" />
      <Toggle
        size="sm"
        pressed={editor.isActive("bulletList")}
        onPressedChange={() => editor.chain().focus().toggleBulletList().run()}
        disabled={isDisabled}
      >
        <ListIcon className="h-4 w-4" />
      </Toggle>
      <Toggle
        size="sm"
        pressed={editor.isActive("orderedList")}
        onPressedChange={() => editor.chain().focus().toggleOrderedList().run()}
          disabled={isDisabled}
      >
        <ListOrderedIcon className="h-4 w-4" />
      </Toggle>
    </div>
  );
};

export default TextEditorToolbar;
