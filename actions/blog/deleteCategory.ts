"use server";

import db from "@/lib/db";

type deleteCategoryProps = {
  postId: string;
  categoryId: string;
};
export const deleteCategory = async ({
  postId,
  categoryId,
}: deleteCategoryProps) => {
  try {
    await db.post.update({
      where: { id: postId },
      data: {
        categories: {
          disconnect: { id: categoryId },
        },
      },
    });
    return { success: true, message: "deleted category from the post" };
  } catch (error) {
    return { success: false, message: "Something went wrong ⊙﹏⊙∥" };
  }
};
