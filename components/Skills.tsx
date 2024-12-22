import { SKILLS } from "@/app/constants";
import Image from "next/image";
import React from "react";

type Skill = {
  name: string;
  image: string;
  row: number;
};

type GroupedSkills = Record<number, Skill[]>;

const Skills = () => {
  const groupedSkills: GroupedSkills = SKILLS.reduce<GroupedSkills>(
    (acc, skill) => {
      if (!acc[skill.row]) acc[skill.row] = [];
      acc[skill.row].push(skill);
      return acc;
    },
    {}
  );

  return (
    <div className="h-[100vh] flex flex-col items-start mt-20 gap-10 overflow-hidden relative z-10">
      {Object.values(groupedSkills).map((row, rowIndex) => (
        <div
          key={rowIndex}
          className="flex justify-evenly gap-10 w-full items-center"
        >
          {row.map((skill, i) => (
            <div key={i} className="flex gap-3 items-center">
              <span className="uppercase mainHeadline text-nowrap">
                {skill.name}
              </span>
              <div className="relative h-[4vw] rounded-full overflow-hidden aspect-[4/2]">
                <Image
                  src={skill.image}
                  alt={skill.name}
                  className="object-cover h-full w-full"
                  fill
                />
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Skills;
