import { contactInfo, socialLinks } from "../../data";
import SectionHeading from "../Helper/SectionHeading";

export default function Contact() {
  return (
    <div id="contact" className="py-16 bg-gray-100 dark:bg-gray-950">
      <SectionHeading
        title_1="联系"
        title_2="我"
        description="如果您有项目合作的构思，或者只是想交流技术、交个朋友？我随时欢迎。期待收到您的消息！"
      />
      <div className="w-[80%] mx-auto mt-16">
        <div className="max-w-xl mx-auto">
          {/* 联系信息 */}
          <div
            data-aos="fade-right"
            data-aos-delay="150"
            data-aos-anchor-placement="top-center"
          >
            <div className="space-y-8">
              <h3 className="text-2xl font-semibold mb-4">聊聊吧</h3>
              <p className="text-muted-foreground">
                我非常乐意探讨各种项目合作与创意点子。如果您正在寻找一位能够理解您的愿景、并将其转化为现实的合作伙伴，欢迎随时联系我。
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((item) => {
                return (
                  <div
                    key={item.label}
                    className="flex items-center gap-4 p-4 bg-white dark:bg-gray-800 shadow-md rounded-xl hover:scale-105 transition-all duration-300 group cursor-default"
                  >
                    <div className="w-12 h-12 rounded-lg bg-blue-600/10 flex items-center justify-center group-hover:bg-blue-600/20 transition-colors">
                      <item.icon className="w-5 h-5 text-blue-500 dark:text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">
                        {item.label}
                      </p>
                      <p className="font-medium">{item.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            {/* 社交网络icon */}
            <div>
              <h4 className="text-lg font-medium mb-4">关注我</h4>
              <div className="flex gap-3">
                {socialLinks.map((link) => {
                  return (
                    <a
                      href={link.href}
                      key={link.label}
                      target="_blank"
                      className="w-12 h-12 rounded-xl bg-white dark:bg-gray-800 flex items-center justify-center text-muted-foreground hover:text-blue-500 transition-colors"
                    >
                      <link.icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
