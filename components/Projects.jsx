"use client";

import React from "react";
import tnrb from "../public/tnrband.png";
import Brewtique from "../public/brewtique.png";
import Cars from "../public/cars.png";
import Vyziva from "../public/vyziva.png";
import HouseFix from "../public/housefix.png";
import cookifyImg from "../public/cookify.png";
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
    name: "TNR-Band",
    desc: "TNR-Band, my recent commercial project, harmonizes Next.js, Next-auth, MongoDB, Node.js, Tailwind CSS, Shadcn. After login you can add, remove or edit concerts, also concerts are automatically transfered to previous concerts. Login is hidden because only admin can use it.",
    image: tnrb,
    url: "https://tnr-band.vercel.app/",
    git: "https://github.com/Nixk25/Eda",
    color: "#FF930F",
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
  const cookifyDesc =
    "Cookify is a web application designed for culinary enthusiasts. It’s built using a robust tech stack that includes Next.js, Tailwind CSS, Node.js, MongoDB, and NextAuth.js. The application serves as a platform for users to explore, modify, and manage cooking recipes. It offers a user-friendly interface where users can view individual recipes in detail. Users can also add their favorite recipes to a personalized collection for easy access. One of the key features of Cookify is its user management system. It allows users to register and log in to their accounts, providing a personalized experience for each user. In the near future, Cookify will be available online.";
  return (
    <section id="projects" className="mb-[100px] sm:p-0 px-10 container ">
      <h1 className="w-full my-10 text-5xl font-bold tracking-tighter text-center leading-tighter">
        Projects<span className="text-white">.</span>
      </h1>
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full max-w-[80%]  m-auto "
      >
        <CarouselContent>
          <CarouselItem className="md:basis-1/2 cursor-grab 2xl:basis-1/3 3xl:basis-1/4 ">
            <div className="p-1">
              <Card className="rounded-md ">
                <CardContent className="flex flex-col items-center justify-center p-0 text-center ">
                  <div className="relative mb-5">
                    <div className="absolute inset-0 w-full h-full pb-5 border-none rounded-md outline-none bg-black/70" />
                    <span className="absolute text-3xl font-bold text-white -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 ">
                      Comming soon..
                    </span>
                    <Image
                      placeholder="blur"
                      src={cookifyImg}
                      alt="Cookify"
                      className="object-cover border-transparent rounded-md outline-none"
                    />
                  </div>
                  <div className="p-1">
                    <h2 className="px-6 mb-5 text-2xl font-semibold ">
                      Cookify
                    </h2>
                    <p className="sm:max-w-[400px] sm:block hidden whitespace-nowrap mb-5 overflow-hidden text-ellipsis ">
                      {cookifyDesc}
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-5 pb-5 ">
                      <Button
                        asChild
                        className="text-white transition-transform duration-200 border-none outline-none hover:scale-105 ease"
                      ></Button>

                      <Dialog className="w-[200px] h-[200px]  ">
                        <DialogTrigger asChild>
                          <Button
                            asChild
                            className="text-white transition-transform duration-200 border-none outline-none cursor-pointer hover:scale-105 ease"
                          >
                            <motion.span
                              initial={{ backgroundColor: "#dbc1ac" }}
                              whileHover={{ backgroundColor: "#57C2A9" }}
                              transition={{ duration: 0.2 }}
                            >
                              View More
                            </motion.span>
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="border-4 overflow-y-auto max-h-[70%] border-[#57C2A9]  rounded-lg w-[80%] sm:w-full">
                          <DialogHeader className="flex flex-col items-center justify-center w-full gap-3">
                            <Image
                              placeholder="blur"
                              src={cookifyImg}
                              className="w-full my-4 rounded-md shadow-lg "
                            />
                            <DialogTitle className="w-full text-[#57C2A9] text-2xl text-center font-bold ">
                              Cookify
                            </DialogTitle>
                            <DialogDescription className="text-center">
                              {cookifyDesc.split("").map((letter, i) => (
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
                            </DialogDescription>
                          </DialogHeader>
                          <DialogFooter className="w-full mt-3">
                            <Button asChild className="text-white">
                              <a
                                className="bg-[#57C2A9]"
                                href="https://github.com/Nixk25/rocnikovy-projekt"
                                target="_blank"
                              >
                                View source code
                              </a>
                            </Button>
                          </DialogFooter>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          {projects.map((project, i) => (
            <CarouselItem
              key={i}
              className="md:basis-1/2 cursor-grab 2xl:basis-1/3 3xl:basis-1/4 "
            >
              <div className="p-1">
                <Card className="rounded-md ">
                  <CardContent className="flex flex-col items-center justify-center p-0 text-center ">
                    <div className="h-1/2">
                      <Image
                        placeholder="blur"
                        src={project.image}
                        alt={project.name}
                        className="object-cover h-full pb-5 border-transparent rounded-md outline-none"
                      />
                    </div>
                    <div className="p-1">
                      <h2 className="px-6 mb-5 text-2xl font-semibold ">
                        {project.name}
                      </h2>
                      <p className="sm:max-w-[400px] sm:block hidden whitespace-nowrap mb-5 overflow-hidden text-ellipsis ">
                        {project.desc}
                      </p>
                      <div className="flex flex-wrap items-center justify-center gap-5 pb-5 ">
                        <Button
                          asChild
                          className="text-white transition-transform duration-200 border-none outline-none hover:scale-105 ease"
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
                              className="text-white transition-transform duration-200 border-none outline-none cursor-pointer hover:scale-105 ease"
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
                          <DialogContent
                            className="border-4 rounded-lg w-[80%] sm:w-full overflow-y-auto max-h-[70%]"
                            style={{ borderColor: project.color }}
                          >
                            <DialogHeader className="flex flex-col items-center justify-center w-full gap-3">
                              <Image
                                placeholder="blur"
                                src={project.image}
                                className="w-full my-4 rounded-md shadow-lg "
                              />
                              <DialogTitle
                                className="w-full text-2xl font-bold text-center "
                                style={{ color: project.color }}
                              >
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
                            <DialogFooter className="w-full mt-3">
                              <Button asChild className="text-white">
                                <a
                                  style={{ backgroundColor: project.color }}
                                  href={project.git}
                                  target="_blank"
                                >
                                  View source code
                                </a>
                              </Button>
                            </DialogFooter>
                          </DialogContent>
                        </Dialog>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="text-black " />
        <CarouselNext className="text-black " />
      </Carousel>
    </section>
  );
};

export default Projects;
