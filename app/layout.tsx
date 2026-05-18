import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://syxrswrld.com"),
  title: {
    default: "SYXRS WRLD",
    template: "%s | SYXRS WRLD",
  },
  description:
    "Toronto-born athletic streetwear. Built from the North. Limited drops, founder access, and preorder-only releases.",
  openGraph: {
    title: "SYXRS WRLD",
    description:
      "Toronto-born athletic streetwear. Limited first runs and WRLD access.",
    type: "website",
    url: "https://syxrswrld.com",
    images: [
      {
        url: "/next.svg",
        width: 1200,
        height: 630,
        alt: "SYXRS WRLD",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SYXRS WRLD",
    description:
      "Toronto-born athletic streetwear. Limited first runs and WRLD access.",
    images: ["/next.svg"],
  },
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