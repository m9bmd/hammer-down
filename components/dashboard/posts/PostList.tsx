import { Category, Post } from "@prisma/client";
import PostCard from "./PostCard";
import { getUserPosts } from "@/actions/user/getUserPosts";

type PostWithCategories = Post & {
  categories: Category[];
};

type PostListProps = {
  posts: PostWithCategories[] | undefined;
  isAdmin?: Boolean 
};
const PostList = async ({ posts,isAdmin }: PostListProps) => {
  return (
    <div className="space-y-4 pb-24">
      {posts?.map((post) => <PostCard key={post.id} post={post} isAdmin={isAdmin}/>)}
    </div>
  );
};

export default PostList;
