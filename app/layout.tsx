import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { DarkModeProvider } from "./contexts/DarkModeContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BaseBa1l",
  description: "Generated by BaseBa1l",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <DarkModeProvider>
        <body className={inter.className}>{children}</body>
      </DarkModeProvider>
    </html>
  );
}