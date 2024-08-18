import { getAllBlogs } from "@/actions/blog/getBlog";
import PostList from "@/components/dashboard/posts/PostList";
import { getCurrentUserRole } from "@/lib/auth";
import { redirect } from "next/navigation";
import React, { Suspense, use } from "react";

const page = async () => {
  const userRole = await getCurrentUserRole()
  const isAdmin = userRole === "ADMIN" ? true : false

  const res = await getAllBlogs();
  const PostLoading = () => <div>loading posts.....</div>;

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-muted-foreground">All posts</h1>
      <Suspense fallback={<PostLoading />}>
        {res.success ? (
          <PostList posts={res.posts} isAdmin={isAdmin}/>
        ) : (
          <div>{res.message}</div>
        )}
      </Suspense>
    </div>
  );
};

export default page;
