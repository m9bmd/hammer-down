"use server";

import db from "@/lib/db";
import { revalidatePath } from "next/cache";

export const deleteBlog = async (id: string) => {
  try {
    const res = await db.post.delete({
      where: { id },
    });
    console.log(res)
    revalidatePath("/dashboard/posts");
    return { success: true, message: "Successfully deleted the post" };
  } catch (error) {
    console.log(error)
    return {
      
      success: false,
      message: "Something went wrong while deleting the post ⊙﹏⊙∥",
    };
  }
};
