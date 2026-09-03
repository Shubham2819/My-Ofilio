import type { Metadata } from "next";
import { siteMetadata }  from "@/components/metadata";
// @ts-expect-error CSS imports are handled by Next.js
import "./globals.css";

export const metadata: Metadata = siteMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}