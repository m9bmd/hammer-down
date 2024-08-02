import { z } from "zod";
import { newBlogSchema } from "./newBlogSchema";
import { Category } from "@prisma/client";

const CategorySchema = z.object({
  id: z.string().optional(),
  name: z.string(),

});

export const editBlogSchema = newBlogSchema.omit({ categories: true }).extend({
  categories: z
    .array(z.string())
    .min(1, "Select at least one category")
    .max(2, "Max Categories reached"),
});

export type EditBlogType = z.infer<typeof editBlogSchema>;
