"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";

const Cursor = () => {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const pathRef = useRef<SVGPathElement | null>(null);
  const points = useRef<{ x: number; y: number }[]>([]);
  const [isClient, setIsClient] = useState(false);
  const isLaptop = useMediaQuery({ minWidth: 768 });
  const MAX_POINTS = 10;

  const move = (e: MouseEvent) => {
    const x = e.clientX;
    const y = e.clientY;

    points.current.push({ x, y });

    if (points.current.length > MAX_POINTS) {
      points.current.shift();
    }

    const pathData = points.current
      .map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`)
      .join(" ");

    if (pathRef.current) {
      pathRef.current.setAttribute("d", pathData);
    }
  };

  useEffect(() => {
    window.addEventListener("mousemove", move);
    setIsClient(true);
    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, []);

  if (!isClient) return null;

  return (
    isLaptop && (
      <svg
        ref={svgRef}
        className="fixed top-0 left-0 w-full h-full pointer-events-none z-[1000] mix-blend-difference"
      >
        <path
          ref={pathRef}
          className="stroke-white blur-xl stroke-[20] fill-none"
          d=""
          style={{ strokeLinecap: "round", strokeLinejoin: "round" }}
        />
      </svg>
    )
  );
};

export default Cursor;
