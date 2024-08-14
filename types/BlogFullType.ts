import { CategoryType } from "@/schemas/blog/BlogSchema";

export type author = {
  id: string;
  image?:string | null
  name: string | null;
};
export type comment = {
  id:string
  content: string;
  User:author
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
