"use client";
import React, { useEffect, useRef } from "react";
import { useInView } from "motion/react"; // Import useInView
import { useAppContext } from "@/app/AppContext";

const ProjectsContent = () => {
  const ref = useRef(null);
  const { setIsBlackBg } = useAppContext();

  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      setIsBlackBg(true);
    } else {
      setIsBlackBg(false);
    }
  }, [isInView, setIsBlackBg]);

  return (
    <div ref={ref} className="h-[200vh] bg-black relative z-10 text-white">
      ProjectsContent
    </div>
  );
};

export default ProjectsContent;
