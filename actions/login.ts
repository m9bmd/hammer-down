"use server";

import { LoginInputType, LoginSchema } from "@/schemas/auth/loginSchema";
import { z } from "zod";
import { signIn } from "@/auth";
import { defaultLoginRedirect } from "@/routes/routes";
import { AuthError } from "next-auth";
import { getUserByEmail } from "@/lib/db_utils/users";
import { error } from "console";
import { generateVerificationToken } from "@/lib/tokens";
import { sendVerificationEmail } from "@/lib/mail";
export const login = async (data: LoginInputType) => {
  const { success, data: parsedData } = LoginSchema.safeParse(data);
  if (!success) {
    return { error: "Invalid fields!" };
  }
  const { email, password } = data;
  const existingUser = await getUserByEmail(email);
  if (!existingUser || !existingUser.email || !existingUser.password) {
    return { error: "email does not exist" };
  }
  if (!existingUser.emailVerified) {
    const verificationToken = await generateVerificationToken(
      existingUser.email
    );
    await sendVerificationEmail(
      verificationToken.email,
      verificationToken.token
    );
    return { success: "Verification email sent" };
  }
  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: defaultLoginRedirect,
    });
    // console.log(signInObject);
  } catch (error) {
    if (error instanceof AuthError) {
      // console.log("this is error", error.type);
      switch (error.type) {
        case "CallbackRouteError":
          return { error: "Invalid credentials" };
        case "CredentialsSignin":
          return { error: "Invalid credentials" };
        case "AccessDenied":
          return { warning: "please verify your email" };
        default:
          return { error: "Something went wrong" };
      }
    }
    throw error;
  }
  return { success: "login successfully" };
};
