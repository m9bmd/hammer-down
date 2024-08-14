"use server";

import { auth } from "@/auth";
import db from "@/lib/db";
import { revalidatePath } from "next/cache";

export const Postcomment = async ({
  blogId,
  content,
  pathName,
}: {
  blogId: string;
  content: string;
  pathName: string;
}) => {
  const session = await auth();

  try {
    const res = await db.post.update({
      where: { id: blogId },
      data: {
        comments: {
          create: {
            content: content,
            User: {
              connect: {
                id: session?.user.id,
              },
            },
          },
        },
      },
      include: {
        comments: true,
      },
    });
    revalidatePath(pathName);
  } catch (error) {}
};
