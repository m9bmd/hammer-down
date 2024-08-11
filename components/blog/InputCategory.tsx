"use client";

import React, { useEffect, useState } from "react";
import { Button, buttonVariants } from "../ui/button";
import { TrashIcon, XIcon } from "lucide-react";
import { Input } from "../ui/input";
import { UseFormReturn } from "react-hook-form";
import {
  BlogType,
  categoriesArray,
  CategoryType,
} from "@/schemas/blog/BlogSchema";
import { deleteCategory } from "@/actions/blog/deleteCategory";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
type InputCategoryProps = {
  isDisabled: boolean;
  postId?: string;
  form: UseFormReturn<BlogType>;
  selectedCategory: CategoryType[];
  setSelectedCategory: React.Dispatch<
    React.SetStateAction<
      {
        name: string;
        id?: string | undefined;
      }[]
    >
  >;
  // categories?: CategoryType[];
};

const InputCategory = ({
  form,
  postId,
  selectedCategory,
  setSelectedCategory,
  isDisabled,
}: InputCategoryProps) => {
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const autoCompleteCategory = (value: string) => {
    const lowerCaseValue = value.toLowerCase();

    const filteredCategories = categoriesArray.filter(
      (category) =>
        category.toLowerCase().includes(lowerCaseValue) &&
        !selectedCategory.some(
          (selectedCategory) =>
            selectedCategory.name.toLowerCase() === category.toLowerCase(),
        ),
    );

    if (filteredCategories.length > 0) {
      setSuggestions(filteredCategories);
    } else {
      setSuggestions([lowerCaseValue]);
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    if (selectedCategory.length >= 2) {
      form.setError("categories", {
        type: "custom",
        message: "Only two categories per post allowed",
      });
      return;
    }

    const isDuplicate = selectedCategory.some((cat) => cat.name === suggestion);
    if (isDuplicate) {
      form.setError("categories", {
        type: "custom",
        message: "Oops! Try picking different categories",
      });
      return;
    }

    setSelectedCategory((prev) => [...prev, { name: suggestion }]);
    form.setValue("categories", [...selectedCategory, { name: suggestion }]);
    form.clearErrors("categories");
    setInputValue("");
    setSuggestions([]);
  };

  useEffect(() => {
    form.setValue("categories", selectedCategory);
  }, [selectedCategory]);

  const removeCategory = async (category: CategoryType) => {
    const categoryId = category.id;
    if (categoryId) {
      await deleteCategory({ categoryId: category.id!, postId: postId! });
    }
    const filteredCategories = selectedCategory.filter(
      (selectedItem) => selectedItem.name !== category.name,
    );
    setSelectedCategory(filteredCategories);
  };
  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter") {
      event.preventDefault();
      if (suggestions.length > 0) {
        const isDuplicate = selectedCategory.some(
          (cat) => cat.name === suggestions[0],
        );
        if (isDuplicate) {
          form.setError("categories", {
            type: "custom",
            message: "Oops! Try picking different categories",
          });
          return;
        }
        const firstSuggestion = suggestions[0];
        setSelectedCategory((prev) => [...prev, { name: firstSuggestion }]);
        setInputValue("");
      }
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    autoCompleteCategory(value);
  };

  return (
    <div className="flex flex-col gap-2">
      <ul className="flex items-center gap-2">
        {selectedCategory.length > 0 &&
          selectedCategory.map((category, index) => (
            <li key={index} className="flex items-center justify-center">
              <div
                className={buttonVariants({
                  variant: "secondary",
                  size: "sm",
                  className: "flex items-center justify-center gap-2",
                })}
              >
                <span>{category.name}</span>
                {category.id ? (
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button
                        disabled={isDisabled}
                        type="button"
                        size={"icon"}
                        className="h-4 w-4 bg-transparent text-destructive hover:bg-transparent"
                      >
                        <XIcon className="h-4 w-4" />
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle className="text-destructive">
                          Are you absolutely sure?
                        </AlertDialogTitle>
                        <AlertDialogDescription className="text-muted-foreground">
                          This action cannot be undone.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction className="bg-transparent hover:bg-transparent">
                          <Button
                            className="flex w-full justify-start"
                            variant={"destructive"}
                            onClick={() => removeCategory(category)}
                          >
                            <TrashIcon className="mr-2 h-4 w-4" />
                            <span>delete</span>
                          </Button>
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                ) : (
                  <Button
                    disabled={isDisabled}
                    type="button"
                    size={"icon"}
                    className="h-4 w-4 bg-transparent text-destructive hover:bg-transparent"
                    onClick={() => removeCategory(category)}
                  >
                    <XIcon className="h-4 w-4" />
                  </Button>
                )}
                {/* <Button
                  disabled={isDisabled}
                  type="button"
                  size={"icon"}
                  className="h-4 w-4 bg-transparent text-destructive hover:bg-transparent"
                  onClick={() => removeCategory(category)}
                >
                  <XIcon className="h-4 w-4" />
                </Button> */}
              </div>
            </li>
          ))}
        {selectedCategory.length >= 2 ? null : (
          <li>
            <Input
              disabled={isDisabled}
              placeholder="add up to 2 category"
              className="w-full border-0 p-0 text-sm focus-visible:outline-0 focus-visible:ring-0 focus-visible:ring-offset-0"
              value={inputValue}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
            />
          </li>
        )}
      </ul>

      <div className="space-x-2">
        {inputValue.length > 0 &&
        selectedCategory.length !== 2 &&
        suggestions.length > 0
          ? suggestions.map((suggestion, index) => (
              <Button
                type="button"
                key={index}
                variant={"secondary"}
                className="w-fit"
                size={"sm"}
                disabled={isDisabled}
                onClick={() => handleSuggestionClick(suggestion)}
              >
                {suggestion}
              </Button>
            ))
          : null}
      </div>
    </div>
  );
};

export default InputCategory;
