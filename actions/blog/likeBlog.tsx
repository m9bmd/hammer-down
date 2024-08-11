"use server";

import { auth } from "@/auth";
import { getBlog } from "./getBlog";
import db from "@/lib/db";
import { revalidatePath } from "next/cache";

export type likeBlogProps = {
  postId: string;
  pathName: string;
};
export const likeBlog = async ({ postId, pathName }: likeBlogProps) => {
  const session = await auth();
  if (!session || !session.user || !session.user.id) {
    return { success: false, message: "You need to login before you like" };
  }

  const blog = await getBlog(postId);
  if (!blog) {
    return {
      success: false,
      message:
        "Oh lord how's this possible, post you liked doesn't exist ⊙﹏⊙∥",
    };
  }

  const existingHammer = await db.hammer.findUnique({
    where: {
      userId_postId: {
        userId: session.user.id,
        postId: postId,
      },
    },
  });

  if (existingHammer) {
    await db.hammer.delete({
      where: {
        id: existingHammer.id,
      },
    });

    await db.post.update({
      where: { id: postId },
      data: {
        hammerCount: { decrement: 1 },
      },
    });
    revalidatePath(pathName);
    return { success: true, message: "unhammered" };
  }

  await db.hammer.create({
    data: {
      userId: session.user.id,
      postId: postId,
    },
  });

  await db.post.update({
    where: { id: postId },
    data: {
      hammerCount: { increment: 1 },
    },
  });
  revalidatePath(pathName);
  return { success: true, message: "hammered" };
};

export const hasHammeredBlog = async (postId: string) => {
  const session = await auth();
  const res = await db.post.findFirst({
    where: { id: postId },
    select: { hammers: { select: { User: true } } },
  });
  if (res) {
    const hammeredUser = res.hammers.some(
      (hammer) => hammer.User.id === session?.user.id,
    );
    if (hammeredUser) {
      return true;
    }
  }
  return false;
};
