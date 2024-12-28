import React from "react";
import Menu from "./Menu";
import Link from "next/link";
const Navbar = () => {
  return (
    <div className="fixed top-0   left-0 z-[20] p-5 flex justify-between item-center w-full ">
      <Link href="/" className="logo text-[30px]">
        N
      </Link>
      <Menu />
    </div>
  );
};

export default Navbar;
