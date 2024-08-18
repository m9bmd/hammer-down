"use client"

import React, { Suspense } from 'react'
import dynamic from 'next/dynamic'

const DynamicResetPasswordForm = dynamic(() => import('@/components/auth/ResetPasswordForm'), {
  ssr: false,
})

const ResetPasswordPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DynamicResetPasswordForm />
    </Suspense>
  )
}

export default ResetPasswordPage