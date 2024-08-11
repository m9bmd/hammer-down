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
  } catch (e) {
    return {
      success: false,
      message: "Something went bad while fetching post ⊙﹏⊙∥",
    };
  }
};
export const getBlogByTitle = async (title: string) => {
  try {
    const post = await db.post.findUnique({
      where: { title: title },
      include: {
        author: { select: { id:true, name: true } },
        categories: true,
        hammers: true,
        comments: true,
      },
    });
    if (!post) {
      return { success: false, message: "Post not found :/" };
    }
    return { success: true, message: "Post found", post };
  } catch (e) {
    console.log(e);
    return {
      success: false,
      message: "Something went bad while fetching post ⊙﹏⊙∥",
    };
  }
};
export const getAllBlogs = async () => {
  try {
    const posts = await db.post.findMany({
      include: {
        author: { select: { id:true, name: true } },
        categories: true,
        hammers: true,
        comments: true,
      },
    });
    return { success: true, message: "Successfully fetched all posts", posts };
  } catch (error) {
    return { success: false, message: "Something went wrong ⊙﹏⊙∥" };
  }
};
