import { Inter } from "next/font/google";
import "./globals.css";
import { Toast } from "@heroui/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AI Promptify",
  description: "AI Prompt Sharing & Marketplace Platform ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Toast.Provider />

        <main>{children}</main>
      </body>
    </html>
  );
}
