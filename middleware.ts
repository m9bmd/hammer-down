import NextAuth from "next-auth";
import authConfig from "./auth.config";

const { auth } = NextAuth(authConfig);
import {
  publicRoutes,
  authRoutes,
  apiAuthPrefix,
  defaultLoginRedirect,
} from "./routes/routes";
import { NextResponse } from "next/server";
export default auth((req) => {
  const isLoggedIn = !!req.auth;
  const { pathname } = req.nextUrl;
  const isApiAuthRoute = pathname.startsWith(apiAuthPrefix);
  const isPublicRoute = publicRoutes.includes(pathname);
  const isAuthRoute = authRoutes.includes(pathname);
  if (isApiAuthRoute) {
    return NextResponse.next();
  }
  if (isAuthRoute) {
    if (isLoggedIn) {
      return Response.redirect(new URL(defaultLoginRedirect, req.nextUrl));
    }
    return NextResponse.next();
  }
  if (!isLoggedIn && !isPublicRoute) {
    // console.log("not on public route");
    return Response.redirect(new URL("/auth/login", req.nextUrl));
  }
  return NextResponse.next();
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
