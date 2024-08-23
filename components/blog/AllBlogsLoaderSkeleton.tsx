import { Skeleton } from "../ui/skeleton";

export function AllBlogsLoaderSkelton({ blogCount }: { blogCount: number }) {
  if (blogCount === 0) {
    return null;
  }
  return (
    <>
      {[...Array(blogCount)].map((_, index) => (
        <div key={index} className="mb-8 flex flex-col gap-4">
          <Skeleton className="h-[40px] w-full rounded-md bg-accent" />
          <div className="flex gap-4">
            <Skeleton className="h-[20px] w-[80px] rounded-md bg-accent" />
            <Skeleton className="h-[20px] w-[80px] rounded-md bg-accent" />
          </div>
          <Skeleton className="h-[20px] w-full rounded-md bg-accent" />
          <div className="flex justify-between">
            <Skeleton className="h-[40px] w-[100px] rounded-md bg-accent" />
            <Skeleton className="h-[40px] w-[100px] rounded-full bg-accent" />
          </div>
        </div>
      ))}
    </>
  );
}
