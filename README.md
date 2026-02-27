# 李觊 - 个人作品集

> 10+ 年经验的全栈开发工程师，擅长独立开发，熟练使用 AI 工具提效。

🔗 **在线预览**：[点击访问](https://jimmylee.top/)

---

## 📌 项目简介

这是一个使用 **Next.js 16** 构建的个人作品集网站，用于展示我的技术能力、项目经验和工作经历。网站注重性能优化与用户体验，采用响应式设计，支持暗色模式。

## ✨ 功能与亮点

- 🌗 **暗色/亮色模式切换** — 基于 `next-themes` 实现
- ⌨️ **打字机动画效果** — 首屏动态展示核心优势
- 🎞️ **滚动入场动画** — 使用 AOS 库实现元素渐入效果
- 📩 **在线联系表单** — 通过 Nodemailer 发送邮件，无需第三方服务
- 📄 **一键下载简历** — 便于招聘方快速获取 PDF 简历
- 📱 **全端响应式** — 适配手机、平板、桌面等各种设备

## 🛠️ 技术栈

| 分类         | 技术                                          |
| ------------ | --------------------------------------------- |
| **框架**     | Next.js 16 (App Router)                       |
| **语言**     | TypeScript, React 19                          |
| **样式**     | Tailwind CSS 4, CSS 动画                      |
| **UI 组件**  | Radix UI, Lucide Icons, React Icons           |
| **邮件服务** | Nodemailer                                    |
| **动画**     | AOS (Animate on Scroll), React Type Animation |
| **包管理**   | pnpm                                          |

## 📁 项目结构

```
├── app/                  # Next.js App Router 页面与 API
│   ├── actions/          # Server Actions
│   ├── layout.tsx        # 根布局
│   └── page.tsx          # 首页
├── components/           # React 组件
│   ├── Hero/             # 首屏横幅
│   ├── About/            # 关于我
│   ├── Skills/           # 技能展示
│   ├── Project/          # 项目展示
│   ├── Experience/       # 工作经历
│   ├── Contact/          # 联系方式与表单
│   ├── Navbar/           # 导航栏
│   ├── Footer/           # 页脚
│   └── ui/               # 通用 UI 组件
├── data.ts               # 集中管理的网站数据
└── public/               # 静态资源
```

## 🚀 本地运行

```bash
# 安装依赖
pnpm install

# 启动开发服务器
pnpm dev
```

访问 [http://localhost:3000](http://localhost:3000) 查看效果。

## 📬 联系我

- **邮箱**：liji420@qq.com
- **GitHub**：[github.com/JimmyLJ](https://github.com/JimmyLJ)
- **坐标**：武汉 | 接受坐班或远程工作
