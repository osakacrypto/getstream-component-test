/*
PATH: app/layout.tsx
@osakacrypto
Last modified: 2025-07-08
*/

import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";

const StrvnFont = Bricolage_Grotesque({
  variable: "--STRVN-FONT",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Get Stream - Take Home Test",
  description: "Batman x Wise inspired Featured Card and Image component",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={StrvnFont.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
