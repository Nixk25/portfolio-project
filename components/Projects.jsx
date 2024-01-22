"use client";

import React from "react";
import Brewtique from "../public/brewtique.png";
import Cars from "../public/cars.png";
import Vyziva from "../public/vyziva.png";
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
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const projects = [
  {
    name: "Rentopia",
    desc: "Rentopia is a web application developed using a modern framework for React.js called Next.js. The application is used to view information about different types of cars, and the data is retrieved through an API. The project is built on HTML5, JavaScript, Next.js and Tailwind CSS, which provides a modern and responsive user interface.",
    image: Cars,
    url: "https://car-webpage.vercel.app/",
    git: "https://github.com/Nixk25/car_webpage",
    color: "#8ACFF1",
  },
  {
    name: "Brewtique",
    desc: "Brewtique is a website developed using HTML5, CSS3 and React.js. This website serves as a virtual space for an imaginary cafe called Brewtique. Users can browse through a menu of coffee and other delicacies.",
    image: Brewtique,
    url: "https://brewtique.netlify.app/",
    git: "https://github.com/Nixk25/Coffee-Shop",
    color: "#d6873d",
  },
  {
    name: "Nutritional counselling Lucie",
    desc: "Nutrition Lucie is a web-based eshop that combines the functions of an online store with nutritional information elements. This project was developed using HTML5, CSS3, React.js, Stripe and Commerce.js. Nutrition Lucie offers users the opportunity to shop for nutritional products and get relevant information regarding proper nutrition. ",
    image: Vyziva,
    url: "https://nutritionallucie.netlify.app/",
    git: "https://github.com/Nixk25/Vyziva",
    color: "#e18cbd",
  },
  {
    name: "HouseFix",
    desc: "HouseFix is my first web project, which was created as a site for an imaginary construction company. The project uses basic technologies including HTML5, CSS3 and animate.css. This website is used to showcase a fictional construction company and its services.",
    image: HouseFix,
    url: "https://nixk25.github.io/build/",
    git: "https://github.com/Nixk25/build",
    color: "#f9d546",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="mb-[100px] sm:p-0 px-10">
      <h1 className="text-5xl font-bold leading-tighter tracking-tighter text-center my-10 w-full">
        Projects<span className="text-white">.</span>
      </h1>
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full max-w-[80%]  m-auto "
      >
        <CarouselContent>
          {projects.map((project, i) => (
            <CarouselItem
              key={i}
              className="md:basis-1/2 cursor-grab 2xl:basis-1/3 3xl:basis-1/4  "
            >
              <div className="p-1">
                <Card className="sm:min-h-[350px] max-h-[400px]  rounded-md relative">
                  <CardContent className="flex flex-col items-center justify-center text-center p-0 ">
                    <Image
                      src={project.image}
                      height={600}
                      width={600}
                      alt={project.name}
                      className="rounded-md border-transparent outline-none max-h-[300px]   mb-5"
                    />
                    <h2 className=" font-semibold text-2xl px-6 mb-[150px] sm:mb-[70px]">
                      {project.name}
                    </h2>
                    <div className="flex flex-col sm:flex-row  gap-5 justify-center items-center absolute bottom-3 left-[50%] translate-x-[-50%]">
                      <Button
                        asChild
                        className=" hover:scale-105 transition-transform ease duration-200  text-white border-none outline-none"
                      >
                        <motion.a
                          initial={{ backgroundColor: "#dbc1ac" }}
                          whileHover={{ backgroundColor: project.color }}
                          transition={{ duration: 0.2 }}
                          href={project.url}
                          target="_blank"
                        >
                          Live Demo
                        </motion.a>
                      </Button>

                      <Dialog className="w-[200px] h-[200px] ">
                        <DialogTrigger asChild>
                          <Button
                            asChild
                            className="hover:scale-105 cursor-pointer transition-transform ease duration-200  text-white border-none outline-none"
                          >
                            <motion.span
                              initial={{ backgroundColor: "#dbc1ac" }}
                              whileHover={{ backgroundColor: project.color }}
                              transition={{ duration: 0.2 }}
                            >
                              View More
                            </motion.span>
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="rounded-lg w-[80%] sm:w-full">
                          <DialogHeader className="flex justify-center items-center gap-3 flex-col w-full">
                            <Image
                              src={project.image}
                              className=" w-full rounded-md shadow-lg  my-4 "
                            />
                            <DialogTitle className="text-black text-2xl w-full  text-center ">
                              {project.name}
                            </DialogTitle>
                            <DialogDescription className="text-center">
                              {project.desc.split("").map((letter, i) => (
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
                                  key={i}
                                >
                                  {letter}
                                </motion.span>
                              ))}
                            </DialogDescription>
                          </DialogHeader>
                          <DialogFooter className="mt-3 w-full">
                            <Button asChild className="text-white">
                              <motion.a
                                initial={{ backgroundColor: "#dbc1ac" }}
                                whileHover={{ backgroundColor: project.color }}
                                transition={{ duration: 0.2 }}
                                href={project.git}
                                target="_blank"
                              >
                                View source code
                              </motion.a>
                            </Button>
                          </DialogFooter>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className=" text-black" />
        <CarouselNext className=" text-black" />
      </Carousel>
    </section>
  );
};

export default Projects;
