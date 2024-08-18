"use client"

import React, { Suspense } from 'react'
import dynamic from 'next/dynamic'

const DynamicVerificationForm = dynamic(() => import('@/components/auth/VerifcationForm'), {
  ssr: false,
})

const VerifyEmailPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DynamicVerificationForm />
    </Suspense>
  )
}

export default VerifyEmailPage