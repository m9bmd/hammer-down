import type { Metadata } from "next";
import { Space_Mono as FontMono } from "next/font/google";
import "./globals.css";
const fontMono = FontMono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mono",
});
import { cn } from "@/lib/utils";
import Navbar from "@/components/ui/Navbar/Navbar";

import { Toaster } from "@/components/ui/toaster";
export const metadata: Metadata = {
  title: "hammer down",
  description: "hammer down your thoughts",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-mono antialiased",
          fontMono.variable
        )}
      >
        <Navbar />
        <main> {children}</main>
        <Toaster />
      </body>
    </html>
  );
}
