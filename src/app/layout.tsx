import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

/**
 * 加载 Inter 字体
 */
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

/**
 * 网站元数据
 */
export const metadata: Metadata = {
  title: "李龙 - 个人网站",
  description: "李龙的个人网站，展示我的技术历程和项目经验",
};

/**
 * 根布局组件
 * 定义整个应用的基本结构
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
