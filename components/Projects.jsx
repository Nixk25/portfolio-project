"use client";

import React from "react";
import Brewtique from "../public/brewtique.png";
import Cars from "../public/cars.png";
import Vyziva from "../public/vyziva.png";
import OldPort from "../public/old-port.png";
import HouseFix from "../public/housefix.png";
import { Button } from "./ui/button";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Link from "next/link";

const projects = [
  {
    name: "Rentopia",
    desc: "Rentopia is a web application developed using a modern framework for React.js called Next.js. The application is used to view information about different types of cars, and the data is retrieved through an API. The project is built on HTML5, JavaScript, Next.js and Tailwind CSS, which provides a modern and responsive user interface.",
    image: Cars,
    url: "https://car-webpage.vercel.app/",
    git: "https://github.com/Nixk25/car_webpage",
  },
  {
    name: "Brewtique",
    desc: "Brewtique is a website developed using HTML5, CSS3 and React.js. This website serves as a virtual space for an imaginary cafe called Brewtique. Users can browse through a menu of coffee and other delicacies.",
    image: Brewtique,
    url: "https://brewtique.netlify.app/",
    git: "https://github.com/Nixk25/Coffee-Shop",
  },
  {
    name: "Nutritional counselling Lucie",
    desc: "Nutrition Lucie is a web-based eshop that combines the functions of an online store with nutritional information elements. This project was developed using HTML5, CSS3, React.js, Stripe and Commerce.js. Nutrition Lucie offers users the opportunity to shop for nutritional products and get relevant information regarding proper nutrition. ",
    image: Vyziva,
    url: "https://nutritionallucie.netlify.app/",
    git: "https://github.com/Nixk25/Vyziva",
  },
  {
    name: "HouseFix",
    desc: "HouseFix is my first web project, which was created as a site for an imaginary construction company. The project uses basic technologies including HTML5, CSS3 and animate.css. This website is used to showcase a fictional construction company and its services.",
    image: HouseFix,
    url: "https://nixk25.github.io/build/",
    git: "https://github.com/Nixk25/build",
  },
  {
    name: "My old portfolio",
    desc: "My old portfolio is website that was used to showcase my best skills and projects. This site was created using basic web technologies including HTML5, CSS3 and JavaScript. It served as a space to showcase my past work, skills and experience in web development.",
    image: OldPort,
    url: "https://nicolasmelda.cz",
    git: "https://github.com/Nixk25/Portfolio",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="mb-[100px] sm:p-0 px-10">
      <h1 className="text-5xl font-bold leading-tighter tracking-tighter text-center my-10 w-full">
        Projects<span className="text-white">.</span>
      </h1>
      <div className="flex justify-center items-center gap-10 flex-wrap text-center">
        {projects.map((project, i) => (
          <div
            key={i}
            className="bg-white text-black p-5 rounded-md flex flex-col gap-5 project hover:scale-105 transition-transform  ease duration-300 border-[5px] border-transparent parent cursor-pointer"
          >
            <Image
              src={project.image}
              height={600}
              width={600}
              alt={`${project.name}`}
              className="rounded-md "
            />
            <p className=" font-semibold text-2xl">{project.name}</p>
            <div className="flex gap-5 justify-center items-center">
              <Button
                asChild
                className=" hover:scale-105 transition-transform ease duration-200 btn text-white border-none outline-none"
              >
                <a href={project.url} target="_blank">
                  Live Demo
                </a>
              </Button>
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="hover:scale-105 transition-transform ease duration-200 btn text-white border-none outline-none">
                    View More
                  </Button>
                </DialogTrigger>
                <DialogContent className="rounded-lg w-[80%] sm:w-full">
                  <DialogHeader className="flex justify-center items-center gap-3 flex-col w-full">
                    <Image
                      src={project.image}
                      className=" w-full border-2 border-black rounded-lg my-4 "
                    />
                    <DialogTitle className="text-black text-2xl w-full  text-center ">
                      {project.name}
                    </DialogTitle>
                    <DialogDescription className="w-full h-max text-center">
                      {project.desc}
                    </DialogDescription>
                  </DialogHeader>
                  <DialogFooter className="mt-3 w-full">
                    <Button
                      className="bg-black text-white hover:scale-105 hover:bg-black hover:text-white transition-transform ease duration-300 "
                      asChild
                    >
                      <Link href={project.git} target="_blank">
                        View source code
                      </Link>
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
