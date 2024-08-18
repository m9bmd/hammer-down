"use server";

import db from "@/lib/db";

export const getAllUsers = async () => {
  try {
    const users = db.user.findMany({
      select: {
        id:true,
        name: true,
        email: true,
      },
    });
    return users
  } catch (error) {
    return null;
  }
};
