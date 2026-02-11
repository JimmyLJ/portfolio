"use server";

import { headers } from "next/headers";
import nodemailer from "nodemailer";

// 速率限制（内存存储，按 IP 限制，60秒冷却时间）
const rateLimitMap = new Map<string, number>();
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 60 秒
let requestCount = 0;

function isRateLimited(ip: string): boolean {
  const now = Date.now();

  // 定期清理：每 100 次请求后，删除过期的条目
  requestCount++;
  if (requestCount % 100 === 0) {
    for (const [key, timestamp] of rateLimitMap) {
      if (now - timestamp > RATE_LIMIT_WINDOW_MS) {
        rateLimitMap.delete(key);
      }
    }
  }

  const lastRequest = rateLimitMap.get(ip);
  if (lastRequest && now - lastRequest < RATE_LIMIT_WINDOW_MS) {
    return true;
  }

  rateLimitMap.set(ip, now);
  return false;
}

// 输入验证
type ContactFormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export type ContactFormState = {
  success: boolean;
  message: string;
} | null;

function validateFormData(
  data: Record<string, unknown>
): { valid: true; data: ContactFormData } | { valid: false; error: string } {
  const { name, email, subject, message } = data;

  if (!name || typeof name !== "string" || name.trim().length === 0) {
    return { valid: false, error: "姓名必填" };
  }
  if (name.trim().length > 100) {
    return { valid: false, error: "姓名过长（最多 100 个字符）" };
  }

  if (!email || typeof email !== "string" || email.trim().length === 0) {
    return { valid: false, error: "邮箱必填" };
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.trim())) {
    return { valid: false, error: "邮箱格式无效" };
  }

  if (!subject || typeof subject !== "string" || subject.trim().length === 0) {
    return { valid: false, error: "主题必填" };
  }
  if (subject.trim().length > 200) {
    return { valid: false, error: "主题过长（最多 200 个字符）" };
  }

  if (!message || typeof message !== "string" || message.trim().length === 0) {
    return { valid: false, error: "留言内容必填" };
  }
  if (message.trim().length > 5000) {
    return { valid: false, error: "留言内容过长（最多 5000 个字符）" };
  }

  return {
    valid: true,
    data: {
      name: name.trim(),
      email: email.trim(),
      subject: subject.trim(),
      message: message.trim(),
    },
  };
}

export async function sendMessage(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  try {
    // 速率限制
    const headersList = await headers();
    const ip =
      headersList.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      headersList.get("x-real-ip") ||
      "unknown";

    if (isRateLimited(ip)) {
      return { success: false, message: "请稍后再试（每分钟限发送 1 次）" };
    }

    // 校验
    const validation = validateFormData({
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    });

    if (!validation.valid) {
      return { success: false, message: validation.error };
    }

    const { name, email, subject, message } = validation.data;

    // 发送邮件
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_TO_EMAIL,
      replyTo: email,
      subject: `[Portfolio] ${subject}`,
      text: [
        `Name:    ${name}`,
        `Email:   ${email}`,
        `Subject: ${subject}`,
        ``,
        `Message:`,
        `${message}`,
      ].join("\n"),
    });

    return { success: true, message: "消息已发送成功！" };
  } catch (error) {
    console.error("Contact form error:", error);
    return { success: false, message: "发送失败，请稍后再试" };
  }
}
