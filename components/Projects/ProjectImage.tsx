import Image from "next/image";
import React from "react";

type ProjectImageProps = {
  url: string;
  image: string;
  name: string;
};

const ProjectImage = ({ url, image, name }: ProjectImageProps) => {
  return (
    <a href={url} className="relative " target="_blank">
      <Image
        src={image}
        alt={name}
        height={500}
        width={500}
        placeholder="blur"
        blurDataURL={image}
      />
    </a>
  );
};

export default ProjectImage;
