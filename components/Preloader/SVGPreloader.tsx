"use client";
import React from "react";
import { motion } from "motion/react";
const SVGPreloader = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 3 }}
      className="bg-[#252525]  h-full w-full flex
items-center justify-center"
    >
      <svg
        className=" relative z-[2]  "
        width="244"
        height="254"
        viewBox="0 0 260 260"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          className="h-full relative z-10"
          strokeWidth="5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          d="M1.50003 140.5C-1.29997 159.3 2.6667 204.333 5.00003 224.5C6 229.5 23 251 40.5 252C58 253 66 245 67.5 244.5C69 244 75.5 235 76.5 226.5C77.5 218 76.5 211 75.5 204.5C74.7 199.3 69.8333 186 67.5 180L47 130.5C40 112.333 25.5 75.1 23.5 71.5C21 67 19.5 46.5 24.5 34C28.5 24 41.8333 20.1667 48 19.5H49C51.5 19.5 70.5 24 68.5 37.5C66.5 51 67 61.5 64.5 75C62.5 85.8 74 112.5 80 124.5L106 160C120.833 181 151.5 224.1 155.5 228.5C160.5 234 177.5 258.5 197 251.5C216.5 244.5 214 239 218 235.5C221.2 232.7 224.333 219 225.5 212.5L230 170C232.167 148 237.5 96.9 241.5 68.5C246.5 33 236.5 20.5 234 16.5C231.5 12.5 222.5 -3.5 194 2.5C165.5 8.5 170.5 39.5 169.5 44.5C168.5 49.5 175.5 82 186.5 100.5C197.5 119 208.5 165.5 212.5 174C216.5 182.5 196.5 192 189.5 178.5C182.5 165 115.5 68.5 106 48.5C96.5 28.5 78 9.5 65.5 4.5C53 -0.5 51.5 -0.5 28.5 4.5C10.1 8.5 3.83333 38.8333 3 53.5C3.66668 74.6667 4.30003 121.7 1.50003 140.5Z"
          stroke="white"
        />
      </svg>
    </motion.div>
  );
};

export default SVGPreloader;
