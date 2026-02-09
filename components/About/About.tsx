import Image from "next/image";
import SectionHeading from "../Helper/SectionHeading";
import { highlights, stats } from "@/data";

export default function About() {
  return (
    <div className="py-16 bg-gray-100 dark:bg-gray-900">
      {/* 区域标题 */}
      <SectionHeading
        title_1="关于"
        title_2="我"
        description="走近代码背后的开发者"
      />
      <div className="grid w-[80%] mx-auto lg:grid-cols-2 gap-12 items-center">
        {/* 照片 */}
        <div className="relative">
          <div className="aspect-square rounded-2xl overflow-hidden p-2">
            <Image
              src={"/images/user.jpg"}
              alt="profile"
              width={700}
              height={700}
              className="w-full h-full object-cover object-center rounded-xl"
            />
          </div>
        </div>
        {/* 内容 */}
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold">
            一位以结果为导向的全栈开发工程师
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            我是一名拥有 10 年以上经验的全栈开发工程师，擅长 Web、App
            应用的设计与工程化落地。曾从零构建并长期维护多套业务系统，熟悉从需求分析、技术选型到上线与持续迭代的完整流程。
          </p>
          <p className="text-muted-foreground leading-relaxed">
            相比追逐短期的技术热度，我更重视工程质量与实际效果。通过严谨的设计、清晰的代码结构和持续的技术积累，我致力于为团队和业务交付可靠、可控、经得起时间考验的系统。
          </p>
          {/* 强调 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
            {highlights.map((item) => {
              return (
                <div
                  key={item.text}
                  className="flex items-center gap-3 text-sm"
                >
                  <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center">
                    <item.icon className="w-4 h-4 text-blue-500" />
                  </div>
                  <span className="text-muted-foreground">{item.text}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* 统计数字 */}
      <div className="mt-16 w-[80%] mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => {
            return (
              <div
                key={stat.label}
                className="bg-white dark:bg-gray-800 shadow rounded-xl p-6 text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
