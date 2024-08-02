"use client";
import React, { useCallback, useEffect, useState } from "react";
import AuthCardWrapper from "./AuthCardWrapper";
import { useSearchParams } from "next/navigation";
import { verifyToken } from "@/actions/verification";
import { Button } from "../ui/button";
import FormError from "./FormError";
import FormSuccess from "./FormSuccess";
import { navigate } from "@/lib/navigate";
const VerifcationForm = () => {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const onSubmit = useCallback(async () => {
    if (!token) {
        setError("missing token")
        return
    }
    const {success, error} = await verifyToken(token);
    if(success) {
        setSuccess(success)
    }
    else if(error) {
        setError(error)
    }
  }, [token]);

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
          {/* <Button className="w-full">Verify</Button> */}
          <FormError message={error}/>
          <FormSuccess message={success}/>
        </div>
      </AuthCardWrapper>
    </div>
  );
};

export default VerifcationForm;
