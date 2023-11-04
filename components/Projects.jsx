import React from "react";
import Brewtique from "../public/brewtique.png";
import Cars from "../public/cars.png";
import Vyziva from "../public/vyziva.png";
import OldPort from "../public/old-port.png";
import HouseFix from "../public/housefix.png";
import { Button } from "./ui/button";
import Image from "next/image";

const projects = [
  {
    name: "Rentopia",
    desc: "aidasjdihasuid asdzas ápdzasodiasdzas opdasiodzaduasioduas dziuasodasiozpsapdzoiaszdasdziasodasiodjaskldjasko   dasopdasopd uasúopdoasd asdoasodsaodsaosad a",
    image: Cars,
    url: "https://car-webpage.vercel.app/",
  },
  {
    name: "Brewtique",
    desc: "aidasjdihasuid asdzas ápdzasodiasdzas opdasiodzaduasioduas dziuasodasiozpsapdzoiaszdasdziasodasiodjaskldjasko   dasopdasopd uasúopdoasd asdoasodsaodsaosad a",
    image: Brewtique,
    url: "https://brewtique.netlify.app/",
  },
  {
    name: "Nutritional counselling Lucie",
    desc: "aidasjdihasuid asdzas ápdzasodiasdzas opdasiodzaduasioduas dziuasodasiozpsapdzoiaszdasdziasodasiodjaskldjasko   dasopdasopd uasúopdoasd asdoasodsaodsaosad a",
    image: Vyziva,
    url: "https://nutritionallucie.netlify.app/",
  },
  {
    name: "HouseFix",
    desc: "aidasjdihasuid asdzas ápdzasodiasdzas opdasiodzaduasioduas dziuasodasiozpsapdzoiaszdasdziasodasiodjaskldjasko   dasopdasopd uasúopdoasd asdoasodsaodsaosad a",
    image: HouseFix,
    url: "https://nixk25.github.io/build/",
  },
  {
    name: "My old portfolio",
    desc: "aidasjdihasuid asdzas ápdzasodiasdzas opdasiodzaduasioduas dziuasodasiozpsapdzoiaszdasdziasodasiodjaskldjasko   dasopdasopd uasúopdoasd asdoasodsaodsaosad a",
    image: OldPort,
    url: "https://nicolasmelda.cz",
  },
];

const Projects = () => {
  return (
    <section>
      <h1 className="text-5xl font-bold leading-tighter tracking-tighter text-center my-10 w-full">
        Projects<span className="text-white">.</span>
      </h1>
      <div className="flex justify-center items-center gap-10 flex-wrap text-center">
        {projects.map((project, i) => (
          <div
            key={i}
            className="bg-white text-black p-5 rounded-md flex flex-col gap-5 project hover:scale-105 transition-transform ease duration-200ms"
          >
            <Image
              src={project.image}
              height={600}
              width={600}
              alt={`${project.name}`}
              className="rounded-md image "
            />
            <p className=" font-semibold text-2xl">{project.name}</p>
            <div className="flex gap-5 justify-center items-center">
              <Button
                asChild
                className=" hover:scale-105 transition-transform ease duration-200"
              >
                <a href={project.url} target="_blank">
                  Live Demo
                </a>
              </Button>
              <Button classname="hover:scale-105 transition-transform ease duration-200">
                View More
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
