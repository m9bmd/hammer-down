"use client"
import React from 'react'
import { Button } from '../button'
import { signOut } from "next-auth/react"

const SignoutButton = () => {
  return (
    <Button className='p-0' variant={"link"} onClick={() => signOut()}>logout</Button>
  )
}

export default SignoutButton