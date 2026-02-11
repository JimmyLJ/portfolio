"use client";

import { useActionState, useRef, useEffect } from "react";
import { contactInfo, socialLinks } from "../../data";
import SectionHeading from "../Helper/SectionHeading";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { Send, Loader2, CheckCircle2, XCircle } from "lucide-react";
import { sendMessage, type ContactFormState } from "../../app/actions/contact";

export default function Contact() {
  const [state, formAction, isPending] = useActionState<
    ContactFormState,
    FormData
  >(sendMessage, null);

  const formRef = useRef<HTMLFormElement>(null);

  // 发送成功后清空表单
  useEffect(() => {
    if (state?.success) {
      formRef.current?.reset();
    }
  }, [state]);

  return (
    <div className="py-16 bg-gray-100 dark:bg-gray-950">
      <SectionHeading
        title_1="联系"
        title_2="我"
        description="如果您有项目合作的构思，或者只是想交流技术、交个朋友？我随时欢迎。期待收到您的消息！"
      />
      <div className="w-[80%] mx-auto mt-16">
        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* 联系信息 */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4">聊聊吧</h3>
              <p className="text-muted-foreground">
                我非常乐意探讨各种项目合作与创意点子。如果您正在寻找一位能够理解您的愿景、并将其转化为现实的合作伙伴，欢迎随时联系我。
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((item) => {
                return (
                  <a
                    href={item.href}
                    key={item.label}
                    target="_blank"
                    className="flex items-center gap-4 p-4 bg-white dark:bg-gray-800 shadow-md rounded-xl hover:scale-105 transition-all duration-300 group"
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
                  </a>
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
          {/* 联系表单 */}
          <div>
            <form
              ref={formRef}
              action={formAction}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 space-y-6"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    姓名
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="您的姓名"
                    required
                    disabled={isPending}
                    className="bg-gray-100"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    邮箱地址
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="yourname@example.com"
                    required
                    disabled={isPending}
                    className="bg-gray-100"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  主题
                </label>
                <Input
                  id="subject"
                  name="subject"
                  placeholder="项目咨询"
                  required
                  disabled={isPending}
                  className="bg-gray-100"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  留言内容
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="请描述您的需求或想对我说的话..."
                  rows={5}
                  required
                  disabled={isPending}
                  className="bg-gray-100 h-40"
                />
              </div>

              {/* 状态提示 */}
              {state && (
                <div
                  className={`flex items-center gap-2 p-3 rounded-lg text-sm ${
                    state.success
                      ? "bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-400"
                      : "bg-red-50 text-red-700 dark:bg-red-900/20 dark:text-red-400"
                  }`}
                >
                  {state.success ? (
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                  ) : (
                    <XCircle className="w-4 h-4 shrink-0" />
                  )}
                  {state.message}
                </div>
              )}

              <Button
                type="submit"
                size={"lg"}
                disabled={isPending}
                className="w-full cursor-pointer"
              >
                {isPending ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    正在发送...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    发送消息
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
