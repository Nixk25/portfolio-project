import React from "react";
import Image from "next/image";
const Phrase = ({ skill }: { skill: { name: string; image: string } }) => {
  return (
    <div className=" relative flex gap-3 items-center whitespace-nowrap">
      <span className="uppercase text-[70px] md:text-mainHeadline text-nowrap">
        {skill.name}
      </span>
      <div className="relative h-[12vw] rounded-full overflow-hidden aspect-[4/2]">
        <Image
          src={skill.image}
          alt={skill.name}
          className="object-cover "
          fill
        />
      </div>
    </div>
  );
};

export default Phrase;
