import type { Metadata } from "next";
import "./globals.css";
import Provider from "@/components/HOC/Provider";

export const metadata: Metadata = {
  title: "李觊的项目集",
  description: "李觊的个人网站，展示项目集",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body
        className={`antialiased`}
      >
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  );
}
