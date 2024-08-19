"use client";
import { CommentSchema, CommentType } from "@/schemas/blog/CommentsSchema";
import { comment } from "@/types/BlogFullType";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Postcomment } from "@/actions/blog/createComment";
import { usePathname } from "next/navigation";
const Comments = ({
  comments,
  blogId,
}: {
  comments: comment[];
  blogId: string;
}) => {
  // console.log(comments)
  const pathName = usePathname();
  const form = useForm<CommentType>({
    resolver: zodResolver(CommentSchema),
    defaultValues: {
      content: "",
    },
  });
  const onSubmit = async (values: CommentType) => {
    Postcomment({ content: values.content, blogId, pathName });
    form.reset()
    console.log(values);
  };
  return (
    <div className="mt-16 flex flex-col gap-6 border-t pt-4">
      <p className="text-2xl font-bold text-primary">Comments</p>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="flex justify-between gap-4">
            <FormField
              control={form.control}
              name="content"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Input placeholder="" {...field} className="" />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">comment</Button>
          </div>
        </form>
      </Form>
      {comments.length === 0 ? (
        <div>
          <p className="text-primary"> {"(⌐■_■)"} No comments so far! </p>
        </div>
      ) : (
        comments.map((comment) => (
          <div className="flex flex-col gap-4 border-2 px-4 py-2 rounded-md " key={comment.id}>
            <p className="w-fit border-b-2 text-primary text-sm">{comment.User.name}</p>

            <div className=" ">
              <p className="text-base text-[#333533]">{comment.content}</p>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Comments;
