import React from "react";

const navLinks = [
  { href: "#home", title: "Home" },
  { href: "#about", title: "About" },
  { href: "#skills", title: "Skills" },
  { href: "#projects", title: "Projects" },
  { href: "#contact", title: "Contact" },
];

const Navbar = () => {
  return (
    <nav className=" z-20 bg-accent shadow-2xl sm:flex hidden text-black p-3 px-7 mt-5 fixed top-0 left-[50%] translate-x-[-50%] rounded-full  gap-2 text-base text-[9px]">
      {navLinks.map((link, i) => (
        <a
          key={i}
          className="links bg-transparent hover:bg-secondary hover:text-text duration-200 ease p-2 px-3 rounded-2xl cursor-pointer"
          href={link.href}
        >
          {link.title}
        </a>
      ))}
    </nav>
  );
};

export default Navbar;
