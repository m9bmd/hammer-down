"use server";
import { auth } from "@/auth";
import { BlogSchema, BlogType } from "@/schemas/blog/BlogSchema";
import db from "@/lib/db";
export const createBlog = async (values: BlogType) => {
  const { success, data } = BlogSchema.safeParse(values);
  if (!success) {
    return { success: false, message: "invalid field" };
  }
  const session = await auth();
  if (!session || !session.user || !session.user.id) {
    return { success: false, message: "Unauthorized" };
  }
  const { title, categories, content } = data;
  const blog = await db.post.create({
    data: {
      title,
      content,
      author: {
        connect: { id: session.user.id },
      },
      categories: {
        connectOrCreate: categories.map((category) => ({
          where: { name: category.name },
          create: { name: category.name },
        })),
      },
    },
    include: {
      categories: true,
    },
  });
  // console.log(blog);
  return { success: true, message: "Your post has been created" };
};
