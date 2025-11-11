import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ResponsiveNav from "../components/Navbar/ResponsiveNav";

const font =  Inter({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "李觊的个人站",
  description: "使用 Next.js 16 构建的个人站",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.className} antialiased bg-[var(--background)]`}
      >
        <ResponsiveNav />
        {children}
      </body>
    </html>
  );
}
