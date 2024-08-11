"use server";
import { auth } from "@/auth";
import { BlogSchema, BlogType } from "@/schemas/blog/BlogSchema";
import db from "@/lib/db";
export const editBlog = async (values: BlogType, id: string) => {
  const { success, data } = BlogSchema.safeParse(values);
  if (!success) {
    return { success: false, message: "invalid field" };
  }
  const session = await auth();
  if (!session || !session.user || !session.user.id) {
    return { success: false, message: "Unauthorized" };
  }
  const { title, categories, content } = data;
  const existBlog = await db.post.findUnique({ where: { id } });
  if (existBlog) {
    const blog = await db.post.update({
      where: { id },
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
  } else {
    return { success: false, message: "Post not found" };
  }
};
