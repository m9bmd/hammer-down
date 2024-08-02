import { z } from "zod";

export const RegisterSchema = z.object({
  name: z
    .string()
    .min(2, { message: "username must be atleast 2 characters" }),
  email: z.string().email(),
  password: z
    .string()
    .min(6, { message: "Password must be atleast 6 characters" }),
});

export type RegisterInputType = z.infer<typeof RegisterSchema>;
