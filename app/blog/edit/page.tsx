import React from "react";
import BlogMaker from "@/components/blog/create/BlogMaker";
import { getBlog } from "@/actions/blog/getBlog";

const page = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const id = searchParams.id;
  let res;
  if (id) {
    res = await getBlog(id as string);
    if (res.success === false) {
      return (
        <div className="mx-auto max-w-[42rem] pt-24">
          <p className="text-center text-4xl text-destructive">{res.message}</p>
        </div>
      );
    }
  }
  return (
    <div className="mx-auto max-w-[42rem] pt-24">
      <BlogMaker type="edit" existingData={res?.post} />
    </div>
  );
};

export default page;
