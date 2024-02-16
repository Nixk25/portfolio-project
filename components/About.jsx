"use client";
import React from "react";
import { MaskContainer } from "./ui/svg-mask-effect";

const About = () => {
  return (
    <section className="h-max w-full flex items-center justify-center  overflow-hidden flex-col  ">
      <h1 className="text-5xl font-bold leading-tighter tracking-tighter text-center my-10 w-full">
        About Me<span className="text-white">.</span>
      </h1>
      <MaskContainer
        revealSize={300}
        revealText={
          <p className=" text-center  md:text-slate-800 text-white   text-4xl font-bold">
            Hi, I'm Nicolas, your future Front-End developer and passionate
            student from the heart of Europe! I'm currently immersed in the
            world of web technologies at university in Pardubice. For me,
            programming is not just a job, it's a lifestyle and also my cause of
            impostor syndrome. My path at university gives me a solid foundation
            in the web world, which I combine with my passion for React.js and
            creativity.
          </p>
        }
        className="h-max rounded-md text-center"
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
    </section>
  );
};

export default About;
