"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export const About = () => {
  return (
    <section id="about" className="container bg-black">
      <TextParallaxContent
        subheading="Hi, I'm Nicolas, your future Front-End developer and passionate student from the heart of Europe! I'm currently immersed in the world of web technologies at university in Pardubice. For me, programming is not just a job, it's a lifestyle and also my cause of impostor syndrome. My path at university gives me a solid foundation in the web world, which I combine with my passion for React.js and creativity."
        heading="About Me."
      ></TextParallaxContent>
    </section>
  );
};

const IMG_PADDING = 12;

const TextParallaxContent = ({ subheading, heading, children }) => {
  return (
    <div
      style={{
        paddingLeft: IMG_PADDING,
        paddingRight: IMG_PADDING,
      }}
    >
      <div className="relative h-[120vh]">
        <OverlayCopy heading={heading} subheading={subheading} />
      </div>
      {children}
    </div>
  );
};

const OverlayCopy = ({ subheading, heading }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

  return (
    <motion.div
      style={{
        y,
        opacity,
      }}
      ref={targetRef}
      className={`absolute top-0 left-0 flex flex-col items-center justify-center w-full h-screen text-white backdrop-filter backdrop-blur-lg`}
    >
      <motion.div
        style={{
          filter: "revert",
        }}
        className="absolute top-0 left-0 w-full h-full bg-black opacity-50"
      />
      <h2 className="relative w-full my-8 text-5xl font-bold tracking-tighter text-center leading-tighter">
        {heading}
      </h2>
      <p className="relative mb-2 text-xl text-center md:mb-4 md:text-3xl">
        {subheading.split(" ").map((word, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
              delay: i * 0.05,
            }}
            viewport={{ once: true }}
          >
            {word + " "}
          </motion.span>
        ))}
      </p>
    </motion.div>
  );
};

export default About;
