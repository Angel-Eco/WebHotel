import React from "react";
import { Providers } from "@/store/providers";
import MyApp from "./app";
import "./global.css";
//import { SessionProvider } from 'next-auth/react';
import SessionProviderWrapper from "./components/SessionProviderWrapper";

export const metadata = {
  title: "Ecokumen demo",
  description: "Ecokumen Project",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
      <SessionProviderWrapper>        
        <Providers>
          <MyApp>{children}</MyApp>
        </Providers>
        </SessionProviderWrapper>
      </body>
    </html>
  );
}
