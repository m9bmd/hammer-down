"use server";
import db from "@/lib/db";
import { getUserByEmail } from "@/lib/db_utils/users";
import {
  getVerificationTokenByEmail,
  getVerificationTokenByToken,
} from "@/lib/db_utils/verificationToken";

export const verifyToken = async (token: string) => {
  const existingToken = await getVerificationTokenByToken(token);
  console.log(existingToken);
  if (!existingToken) {
    return { error: "token does not exist." };
  }
  const hasExpired = new Date(existingToken.expires) < new Date();
  if (hasExpired) {
    return { error: "token has expired." };
  }
  const existingUser = await getUserByEmail(existingToken.email);
  if (!existingUser) {
    return { error: "email does not exist" };
  }
  await db.user.update({
    where: { email: existingToken.email },
    data: {
      emailVerified: new Date(),
      email: existingToken.email,
    },
  });
  await db.verificationToken.delete({
    where: { id: existingToken.id },
  });
  return { success: "Token verified" };


};
