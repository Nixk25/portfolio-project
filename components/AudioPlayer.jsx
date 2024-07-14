"use client";
import React, { useState, useEffect, useRef } from "react";
import { Button } from "./ui/button";
import { MdMusicNote, MdMusicOff } from "react-icons/md";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

const AudioPlayer = () => {
  const [isHidden, setIsHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const prev = scrollY.getPrevious();
    if (latest > prev && latest > 100) {
      setIsHidden(true);
    } else {
      setIsHidden(false);
    }
  });
  const [isPlaying, setIsPlaying] = useState(false);

  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.1;
    }

    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <TooltipProvider>
      <motion.div
        variants={{
          visible: { opacity: 1, y: 0, x: "-50%" },
          hidden: { opacity: 0, y: "-100%" },
        }}
        initial={{ y: -100, x: "-50%" }}
        animate={isHidden ? "hidden" : "visible"}
        transition={{
          type: "spring",
          duration: 1,
          stiffness: 260,
          damping: 20,
        }}
        className="relative"
      >
        <audio ref={audioRef} src="/calmSound.mp3" loop />
        <Tooltip>
          <TooltipTrigger>
            <div
              className="p-3 transition-colors duration-300 bg-white rounded-md cursor-pointer text-gray-950 "
              onClick={togglePlay}
            >
              {isPlaying ? <MdMusicNote /> : <MdMusicOff />}
            </div>
          </TooltipTrigger>
          <TooltipContent className="bg-white text-gray-950">
            <p>{isPlaying ? "Pause music" : "Play music"}</p>
          </TooltipContent>
        </Tooltip>
      </motion.div>
    </TooltipProvider>
  );
};

export default AudioPlayer;
