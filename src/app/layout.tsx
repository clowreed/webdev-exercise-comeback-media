import type { Metadata } from "next";
import { inter } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Blog",
  description: "Comeback Media Web Developer Exercise",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`font-inter antialiased`}>{children}</body>
    </html>
  );
}
