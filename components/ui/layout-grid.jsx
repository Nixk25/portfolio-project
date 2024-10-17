"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn.js";
import Image from "next/image";
import { ScrollArea } from "./scroll-area";

export const LayoutGrid = ({ cards }) => {
  const [selected, setSelected] = useState(null);
  const [lastSelected, setLastSelected] = useState(null);
  const [isClicked, setIsClicked] = useState(false);
  const selectedCardRef = useRef(null);

  const handleClick = (card) => {
    setLastSelected(selected);
    setSelected(card);
    setIsClicked(true);

    if (selectedCardRef.current) {
      selectedCardRef.current.scrollTo(0, 0);
    }
  };

  const handleOutsideClick = () => {
    setLastSelected(selected);
    setSelected(null);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelected(null);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="grid w-full h-full grid-cols-1 gap-4 p-10 mx-auto md:grid-cols-3 max-w-7xl ">
      {cards.map((card, i) => (
        <div key={i} className={cn(card.className, "")}>
          <motion.div
            initial={{ y: 50, filter: "blur(20px)" }}
            whileInView={{ y: 0, filter: "blur(0px)" }}
            transition={{
              delay: isClicked ? 0 : i * 0.2,
              duration: isClicked ? 0.3 : 1,
            }}
            viewport={{ once: true }}
            onClick={() => handleClick(card)}
            className={cn(
              card.className,
              "relative overflow-auto cursor-pointer",
              selected?.id === card.id
                ? "rounded-lg fixed inset-0 max-h-[520px] md:w-1/2 w-[80%] m-auto z-50 flex justify-center items-center flex-wrap flex-col "
                : lastSelected?.id === card.id
                ? "z-40 bg-white rounded-xl w-full"
                : "bg-white rounded-xl w-full"
            )}
            layout
            ref={selected?.id === card.id ? selectedCardRef : null}
          >
            {selected?.id === card.id && <SelectedCard selected={selected} />}
            <BlurImage card={card} />
          </motion.div>
        </div>
      ))}
      <motion.div
        onClick={handleOutsideClick}
        className={cn(
          "absolute h-full w-full left-0 top-0 bg-black opacity-0 z-10",
          selected?.id ? "pointer-events-auto" : "pointer-events-none"
        )}
        animate={{ opacity: selected?.id ? 0.3 : 0 }}
      />
    </div>
  );
};

const BlurImage = ({ card }) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <Image
      src={card.thumbnail}
      height="500"
      width="500"
      onLoad={() => setLoaded(true)}
      className={cn(
        "object-cover object-center absolute inset-0 h-full w-full transition duration-200",
        loaded ? "blur-none" : "blur-md"
      )}
      alt="thumbnail"
    />
  );
};

const SelectedCard = ({ selected }) => {
  return (
    <ScrollArea className="bg-transparent h-full w-full flex flex-col justify-end relative z-[60]">
      <div>
        <motion.div
          initial={{
            opacity: 0,
            borderColor: selected.color,
          }}
          animate={{
            opacity: 0.6,
          }}
          className="absolute inset-0 z-10 w-full h-full bg-black border-4 rounded-lg"
        />
        <motion.div
          initial={{
            opacity: 0,
            y: 100,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
          className="relative px-5 py-10 z-[70]"
        >
          {selected.content}
        </motion.div>
      </div>
    </ScrollArea>
  );
};
