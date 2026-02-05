"use client";

import { TypeAnimation } from "react-type-animation";
import { Button } from "../ui/button";
import { FolderOpen, Download } from "lucide-react";

export default function Hero() {
  return (
    <div className="relative min-h-screen bg-[radial-gradient(circle_476px_at_54.8%_51.5%,rgba(168,229,253,1)_0%,rgba(244,244,254,1)_42.3%,rgba(244,244,254,1)_100.2%)] flex items-center justify-center overflow-hidden dark:bg-[radial-gradient(circle_farthest-corner_at_50.3%_47.3%,rgba(113,42,92,1)_0.1%,rgba(40,25,46,1)_90%)]">
      {/* 内容 */}
      <div className="relative z-10 text-center">
        {/* 子标题 */}
        <div className="sm:mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-gray-600 text-sm text-muted-foreground dark:text-gray-200 mb-8">
            <span className="w-2 h-2 rounded-full bg-green-500"></span>
            正在看机会
          </span>
        </div>
        {/* 标题 */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
          你好,我是{" "}
          <span className="text-purple-800 dark:text-yellow-300">李觊</span>
        </h1>
        {/* 打字机效果 */}
        <div className="text-xl sm:text-2xl md:text-3xl text-black dark:text-white font-semibold mb-4 sm:mb-8 h-12">
          <TypeAnimation
            sequence={[
              "TypeScript 全栈开发",
              2000,
              "擅长前端 React、Next.js、Vue.js",
              2000,
              "擅长后端 Node.js、Express、Hono.js、Elysia.js",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </div>
        {/* 描述 */}
        <p className="text-lg text-muted-foreground dark:text-gray-200 max-w-2xl mx-auto mb-10">
          全栈开发专家 |
          深耕现代技术栈，匠心打造卓越数字体验。具备极强的工程实践能力，确保项目从需求到交付的高质量落地。
        </p>
        {/* 按钮 */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size={"lg"} asChild className="w-fit mx-auto sm:mx-0">
            <a href="#_">
              <FolderOpen className="w-5 h-5 mr-2" />
              查看项目
            </a>
          </Button>
          <Button size={"lg"} asChild className="w-fit mx-auto sm:mx-0">
            <a href="#_">
              <Download className="w-5 h-5 mr-2" />
              下载简历
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
