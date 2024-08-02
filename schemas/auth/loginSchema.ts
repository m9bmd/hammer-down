import { z } from "zod";

export const LoginSchema = z.object({
  email: z.string().email({
    message: "email is requried",
  }),
  password: z.string().min(1, { message: "password is required" }),
});

export type LoginInputType = z.infer<typeof LoginSchema>;
