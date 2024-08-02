import { z } from "zod";

export const newBlogSchema = z.object({
  title: z
    .string()
    .min(2, "Title must be atleast 2 characters long")
    .max(100, "Title is too big to handle")
    .trim(),
  content: z
    .string()
    .min(5, "content must be atleast 5 characters")
    .max(
      2500,
      "content is too big to handle, pleae keep it under 2500 characters"
    )
    .trim(),
  categories: z
    .array(z.string())
    .min(1, "Select at least one category")
    .max(2, "Max Categories reached"),
});

export type newBlogType = z.infer<typeof newBlogSchema>;
export const categoriesArray = [
  "food",
  "economics",
  "tech",
  "fitness",
  "travel",
];


