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

import FormError from "./FormError";
import FormSuccess from "./FormSuccess";
import FormWarning from "./FormWarning";

import { ResetSchema, ResetSchemaType } from "@/schemas/auth/reset";
import { reset } from "@/actions/reset";

const ResetForm = () => {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");
  const [warning, setWarning] = useState<string>("");
  const form = useForm<ResetSchemaType>({
    resolver: zodResolver(ResetSchema),
    defaultValues: {
    email:""
    },
  });
  const onSubmit = (data: ResetSchemaType) => {
    setSuccess("");
    setError("");
    setWarning("");
    // console.log(data)
    startTransition(async () => {
      const { error, success } = await reset(data);
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
      headerLabel="forgot your password?"
      backButtonLabel="back to login"
      backButtonHref="/auth/login"
      
    >
      <Form {...form}>
        <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
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


          <FormError message={error} />
          <FormSuccess message={success} />
          <FormWarning message={warning} />
          <Button
            type="submit"
            disabled={isPending}
            className="w-full bg-primary "
          >
            send reset email
          </Button>
        </form>
      </Form>
    </AuthCardWrapper>
  );
};

export default ResetForm;
