import { z } from "zod";

export const CommentSchema = z.object({
  content: z
    .string()
    .min(1, "comment must be atleast 1 character")
    .max(50, "Comment too big stop yapping!"),
});

export type CommentType = z.infer<typeof CommentSchema>;
