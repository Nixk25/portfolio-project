"use client";

import React from "react";
import { BiSolidTimeFive } from "react-icons/bi";
import { AiFillYoutube } from "react-icons/ai";
import { AiFillBug } from "react-icons/ai";
import { FaSadTear } from "react-icons/fa";
import CountUp from "react-countup";

const circles = [
  {
    icon: <BiSolidTimeFive />,
    desc: "Hours on my chair",
    number: 1000,
  },
  {
    icon: <AiFillYoutube />,
    desc: "Tutorials watched",
    number: 2000,
  },
  {
    icon: <AiFillBug />,
    desc: "Bugs fixed",
    number: 10000,
  },
  {
    icon: <FaSadTear />,
    desc: "Hours cried",
    number: 50,
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="bg-primary p-5 text-center flex justify-center items-center flex-col text-black w-full  "
    >
      <h1 className="text-5xl font-bold leading-tighter tracking-tighter">
        About Me<span className="text-white ">.</span>
      </h1>
      <p className=" mt-3 sm:max-w-[80%] mb-5 font-medium text-sm sm:text-base">
        Hi, I'm Nicolas, your future Front-End developer and passionate student
        from the heart of Europe! I'm currently immersed in the world of web
        technologies at university in Pardubice. For me, programming is not just
        a job, it's a lifestyle and also my cause of impostor syndrome. My path
        at university gives me a solid foundation in the web world, which I
        combine with my passion for React.js and creativity.
      </p>
      <div className="my-5 flex gap-10 sm:flex-row flex-col text-black justify-between items-center w-full max-w-[80%]">
        {circles.map((circle, i) => (
          <div
            className="flex justify-center items-center flex-col gap-3"
            key={i}
          >
            <div className="flex justify-center items-center border border-black rounded-full w-20 h-20 text-2xl">
              {circle.icon}
            </div>
            <div>
              <h2 className="text-2xl font-bold">
                <CountUp
                  start={0}
                  end={circle.number}
                  duration={4}
                  enableScrollSpy
                />
                +
              </h2>

              <p>{circle.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
