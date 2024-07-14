"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { useRef, useState } from "react";
import { FaHome, FaUser, FaCode } from "react-icons/fa";
import { MdOutlineWork } from "react-icons/md";
import { AiFillMessage } from "react-icons/ai";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";
import Link from "next/link";
import AudioPlayer from "./AudioPlayer";
const navLinks = [
  {
    id: 1,
    href: "/",
    name: "Home",
    icon: <FaHome />,
  },
  {
    id: 2,
    href: "#about",
    name: "About Me",
    icon: <FaUser />,
  },
  {
    id: 3,
    href: "#skills",
    name: "Technologies",
    icon: <FaCode />,
  },
  {
    id: 4,
    href: "#projects",
    name: "My Work",
    icon: <MdOutlineWork />,
  },
  {
    id: 5,
    href: "#contact",
    name: "Contact",
    icon: <AiFillMessage />,
  },
];
function Dock() {
  const [isHidden, setIsHidden] = useState(false);
  const { scrollY } = useScroll();

  let mouseX = useMotionValue(Infinity);
  useMotionValueEvent(scrollY, "change", (latest) => {
    const prev = scrollY.getPrevious();
    if (latest > prev && latest > 150) {
      setIsHidden(true);
    } else {
      setIsHidden(false);
    }
  });
  return (
    <>
      <motion.nav
        variants={{
          visible: { opacity: 1, y: 0, x: "-50%" },
          hidden: { opacity: 0, y: "-100%" },
        }}
        initial={{ y: -100, x: "-50%" }}
        animate={isHidden ? "hidden" : "visible"}
        transition={{
          type: "spring",
          duration: 1,
          stiffness: 260,
          damping: 20,
        }}
        onMouseMove={(e) => mouseX.set(e.pageX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        className="fixed z-50 items-center hidden h-16 gap-4 px-4 py-3 -translate-x-1/2 sm:flex left-1/2 top-10 rounded-2xl backdrop-blur-lg"
      >
        {navLinks.map((icon) => (
          <AppIcon
            mouseX={mouseX}
            key={icon.id}
            icon={icon.icon}
            name={icon.name}
            href={icon.href}
          />
        ))}
      </motion.nav>
      <div className="fixed right-4 z-50 top-2  sm:top-[90%] ">
        <AudioPlayer />
      </div>
    </>
  );
}

const AppIcon = ({ mouseX, icon, name, href }) => {
  let ref = useRef(null);

  let distance = useTransform(mouseX, (val) => {
    let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };

    return val - bounds.x - bounds.width / 2;
  });

  let widthSync = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
  let width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });

  return (
    <Link href={href}>
      <HoverCard>
        <HoverCardTrigger asChild>
          <motion.div
            ref={ref}
            style={{ width }}
            className="relative transition-all duration-75 bg-white rounded-full hover:bg-primary aspect-square"
          >
            <span className="absolute text-black -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
              {icon}
            </span>
          </motion.div>
        </HoverCardTrigger>
        <HoverCardContent>{name}</HoverCardContent>
      </HoverCard>
    </Link>
  );
};

export default Dock;
