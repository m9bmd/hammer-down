import Highlight from "@tiptap/extension-highlight";
import StarterKit from "@tiptap/starter-kit";
import Heading from "@tiptap/extension-heading";
export const blogExtensions = [
  StarterKit.configure({
    heading: false,
    orderedList: {
      HTMLAttributes: {
        class: "list-decimal pl-8 py-2",
      },
    },
    bulletList: {
      HTMLAttributes: {
        class: "list-disc pl-8",
      },
    },
  }),
  Highlight.configure({
    multicolor: false,
    HTMLAttributes: {
      class: "bg-blue-500/15 text-blue-500 px-1 rounded-sm",
    },
  }),
  Heading.configure({
    levels: [1],
    HTMLAttributes: {
      class: "my-2 text-2xl font-bold",
    },
  }),
];
