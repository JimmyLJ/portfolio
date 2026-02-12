"use client";

import { Navlinks } from "@/Constant/Constant";
import { X } from "lucide-react";
import { useCallback } from "react";
import AOS from "aos";

type Props = {
  showNav: boolean;
  closeNav: () => void;
};

export default function MobileNav({ showNav, closeNav }: Props) {
  const sidebarOpenClose = showNav ? "translate-x-0" : "translate-x-[-100%]";

  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      closeNav();
      // 等待菜单关闭动画后再滚动
      setTimeout(() => {
        const targetId = href.replace("#", "");
        const targetEl = document.getElementById(targetId);
        if (targetEl) {
          targetEl.scrollIntoView({ behavior: "smooth" });
          setTimeout(() => {
            AOS.refresh();
          }, 800);
        }
      }, 300);
    },
    [closeNav],
  );

  return (
    <div>
      {/* 遮罩层 */}
      <div
        className={`fixed inset-0 transform transition-all duration-500 z-1002 bg-black opacity-70 w-full h-screen ${sidebarOpenClose}`}
      ></div>
      {/* 导航栏 */}
      <div
        className={`text-white fixed flex justify-center flex-col h-full transform transition-all duration-500 delay-300 w-[80%] sm:w-[60%] bg-purple-700 space-y-6 z-1050 ${sidebarOpenClose}`}
      >
        {Navlinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            onClick={(e) => handleNavClick(e, link.href)}
          >
            <p className="text-white w-fit text-[20px] ml-12 border-b-[1.5px] pb-1 border-white sm:text[30px]">
              {link.name}
            </p>
          </a>
        ))}
        {/* 关闭按钮 */}
        <X
          className="absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6"
          onClick={closeNav}
        />
      </div>
    </div>
  );
}
