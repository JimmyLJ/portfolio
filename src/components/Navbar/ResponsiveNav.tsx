"use client"
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import { useState } from "react";

const ResponsiveNav = () => {
  const [showNav, setShowNav] = useState(false);

  const openNavHandler = () => { 
    setShowNav(true);
  }

  const closeNavHandler = () => {
    setShowNav(false);
    console.log('关闭导航栏', showNav);
    
  }

  return (
    <div>
      <Nav openNav={openNavHandler} />
      <MobileNav showNav={showNav} closeNav={closeNavHandler} />
    </div>
  );
}

export default ResponsiveNav;
