import type { Metadata } from "next";
import {  Plus_Jakarta_Sans } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";
import "./globals.css";
import { cn } from "@/lib/utils";
import ReactQueryProvider from "@/providers/eact-query-provider";
import ReduxProvider from "@/providers/redux-provider";
import { ThemeProvider } from "@/providers/theme-provider";

const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Slide",
  description: "Automate Instagram DMs and comments to grow your brand",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body suppressHydrationWarning className={jakarta.className}>
          
            <ReduxProvider>
            <ReactQueryProvider>
              <ThemeProvider
              attribute="class"
              defaultTheme="dark"
              enableSystem
              disableTransitionOnChange
              >

              {children}
              </ThemeProvider>
              </ReactQueryProvider>
            </ReduxProvider>

            <Toaster />
        </body>
      </html>
    </ClerkProvider>
  );
}
