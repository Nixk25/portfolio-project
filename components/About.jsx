"use client";
import React from "react";
import { motion } from "framer-motion";

const About = () => {
  const aboutText =
    "Hi, I'm Nicolas, your future Front-End developer and passionate student from the heart of Europe! I'm currently immersed in the world of web technologies at university in Pardubice. For me, programming is not justa job, it's a lifestyle and also my cause of impostor syndrome. My pathat university gives me a solid foundation in the web world, which I combine with my passion for React.js and creativity.";
  return (
    <section
      id="about"
      className="bg-primary mt-20 p-5 pb-20 text-center flex justify-center items-center flex-col text-black w-full relative oveflow-hidden sec "
    >
      <div className=" z-[20] absolute xl:top-[-250px]  sm:top-[-200px] top-[-150px] left-0 bg-[url('../public/wave.svg')] bg-center bg-no-repeat bg-cover w-[105vw] h-[150px] xl:h-[300px]   sm:h-[220px] overflow-hidden"></div>
      <motion.h1
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="text-5xl font-bold leading-tighter tracking-tighter mt-8"
      >
        About Me<span className="text-white ">.</span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className=" mt-3 sm:max-w-[80%] font-medium text-sm sm:text-base"
      >
        {aboutText.split("").map((letter, i) => (
          <motion.span
            initial={{
              opacity: 0,
              y: -100,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.1,
                delay: 0.0055 * i,
              },
            }}
            viewport={{ once: true }}
            key={i}
          >
            {letter}
          </motion.span>
        ))}
      </motion.p>
    </section>
  );
};

export default About;
