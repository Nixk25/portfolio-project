import React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const TiltingCard = ({ name, icon, index }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    ["17.5deg", "-17.5deg"]
  );
  const rotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    ["-17.5deg", "17.5deg"]
  );

  const handleMouseMove = (e) => {
    const rect = e.target.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const variants = {
    initial: {
      opacity: 0,
      scale: 0.9,
      translateY: 200,
    },
    animate: {
      translateY: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: 0.1 * index,
      },
    },
  };

  return (
    <motion.div
      variants={variants}
      initial="initial"
      whileInView="animate"
      whileHover={{
        scale: 1.2,
      }}
      transition={{
        duration: 0.3,
        type: "spring",
        stiffness: 120,
      }}
      viewport={{ once: true }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      className={`relative h-40 w-52 rounded-lg bg-white cont`}
    >
      <p
        style={{
          transform: "translateZ(50px)",
        }}
        className="text-center text-2xl mt-3 font-bold text-black"
      >
        {name}
      </p>
      <p
        style={{
          transform: "translateZ(50px)",
        }}
        className=" text-black text-5xl absolute top-[40%] left-[38%] translate-x-[-50%] translate-y-[-50%] "
      >
        {icon}
      </p>
    </motion.div>
  );
};

export default TiltingCard;
