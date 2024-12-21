"use client";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import Line from "./Hero/Line";

interface LineConfig {
  width: number;
  gap: number;
  minLines: number;
  maxLines: number;
}

const LINE_CONFIG: LineConfig = {
  width: 2,
  gap: 60,
  minLines: 5,
  maxLines: 50,
};
const Lines = () => {
  const [viewport, setViewport] = useState<{
    width: number | null;
  }>({
    width: null,
  });

  const lines = useMemo(() => {
    if (!viewport.width) {
      return Array.from({ length: LINE_CONFIG.minLines }, (_, i) => ({
        id: i,
        position: i * (LINE_CONFIG.width + LINE_CONFIG.gap),
      }));
    }

    const totalSpacing = LINE_CONFIG.width + LINE_CONFIG.gap;
    const calculatedLines = Math.floor(viewport.width / totalSpacing);

    const numberOfLines = Math.min(
      Math.max(calculatedLines, LINE_CONFIG.minLines),
      LINE_CONFIG.maxLines
    );

    return Array.from({ length: numberOfLines }, (_, i) => ({
      id: i,
      position: i * totalSpacing,
    }));
  }, [viewport.width]);

  const handleResize = useCallback(() => {
    if (typeof window === "undefined") return;

    const timeoutId = setTimeout(() => {
      setViewport({
        width: window.innerWidth,
      });
    }, 100);

    return () => clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    setViewport({
      width: window.innerWidth,
    });

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  return (
    <div className="absolute inset-0 z-[2] w-full h-full overflow-hidden">
      {lines.map(({ id, position }) => (
        <Line key={id} position={position} />
      ))}
    </div>
  );
};

export default Lines;
