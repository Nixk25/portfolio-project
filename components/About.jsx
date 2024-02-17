"use client";
import React from "react";
import { MaskContainer } from "./ui/svg-mask-effect";
import { motion } from "framer-motion";

const About = () => {
  const aboutText =
    "Hi, I'm Nicolas, your future Front-End developer and passionate student from the heart of Europe! I'm currently immersed in the world of web technologies at university in Pardubice. For me, programming is not justa job, it's a lifestyle and also my cause of impostor syndrome. My pathat university gives me a solid foundation in the web world, which I combine with my passion for React.js and creativity.";
  return (
    <section className="h-max w-full flex items-center justify-center  overflow-hidden flex-col  text-center ">
      <motion.h1
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="text-5xl font-bold leading-tighter tracking-tighter mt-8"
      >
        About Me<span className="text-white ">.</span>
      </motion.h1>
      <MaskContainer
        revealSize={300}
        revealText={
          <p className=" text-center  md:text-slate-800 text-white  text-lg md:text-4xl font-bold">
            Hi, I'm Nicolas, your future Front-End developer and passionate
            student from the heart of Europe! I'm currently immersed in the
            world of web technologies at university in Pardubice. For me,
            programming is not just a job, it's a lifestyle and also my cause of
            impostor syndrome. My path at university gives me a solid foundation
            in the web world, which I combine with my passion for React.js and
            creativity.
          </p>
        }
        className="h-max rounded-md text-center hidden md:flex"
      >
        Hi, I'm Nicolas, your{" "}
        <span className="text-primary">hopefully new</span> Front-End developer
        and <span className="text-primary">haha no</span> student from the heart
        of Europe! I'm currently in the world of web technologies at university
        in Pardubice. For me, programming is not just a job, it's a lifestyle
        and also my cause of <span className="text-primary">i love it</span>. My
        path at university gives me a solid foundation in the web world, which I
        combine with my passion for React.js and creativity.
      </MaskContainer>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className=" mt-3 md:hidden max-w-[80%] font-medium text-sm sm:text-base"
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
