import { NavLinks } from "@/constant/constant";

import Link from "next/link";
import { CgClose } from "react-icons/cg";

type MobileNavProps = {
  showNav: boolean;
  closeNav: () => void;
}

const MobileNav = ({ showNav, closeNav }: MobileNavProps) => {
  const navOpen = showNav ? 'translate-x-0' : 'translate-x-full';

  return (
    <div>
      {/* 覆盖层 */}
      <div className={`${navOpen} fixed inset-0 z-[100000] bg-black/70 transition-all duration-500`}></div>
      {/* 导航栏 */}
      <div className={`${navOpen} fixed right-0 top-0 z-[100010] h-full w-[80%] sm:w-[60%] flex flex-col justify-center space-y-6 bg-cyan-800 text-white transition-transform duration-500 delay-300`}>
        {NavLinks.map((link) => (
          <Link key={link.id} href={link.url} className="text-white w-fit text-xl ml-12 border-b-2 pb-1 border-white sm:text-[30px]">
            <p>{link.label}</p>
          </Link>
        ))}
        {/* 关闭按钮 */}
        <CgClose onClick={closeNav} className="absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6" />
      </div>
    </div>
  );
}

export default MobileNav;