import { ClerkProvider } from "@clerk/nextjs";
import localFont from "next/font/local";
import type { Metadata } from "next";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Cloudinary SaaS",
  description: "Generated By : Shardendu Mishra",
};

export default function RootLayout({
  children,
}:Readonly<{
  children: React.ReactNode;
}>){
  return (
    <ClerkProvider appearance={{
      layout: {
        unsafe_disableDevelopmentModeWarnings: true,
      },
      elements: {
        footer: "hidden",
      },
    }}> 
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
