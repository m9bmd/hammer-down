import { Suspense } from "react";
import { getUserPosts } from "@/actions/user/getUserPosts";

import React from "react";
import PostList from "@/components/dashboard/posts/PostList";

const PostLoading = () => <div>loading posts.....</div>;

const page = async () => {
  const res = await getUserPosts();
  return (
    <div className="mx-auto flex max-w-[640px] flex-col gap-4 pt-12">
      <div className="w-full">
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
