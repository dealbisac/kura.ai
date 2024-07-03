import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { Raleway } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const raleway = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kura AI - Intelligent AI Chatbot.",
  description: "Automated AI sales chatbot.",
  icons: {
    icon: '/icons/favicon.svg'
  } 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={raleway.className}>
          {children}
          <Toaster/>
        </body>
      </html>
    </ClerkProvider>
  );
}
