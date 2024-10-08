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
        author: { select: { id: true, name: true, image: true } },
        categories: true,
        hammers: true,
        comments: {
          include: {
            User: {
              select: {
                id: true,
                name: true,
                image: true,
              },
            },
          },
        },
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
      orderBy: {
        createdAt: "desc",
      },
      include: {
        author: { select: { id: true, name: true } },
        categories: true,
        hammers: true,
        comments: {
          include: {
            User: {
              select: {
                id: true,
                name: true,
                image: true,
              },
            },
          },
        },
      },
      cacheStrategy: {
        ttl: 60,
        swr: 10,
      },
    });
    return { success: true, message: "Successfully fetched all posts", posts };
  } catch (error) {
    console.log(error);
    return { success: false, message: "Something went wrong ⊙﹏⊙∥" };
  }
};
export const getAllBlogsCount = async () => {
  try {
    const postsLength = await db.post.count();
    return postsLength;
  } catch (error) {
    return null;
  }
};
export const getAllBlogsAdmin = async () => {
  try {
    const posts = await db.post.findMany({
      select: {
        id: true,
        title: true,
        createdAt: true,
        author: {
          select: { id: true, name: true },
        },
      },
      orderBy: {
        createdAt:"desc"
      }
    });
    return posts;
  } catch (error) {
    return null;
  }
};
