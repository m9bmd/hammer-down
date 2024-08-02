import { Suspense } from "react";
import { getUserPosts } from "@/actions/user/getUserPosts";
import PostCard from "@/components/dashboard/posts/PostCard";
import React from "react";
import PostList from "@/components/dashboard/posts/PostList";

const PostLoading = () => <div>loading posts.....</div>;

const page = async () => {
  const res = await getUserPosts();
  return (
    <div className="flex flex-col items-center gap-6 pt-10">
      <div className="self-start md:mx-auto md:w-[520px]">
        <h1 className="text-2xl font-bold text-muted-foreground">
          Your posts: {`${res.posts?.length}`}
        </h1>
      </div>
      <Suspense fallback={<PostLoading />}>
        {res.success ? (
          <PostList posts={res.posts} />
        ) : (
          <div>{res.message}</div>
        )}
      </Suspense>
    </div>
  );
};

export default page;
