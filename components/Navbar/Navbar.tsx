import React from "react";
import Menu from "./Menu";
const Navbar = () => {
  return (
    <div className="fixed top-0   left-0 z-[20] p-5 flex justify-between item-center w-full ">
      <span className="font text-[30px]">N</span>
      <Menu />
    </div>
  );
};

export default Navbar;
