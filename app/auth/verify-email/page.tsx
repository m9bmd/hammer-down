import React, { Suspense } from "react";


import VerifcationForm from "@/components/auth/VerifcationForm";

const VerifyEmailPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <VerifcationForm />
    </Suspense>
  );
};

export default VerifyEmailPage;
