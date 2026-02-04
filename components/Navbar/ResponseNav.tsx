"use client";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import { useState } from "react";

export default function ResponseNav() {
  const [showNav, setShowNav] = useState(false);

  const openNavHandler = () => {
    setShowNav(true);
  };

  const closeNavHandler = () => {
    setShowNav(false);
  };

  return (
    <div>
      <Nav openNav={openNavHandler} />
      <MobileNav showNav={showNav} closeNav={closeNavHandler} />
    </div>
  );
}
