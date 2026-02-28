import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: 'export',  // 生成纯静态文件
    images: {
        unoptimized: true, // 禁用图片优化（静态站不支持）
    },
};

export default nextConfig;
