"use client";
import React from "react";
import { motion } from "framer-motion";
import MainText from "./MainText";
import SVGPreloader from "./SVGPreloader";

const Preloader = () => {
  return (
    <div
      className="h-[100svh] relative flex
    items-center justify-center   overflow-y-hidden  "
    >
      <SVGPreloader />
      <MainText />
    </div>
  );
};

export default Preloader;
