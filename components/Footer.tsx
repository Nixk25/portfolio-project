import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer
      id="contact"
      className="z-10 relative flex justify-center items-center h-[850px]"
      style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
    >
      <div className="fixed h-[700px]  bottom-0 flex flex-col justify-center items-center w-full">
        <div className="flex flex-col justify-center items-center w-full h-full">
          <a
            href="https://cal.com/nicolasmelda/30min"
            target="_blank"
            className=" font-bold text-center footerHeadline leading-[0.8]  font"
          >
            Click to start
          </a>
          <p className="text-lg text-center text-slate-500 mt-10">
            Have a vision? I&apos;m here to bring it to life. Let&apos;s chat!
          </p>
          <div className="flex w-full justify-start mt-20">
            <p className="text-[1.8rem] md:text-[2.5rem]  font-thin leading-[1.2]  md:max-w-[50%] text-start mx-5">
              Have a story waiting to be heard? Let&apos;s make
              it&nbsp;unforgettable—reach&nbsp;out&nbsp;now!
            </p>
          </div>
          <div className="absolute flex-col md:flex-row  bottom-2 px-5 flex justify-between items-center w-full">
            <a
              href="mailto:nicolas.melda@icloud.com"
              className="cursor-pointer text-sm md:text-base xl:text-lg"
            >
              Send me email
            </a>
            <p className="text-slate-600 text-xs">
              I can&apos;t wait to see what we can create together.
            </p>

            <Link
              href="/"
              className="logo absolute md:relative right-5 text-[30px] text-black"
            >
              N
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
