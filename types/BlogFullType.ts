import { CategoryType } from "@/schemas/blog/BlogSchema";

export type author = {
  id: string;
  name: string | null;
};
export type comment = {
  content: string;
};
export type BlogFullType = {
  id: string;
  title: string;
  content: string;
  hammerCount: number;
  createdAt: Date;
  updatedAt: Date;
  author: author;
  categories: CategoryType[];
  comments: comment[];
};
