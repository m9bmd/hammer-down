"use client";
import React, { startTransition, useState, useTransition } from "react";
import AuthCardWrapper from "./AuthCardWrapper";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { LoginInputType, LoginSchema } from "@/schemas/auth/loginSchema";
import FormError from "./FormError";
import FormSuccess from "./FormSuccess";
import { login } from "@/actions/login";
import FormWarning from "./FormWarning";
import { navigate } from "@/lib/navigate";

const LoginForm = () => {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");
  const [warning, setWarning] = useState<string>("");
  const form = useForm<LoginInputType>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const onSubmit = (data: LoginInputType) => {
    setSuccess("");
    setError("");
    setWarning("");
    startTransition(async () => {
      const { error, success, warning } = await login(data);
      if (error) {
        setError(error);
      } else if (success) {
        setSuccess(success);
      } else if (warning) {
        setWarning(warning);
      }
    });
  };

  return (
    <AuthCardWrapper
      headerTitle="Quick Authentication"
      headerLabel="Welcome back"
      backButtonLabel="Don't have an account?"
      backButtonHref="/auth/register"
      showSocial
    >
      <Form {...form}>
        <form className="space-y-8" onSubmit={form.handleSubmit(onSubmit)}>
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
                <Button
                  type="button"
                  variant={"link"}
                  size={"sm"}
                  className="p-0"
                  onClick={() => navigate("/auth/reset")}
                >
                  forgot password?
                </Button>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormError message={error} />
          <FormSuccess message={success} />
          <FormWarning message={warning} />
          <Button
            type="submit"
            disabled={isPending}
            className="w-full bg-primary "
          >
            Submit
          </Button>
        </form>
      </Form>
    </AuthCardWrapper>
  );
};

export default LoginForm;
