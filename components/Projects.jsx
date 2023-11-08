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
import { DialogClose } from "@radix-ui/react-dialog";

const projects = [
  {
    name: "Rentopia",
    desc: "aidasjdihasuid asdzas ápdzasodiasdzas opdasiodzaduasioduas dziuasodasiozpsapdzoiaszdasdziasodasiodjaskldjasko   dasopdasopd uasúopdoasd asdoasodsaodsaosad a",
    image: Cars,
    url: "https://car-webpage.vercel.app/",
    git: "https://github.com/Nixk25/car_webpage",
  },
  {
    name: "Brewtique",
    desc: "aidasjdihasuid asdzas ápdzasodiasdzas opdasiodzaduasioduas dziuasodasiozpsapdzoiaszdasdziasodasiodjaskldjasko   dasopdasopd uasúopdoasd asdoasodsaodsaosad a",
    image: Brewtique,
    url: "https://brewtique.netlify.app/",
    git: "https://github.com/Nixk25/Coffee-Shop",
  },
  {
    name: "Nutritional counselling Lucie",
    desc: "aidasjdihasuid asdzas ápdzasodiasdzas opdasiodzaduasioduas dziuasodasiozpsapdzoiaszdasdziasodasiodjaskldjasko   dasopdasopd uasúopdoasd asdoasodsaodsaosad a",
    image: Vyziva,
    url: "https://nutritionallucie.netlify.app/",
    git: "https://github.com/Nixk25/Vyziva",
  },
  {
    name: "HouseFix",
    desc: "aidasjdihasuid asdzas ápdzasodiasdzas opdasiodzaduasioduas dziuasodasiozpsapdzoiaszdasdziasodasiodjaskldjasko   dasopdasopd uasúopdoasd asdoasodsaodsaosad a",
    image: HouseFix,
    url: "https://nixk25.github.io/build/",
    git: "https://github.com/Nixk25/build",
  },
  {
    name: "My old portfolio",
    desc: "aidasjdihasuid asdzas ápdzasodiasdzas opdasiodzaduasioduas dziuasodasiozpsapdzoiaszdasdziasodasiodjaskldjasko   dasopdasopd uasúopdoasd asdoasodsaodsaosad a",
    image: OldPort,
    url: "https://nicolasmelda.cz",
    git: "https://github.com/Nixk25/Portfolio",
  },
];

const Projects = () => {
  return (
    <section className="mb-[200px]">
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
                <DialogContent>
                  <DialogHeader className="flex justify-center items-center gap-3 flex-col">
                    <Image
                      src={project.image}
                      className="w-full border-2 border-black rounded-lg my-4"
                    />
                    <DialogTitle className="text-black text-2xl  text-center ">
                      {project.name}
                    </DialogTitle>
                    <DialogDescription className="text-center">
                      {project.desc}
                    </DialogDescription>
                  </DialogHeader>
                  <DialogFooter className="mt-3">
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
