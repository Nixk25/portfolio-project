"use client";
import { motion } from "framer-motion";
import CountUp from "react-countup";

const Circles = () => {
  const circles = [
    {
      desc: "Hours on my chair",
      number: 1000,
    },
    {
      desc: "Tutorials watched",
      number: 2000,
    },
    {
      desc: "Bugs fixed",
      number: 10000,
    },
    {
      desc: "Hours cried",
      number: 50,
    },
  ];
  return (
    <section className="container flex justify-center mb-20 ">
      <motion.div
        initial={{ y: 200, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, type: "spring" }}
        className="my-5 flex gap-10 text-center text-white sm:flex-row flex-col justify-between items-center flex-wrap w-full max-w-[80%] rounded-lg numbers "
      >
        {circles.map((circle, i) => (
          <div
            className="flex flex-col items-center justify-center gap-3 p-10"
            key={i}
          >
            <div className="name">
              <h2 className="text-2xl font-bold">
                <CountUp start={0} end={circle.number} duration={3} />+
              </h2>

              <p>{circle.desc}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default Circles;
