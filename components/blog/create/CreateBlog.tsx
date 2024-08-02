"use client";
import React, { useEffect, useState, useTransition } from "react";
import TextEditor from "../TextEditor";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import {
  categoriesArray,
  newBlogSchema,
  newBlogType,
} from "@/schemas/blog/newBlogSchema";
import { AutosizeTextarea } from "@/components/ui/AutoSizeTextarea";
import { EyeIcon, EyeOffIcon, XIcon } from "lucide-react";
import Blog from "../Blog";
import { Input } from "@/components/ui/input";
import { SessionProvider } from "next-auth/react";
import { createBlog } from "@/actions/blog/createBlog";
import FormError from "@/components/auth/FormError";
import FormSuccess from "@/components/auth/FormSuccess";
import FormWarning from "@/components/auth/FormWarning";
import { navigate } from "@/lib/navigate";

const CreateBlog = () => {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");
  const [warning, setWarning] = useState<string>("");
  const [preview, setPreview] = useState(false);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [inputCategoryValue, setInputCategoryValue] = useState("");
  const form = useForm<newBlogType>({
    resolver: zodResolver(newBlogSchema),
    defaultValues: {
      title: "",
      content: "",
      categories: [],
    },
  });
  const previewTitle = form.watch("title");
  const previewContent = form.watch("content");

  useEffect(() => {
    if (inputCategoryValue.length === 0) {
      setSuggestions([]);
    } else {
      autoCompleteCategory();
    }
  }, [inputCategoryValue]);
  useEffect(() => {
    form.setValue("categories", selectedCategories);
  }, [selectedCategories]);

  function autoCompleteCategory() {
    const filteredCategories = categoriesArray.filter((category) =>
      category.toLowerCase().includes(inputCategoryValue.toLowerCase()),
    );
    if (filteredCategories.length > 0) {
      setSuggestions(filteredCategories);
    } else {
      setSuggestions([inputCategoryValue.toLowerCase()]);
    }
  }
  function handleSuggestionClick(value: string) {
    if (selectedCategories.length >= 2) {
      form.setError("categories", {
        type: "custom",
        message: "Only two categories per post",
      });
    } else {
      if (selectedCategories[0] === value) {
        form.setError("categories", {
          type: "custom",
          message: "Oops! try picking different categories",
        });
        setInputCategoryValue("");
        setSuggestions([]);
      } else {
        form.clearErrors("categories");
        setSelectedCategories((prev) => [...prev, value]);
        setInputCategoryValue("");
        setSuggestions([]);
      }
    }
  }
  function handleSuggestionClickDelete(value: string) {
    const filteredSuggestions = selectedCategories.filter(
      (category) => category !== value,
    );
    setSelectedCategories(filteredSuggestions);
  }
  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter") {
      event.preventDefault();
      if (suggestions.length > 0) {
        handleSuggestionClick(suggestions[0]);
      }
    }
  }

  function onSubmit(values: newBlogType) {
    setSuccess("");
    setError("");
    setWarning("");
    startTransition(async () => {
      // await new Promise((resolve) => setTimeout(resolve, 5000));
      const { error, success } = await createBlog(values);
      if (success) {
        setSuccess(success);
        navigate("/");
      } else if (error) {
        setError(error);
      }
    });
    // console.log(values);
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
    <div className="space-y-8 px-6 lg:px-0">
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
                    <div className="flex flex-col gap-2">
                      <ul className="flex gap-2">
                        {selectedCategories.length > 0 &&
                          selectedCategories.map((category, index) => (
                            <div
                              key={index}
                              className={buttonVariants({
                                variant: "secondary",
                                size: "sm",
                                className: "space-x-1",
                              })}
                            >
                              <span>{category}</span>
                              <Button
                                type="button"
                                size={"icon"}
                                className="h-4 w-4 bg-transparent text-destructive hover:bg-transparent"
                                disabled={isPending}
                                onClick={() =>
                                  handleSuggestionClickDelete(category)
                                }
                              >
                                <XIcon className="h-4 w-4" />
                              </Button>
                            </div>
                          ))}
                        <li>
                          {selectedCategories.length === 2 ? null : (
                            <Input
                              placeholder="add upto 2 category"
                              className="border-0 p-0 text-base focus-visible:outline-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                              value={inputCategoryValue}
                              onChange={(e) =>
                                setInputCategoryValue(e.target.value)
                              }
                              onKeyDown={handleKeyDown}
                            />
                          )}
                        </li>
                      </ul>

                      {suggestions.length > 0 && (
                        <div className="flex flex-col gap-2">
                          {suggestions.map((suggestion, index) => (
                            <Button
                              type="button"
                              key={index}
                              className="w-fit"
                              variant={"secondary"}
                              size={"sm"}
                              onClick={() => handleSuggestionClick(suggestion)}
                            >
                              {suggestion}
                            </Button>
                          ))}
                        </div>
                      )}
                    </div>
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
        <Blog
          title={previewTitle}
          content={previewContent}
          categories={selectedCategories}
        />
      )}
    </div>
  );
};

export default CreateBlog;
