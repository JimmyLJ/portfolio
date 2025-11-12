"use client"
import { NavLinks } from "@/constant/constant";
import Link from "next/link";
import { BiDownload } from "react-icons/bi";
import { FaCode } from "react-icons/fa";
import { HiBars3BottomRight } from "react-icons/hi2";
import { useEffect, useState } from "react";

type NavProps = {
  openNav: () => void;
}

const Nav = ({ openNav }: NavProps) => {
  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 90) {
        setNavBg(true);
      } else {
        setNavBg(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`transition-all duration-200 h-[12vh] z-[10000] fixed w-full ${navBg ? 'bg-[var(--light-background)] shadow-md' : ''}`}>
      <div className="flex justify-between items-center h-full w-[90%] mx-auto">
        {/* LOGO */}
        <div className="flex items-center space-x-2 text-white">
          <div className="w-10 h-10 bg-white rounded-full flex justify-center items-center flex-col">
            <FaCode className="w-5 h-5 text-black" />
          </div>
          <h1 className="text-xl hidden sm:block md:text-2xl text-white font-bold">李觊 | TS全栈</h1>
        </div>
        {/* 导航栏 */}
        <div className="hidden lg:flex items-center space-x-10 absolute left-1/2 -translate-x-1/2">
          {NavLinks.map((link) => (
            <Link key={link.id} href={link.url} className="text-lg hover:text-cyan-300 text-white font-medium transition-all duration-200">
              <p>{link.label}</p>
            </Link>
          ))}
        </div>
        {/* 按钮 */}
        <div className="flex items-center space-x-4">
          <button className="px-7 py-2.5 cursor-pointer rounded-lg bg-blue-800 hover:bg-blue-900 transition-all duration-300 text-white flex items-center space-x-2">
            <BiDownload className="w-5 h-5" />
            <span>下载简历</span>
          </button>
          {/* 折叠导航菜单 */}
          <HiBars3BottomRight onClick={openNav} className="w-8 h-8 cursor-pointer text-white lg:hidden" />
        </div>
      </div>
    </div>
  );
}

export default Nav;