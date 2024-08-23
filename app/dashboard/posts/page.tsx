import { Suspense } from "react";
import { getUserPosts, getUserPostsCount } from "@/actions/user/getUserPosts";

import React from "react";
import { AllBlogsLoaderSkelton } from "@/components/blog/AllBlogsLoaderSkeleton";
import PostCardMenu from "@/components/dashboard/posts/PostCardMenu";
import { showDateNative } from "@/lib/utils";

const PostLoading = () => <div>loading posts.....</div>;

const page = async () => {
  const userPostsCount = await getUserPostsCount();
  return (
    <div className="mx-auto max-w-[626px] space-y-6 px-2 pb-14 pt-14 lg:px-0">
      <div className="">
        <h2 className="text-xl font-bold text-muted-foreground">
          Your posts: {userPostsCount}
        </h2>
      </div>
      <Suspense
        fallback={<AllBlogsLoaderSkelton blogCount={userPostsCount || 0} />}
      >
        <UserBlogList />
      </Suspense>
    </div>
  );
};
const UserBlogList = async () => {
  const userPosts = await getUserPosts();
  return (
    <div>
      {userPosts.success === false ? (
        <p>{userPosts.message}</p>
      ) : (
        <div className="space-y-4">
          {userPosts.posts?.map((post) => (
            <div
              key={post.id}
              className="flex items-center justify-between rounded-md border border-secondary px-4 py-2"
            >
              <div className="space-y-1 ">
              <h1 className="text-primary ">{post.title}</h1>
              <p className="text-xs text-muted-foreground">
                  {showDateNative(post.createdAt)}
                </p>
              </div>

              {/* even admin can posts */}
              <PostCardMenu id={post.id} isAdmin={false} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default page;
