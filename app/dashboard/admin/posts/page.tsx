import { getAllBlogsAdmin, getAllBlogsCount } from "@/actions/blog/getBlog";
import { AllBlogsLoaderSkelton } from "@/components/blog/AllBlogsLoaderSkeleton";
import PostCardMenu from "@/components/dashboard/posts/PostCardMenu";
import { getCurrentUserRole } from "@/lib/user_utils";
import { showDateNative } from "@/lib/utils";
import React, { Suspense } from "react";

const page = async () => {
  const postsCount = await getAllBlogsCount()
  return (
    <div className="space-y-6 pb-24">
      <h1 className="text-2xl font-bold text-muted-foreground">All posts: {postsCount}</h1>
      <Suspense fallback={<AllBlogsLoaderSkelton blogCount={postsCount || 0} />}>
        <AllBlogs />
      </Suspense>
    </div>
  );
};

export default page;

const AllBlogs = async () => {
  const userRole = await getCurrentUserRole();
  const isAdmin = userRole === "ADMIN" ? true : false;
  const posts = await getAllBlogsAdmin();
  return (
    <div>
      {posts !== null ? (
        <div className="space-y-6">
          {posts.map((post) => (
            <div
              key={post.id}
              className="flex justify-between rounded-md border border-secondary px-4 py-2"
            >
              <div className="space-y-1">
                <h1 className="text-lg text-primary">{post.title}</h1>
                <p className="text-sm text-muted-foreground">
                  by {post.author.name}
                </p>
                <p className="text-xs text-muted-foreground">
                  {showDateNative(post.createdAt)}
                </p>
              </div>
              <PostCardMenu id={post.id} isAdmin={isAdmin} />
            </div>
          ))}
        </div>
      ) : (
        <p>No posts found</p>
      )}
    </div>
  );
};
