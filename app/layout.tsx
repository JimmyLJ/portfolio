import type { Metadata } from "next";
import "./globals.css";
import Provider from "@/components/Contexts/Provider";
import ResponseNav from "@/components/Navbar/ResponseNav";

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
      <body className={`antialiased`}>
        <Provider>
          <ResponseNav />
          {children}
        </Provider>
      </body>
    </html>
  );
}
