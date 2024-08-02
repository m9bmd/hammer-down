"use server";
import { auth } from "@/auth";
import db from "@/lib/db";

export const getUserPosts = async () => {
  const session = await auth();
  if (!session || !session.user || !session.user.id) {
    return { success: false, message: "Unauthorized" };
  }
  try {
    const posts = await db.post.findMany({
      where: {
        authorId: session.user.id,
      },
      include: {
        categories: true,
      },
    });
    if (!posts) {
      return { success: false, message: "No posts found" };
    }
    return { success: true, posts };
  } catch (error) {
    return { success: false, message: "error while getting your posts" };
  }
};
