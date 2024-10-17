"use client";
import React from "react";
import { LayoutGrid } from "./ui/layout-grid";
import tnrb from "../public/tnrband.png";
import Brewtique from "../public/brewtique.png";
import Eclat from "../public/éclat.png";
import Vyziva from "../public/vyziva.png";
import HouseFix from "../public/housefix.png";
import cookifyImg from "../public/cookify.png";
import { Button } from "./ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
const Projects = () => {
  return (
    <div id="projects" className="relative w-full">
      <motion.h1
        initial={{ y: 50, filter: "blur(20px)" }}
        whileInView={{ y: 0, filter: "blur(0px)" }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="w-full my-8 text-5xl font-bold tracking-tighter text-center leading-tighter"
      >
        My Projects<span className="text-white ">.</span>
      </motion.h1>
      <LayoutGrid cards={cards} />
    </div>
  );
};

const SkeletonOne = () => {
  return (
    <div>
      <h2 className="text-4xl font-bold text-white">Cookify</h2>

      <p className="my-4 text-base font-normal text-neutral-200">
        Cookify is a web app for culinary enthusiasts with a demo login{" "}
        <pre className="mb-2 bg-white/10 w-max">email:admin@example.com</pre>
        <pre className="mb-2 bg-white/10 w-max">password:adminadmin</pre> Built
        with Next.js, Tailwind CSS, Node.js, MongoDB, NextAuth.js it allows
        users to explore and manage recipes. The app features a user-friendly
        interface and a user management system for personalized experiences,
        enabling users to save their favorite recipes.​
      </p>
      <div className="flex flex-wrap gap-5">
        <Link href="https://coookify.vercel.app" target="_blank">
          <Button className="bg-[#57C2A9] text-white">Live Demo</Button>
        </Link>
        <Link
          href="https://github.com/Nixk25/rocnikovy-projekt"
          target="_blank"
        >
          <Button className="bg-[#57C2A9] text-white" variant="ghost">
            View Code
          </Button>
        </Link>
      </div>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <h2 className="text-4xl font-bold text-white">TNR-Band</h2>

      <p className="my-4 text-base font-normal text-neutral-200">
        TNR-Band, my recent commercial project, harmonizes Next.js, Next-auth,
        MongoDB, Node.js, Tailwind CSS, Shadcn. After login you can add, remove
        or edit concerts, also concerts are automatically transfered to previous
        concerts. Login is hidden because only admin can use it.
      </p>
      <div className="flex flex-wrap gap-5">
        <Link href="https://tnr-band.vercel.app" target="_blank">
          <Button className="bg-[#FF930F]">Live Demo</Button>
        </Link>
        <Link href="https://github.com/Nixk25/Eda" target="_blank">
          <Button className="bg-[#FF930F] text-black" variant="ghost">
            View Code
          </Button>
        </Link>
      </div>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <h2 className="text-4xl font-bold text-white">Éclat Gallery</h2>

      <p className="my-4 text-base font-normal text-neutral-200">
        Éclat Gallery is built with Next.js, Framer Motion, Tailwind CSS, and
        shadcn/ui. It features interactive animations and a clean, modern
        design. The gallery showcases artwork from global artists with a focus
        on performance and user experience.
      </p>
      <div className="flex flex-wrap gap-5">
        <Link href="https://gallery-theta-seven.vercel.app/" target="_blank">
          <Button className="bg-[#F55751]">Live Demo</Button>
        </Link>
        <Link href="https://github.com/Nixk25/gallery" target="_blank">
          <Button className="bg-[#F55751] text-black" variant="ghost">
            View Code
          </Button>
        </Link>
      </div>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <h2 className="text-4xl font-bold text-white">Brewtique</h2>

      <p className="my-4 text-base font-normal text-neutral-200">
        Brewtique is a website developed using HTML5, CSS3 and React.js. This
        website serves as a virtual space for an imaginary cafe called
        Brewtique. Users can browse through a menu of coffee and other
        delicacies.
      </p>
      <div className="flex flex-wrap gap-5">
        <Link href="https://brewtique.netlify.app" target="_blank">
          <Button className="bg-[#d6873d]">Live Demo</Button>
        </Link>
        <Link href="https://github.com/Nixk25/Coffee-Shop" target="_blank">
          <Button className="bg-[#d6873d] text-black" variant="ghost">
            View Code
          </Button>
        </Link>
      </div>
    </div>
  );
};
const SkeletonFive = () => {
  return (
    <div>
      <h2 className="text-4xl font-bold text-white">
        Nutritional counselling Lucie
      </h2>

      <p className="my-4 text-base font-normal text-neutral-200">
        Nutrition Lucie is a website that combines the functions of an online
        store with nutritional information elements. This project was developed
        using React.js. Nutrition Lucie offers users the opportunity to get
        relevant information regarding proper nutrition.
      </p>
      <div className="flex flex-wrap gap-5">
        <Link href="https://vyzivalucie.cz" target="_blank">
          <Button className="bg-[#e18cbd] text-white">Live Demo</Button>
        </Link>
        <Link href="https://github.com/Nixk25/Vyziva" target="_blank">
          <Button className="bg-[#e18cbd] text-white" variant="ghost">
            View Code
          </Button>
        </Link>
      </div>
    </div>
  );
};
const SkeletonSix = () => {
  return (
    <div>
      <h2 className="text-4xl font-bold text-white">HouseFix</h2>

      <p className="my-4 text-base font-normal text-neutral-200">
        HouseFix is my first web project, which was created as a site for an
        imaginary construction company. The project uses basic technologies
        including HTML5, CSS3 and animate.css. This website is used to showcase
        a fictional construction company and its services.
      </p>
      <div className="flex flex-wrap gap-5">
        <Link href="https://nixk25.github.io/build" target="_blank">
          <Button className="bg-[#f9d546] text-white">Live Demo</Button>
        </Link>
        <Link href="https://github.com/Nixk25/build" target="_blank">
          <Button className="bg-[#f9d546] text-white" variant="ghost">
            View Code
          </Button>
        </Link>
      </div>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2 min-h-[100px]",
    thumbnail: cookifyImg,
    color: "#57C2A9",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1 min-h-[100px]",
    thumbnail: tnrb,
    color: "#FF930F",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1 min-h-[100px]",
    thumbnail: Eclat,
    color: "#F55751",
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2 min-h-[100px]",
    thumbnail: Brewtique,
    color: "#d6873d",
  },

  {
    id: 5,
    content: <SkeletonFive />,
    className: "md:col-span-2 min-h-[100px]",
    thumbnail: Vyziva,
    color: "#e18cbd",
  },
  {
    id: 6,
    content: <SkeletonSix />,
    className: "col-span-1 min-h-[100px]",
    thumbnail: HouseFix,
    color: "#f9d546",
  },
];

export default Projects;
