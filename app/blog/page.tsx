import { getBlogByTitle } from "@/actions/blog/getBlog";
import { hasHammeredBlog } from "@/actions/blog/likeBlog";
import Blog from "@/components/blog/Blog";
import Comments from "@/components/blog/Comments";
import { Skeleton } from "@/components/ui/skeleton";
import { Input } from "postcss";
import React, { Suspense } from "react";

const page = async ({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const title = searchParams.title as string;
  // console.log(blog);
  return (
    <div className="px-6 pb-8 pt-24 lg:mx-auto lg:w-[800px] lg:px-0">
      {/* <BlogLoaderSkeleton/> */}
      <Suspense fallback={<BlogLoaderSkeleton />}>
        <BlogContent title={title} />
      </Suspense>
    </div>
  );
};

export default page;

const BlogContent = async ({ title }: { title: string }) => {
  const blog = await getBlogByTitle(title.replaceAll("-", " "));
  const hasLiked = await hasHammeredBlog(blog.post?.id as string);
  return blog.success === true ? (
    <>
      <Blog blog={blog.post!} hasLiked={hasLiked} />
      <Comments comments={blog.post?.comments!} blogId={blog.post?.id!} />
    </>
  ) : null;
};

function BlogLoaderSkeleton({}) {
  return (
    <div className="flex flex-col space-y-6">
      <Skeleton className="h-[20px] w-[60px] bg-accent" />
      <Skeleton className="h-[40px] w-full bg-accent" />
      <div className="flex gap-4">
        <Skeleton className="h-[20px] w-[80px] rounded-md bg-accent" />
        <Skeleton className="h-[20px] w-[80px] rounded-md bg-accent" />
      </div>
      <Skeleton className="h-72 w-full bg-accent" />
      <div className="flex w-full items-center justify-center">
        <Skeleton className="h-20 w-20 rounded-full bg-accent" />
      </div>
      <div className="space-y-4">
        <Skeleton className="h-1 w-full rounded-md bg-accent" />
        <Skeleton className="h-[30px] w-[200px] rounded-md bg-accent" />
        <div className="flex gap-4">
          <Skeleton className="h-[40px] w-full rounded-md bg-accent" />
          <Skeleton className="h-[40px] w-[180px] rounded-md bg-accent" />
        </div>
        <Skeleton className="h-[20px] w-[80px] rounded-md bg-accent" />
        <Skeleton className="h-[20px] w-full rounded-md bg-accent" />
      </div>
    </div>
  );
}
