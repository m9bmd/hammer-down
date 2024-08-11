"use client";
import React, { ReactNode } from "react";
import { Card, CardContent, CardHeader, CardFooter } from "../ui/card";
import Socials from "./Socials";
import { Button } from "../ui/button";
import { navigate } from "@/lib/navigate";

type AuthCardWrapperProps = {
  children: ReactNode;
  headerTitle: string;
  headerLabel: string;
  backButtonLabel: string;
  backButtonHref: string;
  showSocial?: boolean;
};

const AuthCardWrapper = ({
  children,
  headerTitle,
  headerLabel,
  backButtonLabel,
  backButtonHref,
  showSocial,
}: AuthCardWrapperProps) => {
  return (
    <Card className="lg:w-[444px] bg-background border-primary/60">
      <CardHeader className="text-center">
        <h2 className="text-2xl font-bold text-primary">{headerTitle}</h2>
        <p className="text-sm text-muted-foreground lowercase">{headerLabel}</p>
      </CardHeader>
      <CardContent>{children}</CardContent>

      <CardFooter>
        <div className="w-full flex flex-col gap-y-2">
          {showSocial && <Socials />}
          <Button
            variant="link"
            className="w-full"
            size="sm"
            onClick={() => navigate(backButtonHref)}
          >
            {backButtonLabel}
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default AuthCardWrapper;
