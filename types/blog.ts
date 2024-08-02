import { Category, Post } from "@prisma/client";

export type blogType = {
  id: string;
  title: string;
  content: string;
  likeCount: number;
  author: string;
  category: string;
  createdAt: string;
  updatedAt: string;
};
export type PostWithCategories = Post & {
  categories: Category[];
};
