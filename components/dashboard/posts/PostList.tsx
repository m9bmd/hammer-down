import { Category, Post } from "@prisma/client";
import PostCard from "./PostCard";

type PostWithCategories = Post & {
  categories: Category[];
};

type PostListProps = {
  posts: PostWithCategories[] | undefined;
};
const PostList = ({ posts }: PostListProps) => {
  return (
    <div className="space-y-4">
      {posts?.map((post) => <PostCard key={post.id} post={post} />)}
    </div>
  );
};

export default PostList;
