import { z } from "zod";

export const ResetSchema = z.object({
  email: z.string().email({
    message: "email is requried",
  }),
});
export type ResetSchemaType = z.infer<typeof ResetSchema>;

export const ResetPasswordSchema = z.object({
  password: z
    .string()
    .min(6, { message: "password must be atleast 6 characters" }),
});

export type ResetPasswordType = z.infer<typeof ResetPasswordSchema>;
