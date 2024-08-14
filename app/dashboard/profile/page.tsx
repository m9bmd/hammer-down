import { auth } from "@/auth";
import React from "react";

const page = async () => {
  const session = await auth();
  return (
    <div className="mx-auto flex max-w-[640px] flex-col gap-4 pt-12 ">
      <h1 className="text-2xl font-bold text-muted-foreground">Your profile</h1>
      <h2 className="text-lg text-primary">Name: <span className="font-bold">{session?.user.name}</span></h2>
      <p className="text-primary text-lg">email: <span className="font-bold">{session?.user.email}</span> </p>
    </div>
  );
};

export default page;
