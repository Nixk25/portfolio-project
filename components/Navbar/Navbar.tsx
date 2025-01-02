import React from "react";
import Menu from "./Menu";
import Link from "next/link";
import { useAppContext } from "@/app/AppContext";

const Navbar = () => {
  const { isBlackBg } = useAppContext();

  return (
    <div className="fixed top-0 left-0 z-[20] p-5 flex justify-between items-center w-full">
      <Link
        href="/"
        className={`logo text-[30px] ${
          isBlackBg ? "text-white" : "text-black"
        }`}
      >
        N
      </Link>
      <Menu />
    </div>
  );
};

export default Navbar;
