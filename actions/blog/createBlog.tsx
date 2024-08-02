"use server"
import { auth } from "@/auth";
import { newBlogSchema, newBlogType } from "@/schemas/blog/newBlogSchema";
import db from "@/lib/db";
export const createBlog = async (values: newBlogType) => {
  const { success, data } = newBlogSchema.safeParse(values);
  if (!success) {
    return { error: "invalid field" };
  }
  const session = await auth()
  if (!session || !session.user || !session.user.id) {
    return { error: "Unauthorized" };
  }
  const {title, categories, content} = data
  const blog = await db.post.create({
    data: {
      title,
      content,
      author: {
        connect:{id:session.user.id}
      },
      categories: {
        connectOrCreate: categories.map(category => ({
          where: {name: category},
          create: {name:category}
        }))
      }
    },
    include: {
      categories:true
    }
  })
  console.log(blog)
  return { success: "Your post has been created" };
};
