import React from "react";
import { FaGithub, FaGlobe } from "react-icons/fa";

type ProjectTextProps = {
  name: string;
  githubUrl: string;
  url: string;
  description: string;
};

const ProjectText = ({
  name,
  githubUrl,
  url,
  description,
}: ProjectTextProps) => {
  return (
    <div className="flex flex-col">
      <div className="relative">
        <h3 className="uppercase max-w-[70%] leading-[1] font-bold text-[3rem]">
          {name}
        </h3>
        <a
          href={githubUrl}
          target="_blank"
          className="absolute top-1/2 -translate-y-1/2 right-0 text-white"
          aria-label={`Go to github code of project ${name} made by Nicolas Melda`}
        >
          <FaGithub size={20} />
        </a>
        <a
          href={url}
          target="_blank"
          className="absolute top-1/2 -translate-y-1/2 right-10 text-white"
          aria-label={`Go to project website ${name} made by Nicolas Melda`}
        >
          <FaGlobe size={20} />
        </a>
      </div>
      <p className="font-thin text-white/70 tracking-tighter leading-tight mb-5">
        {description}
      </p>
    </div>
  );
};

export default ProjectText;
