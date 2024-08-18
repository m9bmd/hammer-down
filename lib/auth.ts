"use server";

import { auth } from "@/auth";

export const getCurrentUser = async () => {
  try {
    const session = await auth();
    if (session) {
      return session.user;
    }
    return null;
  } catch (error) {
    return null;
  }
};
export const getCurrentUserRole = async () => {
  try {
    const session = await auth();
    if (session) {
      return session.user.role;
    }
    return null;
  } catch (error) {
    return null;
  }
};
