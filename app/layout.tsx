"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "next-themes";
import "../styles/globals.css"
import {ThemeContext} from "@/context";
import {Suspense} from "react";
import Loading from "@/app/loading";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body>
        <ThemeContext>
          <Navbar />
            <Suspense fallback={<Loading />}>{children}</Suspense>
            <Footer />
        </ThemeContext>
      </body>
    </html>
  );
}
