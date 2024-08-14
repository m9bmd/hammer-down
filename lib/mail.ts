"use server"
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendPasswordResetEmail = async (email: string, token: string) => {
  const confirmLink = `${process.env.BASE_URL}/auth/reset-password?token=${token}`;
  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: email,
    subject: "Reset your password",
    html: `<p>heyo 👋 ${email}<br> 
     <a href=${confirmLink}>here we go</a></p>`,
  });
};
export const justSendEmail = async() => {
  const {data,error}=await resend.emails.send({
    from: "onboarding@resend.dev",
    to:"miyezo62@gmail.com",
    subject: "testing email",
    html: "<h1>hello testing email</h1>"
  })
  if(error) {
    console.log(error)
  }
  console.log({data})
}

export const sendVerificationEmail = async (email: string, token: string) => {
  const confirmLink = `${process.env.BASE_URL}/auth/verify-email?token=${token}`;
  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: email,
    subject: "Confirm your email",
    html: `<p>heyo 👋 ${email}<br> 
     <a href=${confirmLink}>click to confirm your email</a></p>`,
  });
};
