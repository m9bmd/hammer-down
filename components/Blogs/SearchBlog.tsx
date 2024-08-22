"use client";
import React, { useMemo, useState } from "react";
import BlogCard from "../Blogs/BlogCard";
import { BlogFullType } from "@/types/BlogFullType";
import { Input } from "../ui/input";

const SearchBlog = ({ blogs }: { blogs: BlogFullType[] }) => {
  const [searchQ, setSearchQ] = useState<string>("");

  const filteredItems = useMemo(
    () =>
      blogs.filter(
        ({ title, author, categories }) =>
          title.toLowerCase().includes(searchQ.toLowerCase()) ||
          author.name?.toLowerCase().includes(searchQ.toLowerCase()) ||
          categories.some((category) =>
            category.name.toLowerCase().includes(searchQ.toLowerCase()),
          ),
      ),
    [blogs, searchQ],
  );

  return (
    <div className="flex flex-col gap-6">
      <div className="flex">
        <Input
          placeholder="Search 🔍"
          value={searchQ}
          onChange={(e) => setSearchQ(e.target.value)}
          className="w-fit border-secondary text-primary transition-all duration-300 ease-out focus-visible:flex-1 focus-visible:ring-0 focus-visible:ring-offset-0"
        />
      </div>

      {filteredItems.length > 0 ? (
        filteredItems.map((blog) => <BlogCard key={blog.id} blog={blog} />)
      ) : (
        <>
          <p className="pl-1.5 text-muted-foreground">
            Search the whole database, no match found{" "}
            <span className="font-serif text-lg text-primary">{"(⊙_⊙;)"}</span>
          </p>
        </>
      )}
    </div>
  );
};

export default SearchBlog;
