"use client";
import React, { startTransition, useState, useTransition } from "react";
import AuthCardWrapper from "./AuthCardWrapper";
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
import { LoginInputType, LoginSchema } from "@/schemas/auth/loginSchema";
import FormError from "./FormError";
import FormSuccess from "./FormSuccess";
import { login } from "@/actions/login";
import FormWarning from "./FormWarning";
import { navigate } from "@/lib/navigate";
import { ResetPasswordSchema, ResetPasswordType } from "@/schemas/auth/reset";
import { reset, resetPassword } from "@/actions/reset";
import { useSearchParams } from "next/navigation";

const ResetPasswordForm = () => {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");
  const [warning, setWarning] = useState<string>("");
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const form = useForm<ResetPasswordType>({
    resolver: zodResolver(ResetPasswordSchema),
    defaultValues: {
      password: "",
    },
  });
  const onSubmit = (data: ResetPasswordType) => {
    setSuccess("");
    setError("");
    setWarning("");
    // console.log(data);
    startTransition(async () => {
      const { error, success } = await resetPassword(data, token as string);
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
      headerLabel="create new password"
      backButtonLabel="back to login"
      backButtonHref="/auth/login"
    >
      <Form {...form}>
        <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-muted-foreground">
                  new password
                </FormLabel>
                <FormControl>
                  <Input disabled={isPending} type="password" {...field} />
                </FormControl>
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
            reset password
          </Button>
        </form>
      </Form>
    </AuthCardWrapper>
  );
};

export default ResetPasswordForm;
