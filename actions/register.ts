"use server";

import {
  RegisterInputType,
  RegisterSchema,
} from "@/schemas/auth/registerSchema";
import bcryptjs from "bcryptjs";
import db from "@/lib/db";
import { getUserByEmail } from "@/lib/db_utils/users";
import { navigate } from "@/lib/navigate";
import { generateVerificationToken } from "@/lib/tokens";
import { sendVerificationEmail } from "@/lib/mail";
export const register = async (data: RegisterInputType) => {
  const { success, data: validatedData } = RegisterSchema.safeParse(data);
  if (!success) {
    return { error: "Something went wrong" };
  }

  const { name, password, email } = validatedData;
  const hashedPassword = await bcryptjs.hash(password, 10);
  const existingUser = await getUserByEmail(email);
  if (existingUser) {
    return { error: "email already in use" };
  }
  // console.log("look at the values: ",username, hashedPassword, email);
  try {
    await db.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });
    // const verificationToken = await generateVerificationToken(email);
    // await sendVerificationEmail(
    //   verificationToken.email,
    //   verificationToken.token
    // );
    return { success: "Account created successfully" };
    // navigate("/")
  } catch (error) {
    // console.log(error);
    return { error: "something happened from my side" };
  }
};
