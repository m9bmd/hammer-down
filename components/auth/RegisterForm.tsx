"use client";
import React, { useState, useTransition } from "react";
import AuthCardWrapper from "./AuthCardWrapper";
import FormError from "./FormError";
import FormSuccess from "./FormSuccess";
import { zodResolver } from "@hookform/resolvers/zod";
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
import {
  RegisterInputType,
  RegisterSchema,
} from "@/schemas/auth/registerSchema";
import { register } from "@/actions/register";
import { justSendEmail } from "@/lib/mail";

const RegisterForm = () => {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");
  const form = useForm<RegisterInputType>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });
  const onSubmit = (data: RegisterInputType) => {
    setSuccess("");
    setError("");
    startTransition(async () => {
      // await new Promise((resolve) => setTimeout(resolve, 2000));
      const { error, success } = await register(data);
      if (error) {
        setError(error);
      } else if (success) {
        setSuccess(success);
      }
    });
  };
  return (
    <AuthCardWrapper
      headerTitle="Quick Authentication"
      headerLabel="Create an account"
      backButtonLabel="Already have an account?"
      backButtonHref="/auth/login"
      showSocial
    >
      <Form {...form}>
        <form className="space-y-8 w-full" onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-muted-foreground">
                  User name
                </FormLabel>
                <FormControl>
                  <Input
                    disabled={isPending}
                    placeholder="Prison Mike"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-muted-foreground">Email</FormLabel>
                <FormControl>
                  <Input
                    disabled={isPending}
                    placeholder="prison_mike@dunder_mufflin.com"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-muted-foreground">
                  password
                </FormLabel>
                <FormControl>
                  <Input type="password" disabled={isPending} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormError message={error} />
          <FormSuccess message={success} />

          <Button
            type="submit"
            disabled={isPending}
            className="w-full bg-primary"
          >
            Submit
          </Button>
        </form>
      </Form>
    </AuthCardWrapper>
  );
};

export default RegisterForm;
