"use client";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Button } from "../ui/button";
import { signIn } from "next-auth/react";
import { defaultLoginRedirect } from "@/routes/routes";

const Socials = () => {
  const onClick = (provider: "google" | "github") => {
    signIn(provider, {
      callbackUrl: defaultLoginRedirect,
    });
  };
  return (
    <div className="flex items-center w-full gap-x-2">
      <Button
        size={"lg"}
        className="w-full"
        variant={"outline"}
        onClick={() => onClick("google")}
      >
        <FcGoogle className="w-6 h-6" />
      </Button>
      <Button
        size={"lg"}
        className="w-full"
        variant={"outline"}
        onClick={() => onClick("github")}
      >
        <FaGithub className="w-6 h-6" />
      </Button>
    </div>
  );
};

export default Socials;
