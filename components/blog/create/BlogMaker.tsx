"use client";
import React, { useEffect, useState, useTransition } from "react";
import TextEditor from "../TextEditor";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { BlogSchema, BlogType, CategoryType } from "@/schemas/blog/BlogSchema";
import { AutosizeTextarea } from "@/components/ui/AutoSizeTextarea";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import FormError from "@/components/auth/FormError";
import FormSuccess from "@/components/auth/FormSuccess";
import FormWarning from "@/components/auth/FormWarning";
import { navigate } from "@/lib/navigate";
import InputCategory from "../InputCategory";
import { useToast } from "@/components/ui/use-toast";
import PreviewBlog from "../PreviewBlog";
import { createBlog } from "@/actions/blog/createBlog";
import { editBlog } from "@/actions/blog/editBlog";

type BlogMakerProps = {
  type: "create" | "edit";
  existingData?: BlogType;
};

const BlogMaker = ({ type = "create", existingData }: BlogMakerProps) => {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");
  const [warning, setWarning] = useState<string>("");
  const [preview, setPreview] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<CategoryType[]>(
    existingData?.categories || [],
  );

  const form = useForm<BlogType>({
    resolver: zodResolver(BlogSchema),
    defaultValues: {
      title: existingData?.title || "",
      content: existingData?.content || "",
      categories: existingData?.categories || [],
    },
  });
  const previewTitle = form.watch("title");
  const previewContent = form.watch("content");

  function onSubmit(values: BlogType) {
    setSuccess("");
    setError("");
    setWarning("");
    startTransition(async () => {
      let result;
      if (type === "create") {
        result = await createBlog(values);
      } else if (type === "edit") {
        result = await editBlog(values, existingData?.id!);
      }
      if (result?.success === true) {
        setSuccess(result.message);
        navigate("/dashboard/posts");
      } else if (result?.success === false) {
        setError(result.message);
      }
    });
    // toast({
    //   title: "You submitted the following values:",
    //   description: (
    //     <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
    //       <code className="text-white">{JSON.stringify(values, null, 2)}</code>
    //     </pre>
    //   ),
    // });
  }

  return (
    <div className="space-y-8 px-6 lg:px-0" suppressHydrationWarning>
      <div className="flex items-end justify-end gap-2">
        <Button
          variant={"outline"}
          className="border-primary/20 text-primary hover:text-primary/80"
          size={"sm"}
          onClick={() => setPreview((prev) => !prev)}
        >
          {preview ? (
            <EyeOffIcon className="h-4 w-4" />
          ) : (
            <EyeIcon className="h-4 w-4" />
          )}
        </Button>
      </div>
      {!preview ? (
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4 pb-2"
          >
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <AutosizeTextarea
                      placeholder="Title"
                      {...field}
                      className="resize-none rounded-none border-none p-0 text-4xl font-bold leading-relaxed text-primary focus-visible:outline-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                      disabled={isPending}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="categories"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <InputCategory
                    isDisabled={isPending}
                      form={form}
                      postId={existingData?.id}
                      selectedCategory={selectedCategory}
                      setSelectedCategory={setSelectedCategory}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="content"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <TextEditor {...field} isPending={isPending} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormError message={error} />
            <FormSuccess message={success} />
            <FormWarning message={warning} />
            <Button type="submit" disabled={isPending}>
              Submit
            </Button>
          </form>
        </Form>
      ) : (
        <PreviewBlog
          title={previewTitle}
          content={previewContent}
          categories={selectedCategory}
        />
      )}
    </div>
  );
};

export default BlogMaker;
