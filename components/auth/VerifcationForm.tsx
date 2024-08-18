"use client"

import React, { useCallback, useEffect, useState } from "react";
import AuthCardWrapper from "./AuthCardWrapper";
import { useSearchParams } from "next/navigation";
import { verifyToken } from "@/actions/verification";
import FormError from "./FormError";
import FormSuccess from "./FormSuccess";

const VerifcationForm = () => {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const searchParams = useSearchParams();

  const onSubmit = useCallback(async () => {
    const token = searchParams.get("token");
    if (!token) {
      setError("Missing token");
      return;
    }
    const { success, error } = await verifyToken(token);
    if (success) {
      setSuccess(success);
    } else if (error) {
      setError(error);
    }
  }, [searchParams]);

  useEffect(() => {
    onSubmit();
  }, [onSubmit]);

  return (
    <div className="pt-36">
      <AuthCardWrapper
        headerTitle="Quick Verification"
        headerLabel="email verification"
        backButtonLabel="back to login?"
        backButtonHref="/auth/login"
      >
        <div className="space-y-3">
          <FormError message={error} />
          <FormSuccess message={success} />
        </div>
      </AuthCardWrapper>
    </div>
  );
};

export default VerifcationForm;