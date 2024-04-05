"use client";

import { motion } from "framer-motion";

const About = () => {
  const aboutText =
    "Hi, I'm Nicolas, your future Front-End developer and passionate student from the heart of Europe! I'm currently immersed in the world of web technologies at university in Pardubice. For me, programming is not just a job, it's a lifestyle and also my cause of impostorsyndrome. My path at university gives me a solid foundation in the web world, which I combine with my passion for React.js and creativity.";
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center w-full overflow-hidden text-center h-max"
    >
      <div className="container">
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="w-full my-8 text-5xl font-bold tracking-tighter text-center leading-tighter"
        >
          About me<span className="text-white ">.</span>
        </motion.h1>
        {aboutText.split(" ").map((word, i) => (
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
      </div>
    </section>
  );
};

export default About;
