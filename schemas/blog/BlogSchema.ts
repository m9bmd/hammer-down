import { z } from "zod";
const CategorySchema = z.object({
  id: z.string().optional(),
  name: z.string(),
});

export type CategoryType = z.infer<typeof CategorySchema>;
export const BlogSchema = z.object({
  id: z.string().optional(),
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
      "content is too big to handle, pleae keep it under 2500 characters",
    )
    .trim(),
  categories: z
    .array(CategorySchema)
    .min(1, "Select at least one category")
    .max(2, "Max Categories reached"),
});

export type BlogType = z.infer<typeof BlogSchema>;
export const categoriesArray = [
  "food",
  "economics",
  "tech",
  "fitness",
  "travel",
];
