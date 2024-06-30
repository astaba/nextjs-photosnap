import type { Metadata } from "next";

import "./globals.css";
import { inter } from "@/lib/fonts";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: {
    default: "Photosnap",
    template: "%s | Photosnap",
  },
  description: "Platform for photographers and visual storytellers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
