import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SYXRS WRLD",
  description: "Toronto-born athletic streetwear. Built From The North.",
};

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