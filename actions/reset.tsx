"use server";
import {
  ResetSchemaType,
  ResetSchema,
  ResetPasswordType,
  ResetPasswordSchema,
} from "@/schemas/auth/reset";
import { getUserByEmail } from "@/lib/db_utils/users";
import { sendPasswordResetEmail } from "@/lib/mail";
import { generatePasswordResetToken } from "@/lib/tokens";
import db from "@/lib/db";
import { error } from "console";
import bcryptjs from "bcryptjs";
export const reset = async (values: ResetSchemaType) => {
  const { success, data } = ResetSchema.safeParse(values);
  if (!success) {
    return { error: "invalid email" };
  }
  const { email } = data;
  const existingUser = await getUserByEmail(email);
  if (!existingUser) {
    return { error: "Email not found" };
  }
  const passwordResetToken = await generatePasswordResetToken(email);
  await sendPasswordResetEmail(
    passwordResetToken.email,
    passwordResetToken.token
  );

  return { success: "reset email sent" };
};
export const resetPassword = async (
  values: ResetPasswordType,
  token: string
) => {
  if (!token) {
    return { error: "missing token" };
  }
  const { success, data } = ResetPasswordSchema.safeParse(values);
  if (!success) {
    return { error: "invalid credentials" };
  }
  const { password } = data;
  const existingToken = await db.passwordResetToken.findUnique({
    where: { token: token },
  });
  if (!existingToken) {
    return { error: "Inavlid action" };
  }
  const tokenExpired = new Date(existingToken.expires) < new Date();
  if (tokenExpired) {
    return { error: "token expired" };
  }
  const existingUser = await getUserByEmail(existingToken.email)
  if(!existingUser) {
    return {error: "email does not exist"}
  }
  const hashedPassword = await bcryptjs.hash(password, 10);

  await db.user.update({
    where: { email: existingToken.email },
    data: {
      password: hashedPassword,
    },
  });
  await db.passwordResetToken.delete({
    where: {id:existingToken.id}
  })
  return { success: "password reset successfully" };
};
