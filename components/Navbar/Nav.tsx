"use client";

import { Navlinks } from "@/Constant/Constant";
import Logo from "../Helper/Logo";
import Link from "next/link";
import { DownloadIcon, MenuIcon } from "lucide-react";
import ThemeToggler from "../Helper/ThemeToggler";
import { useEffect, useState } from "react";

type Props = {
  openNav: () => void;
};

export default function Nav({ openNav }: Props) {
  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 90) {
        setNavBg(true);
      } else {
        setNavBg(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`transition-all duration-200 h-[12vh] z-100 fixed w-full ${navBg ? "dark:bg-gray-800 bg-white shadow-md" : "fixed"}`}
    >
      <div className="flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto">
        {/* LOGO */}
        <Logo />
        {/* 导航链接 */}
        <div className="hidden lg:flex items-center space-x-10">
          {Navlinks.map((link, index) => (
            <Link
              className="dark:text-white text-black hover:text-yellow-500 dark:hover:text-yellow-200 font-semibold transition-all duration-200"
              key={index}
              href={link.href}
            >
              {link.name}
            </Link>
          ))}
        </div>
        <div className="flex items-center space-x-4">
          {/* 下载简历 */}
          <a
            href="#_"
            className="box-border
            relative z-20 inline-flex items-center justify-center w-auto px-6 sm:px-8 py-3 overflow-hidden font-bold text-white transition-all duration-300 bg-indigo-600 rounded-md cursor-pointer group ring-offset-2 ring-offset-gray-200 ring-1 ring-indigo-300 ring-offset-indigo-200 hover:ring-offset-indigo-500 ease focus:outline-none"
          >
            <span className="relative z-20 flex items-center space-x-2 text-sm">
              <DownloadIcon className="w-4 h-4" />
              <span>下载简历</span>
            </span>
          </a>

          {/* 主题切换 */}
          <ThemeToggler />

          {/* 汉堡菜单 */}
          <MenuIcon
            className="w-6 h-6 cursor-pointer text-black dark:text-white lg:hidden"
            onClick={openNav}
          />
        </div>
      </div>
    </div>
  );
}
