import React, { Suspense } from 'react'

import ResetPasswordForm from '@/components/auth/ResetPasswordForm'

const ResetPasswordPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ResetPasswordForm />
    </Suspense>
  )
}

export default ResetPasswordPage