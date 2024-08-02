"use server";

import db from "@/lib/db";

export const getBlog = async (id: string) => {
  try {
    const post = await db.post.findUnique({
      where: { id: id },
      include: {
        categories: true,
      },
    });
    if (!post) {
      return { success: false, message: "Post not found :/" };
    }
    return { success: true, message: "Post found", post };
  } catch (error) {
    return {
      success: false,
      message: "Something went bad while fetching post ⊙﹏⊙∥",
    };
  }
};
