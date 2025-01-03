import React from "react";
import ProjectsTop from "./ProjectsTop";
import dynamic from "next/dynamic";

const ProjectsContent = dynamic(() => import("./ProjectsContent"), {
  ssr: false,
});

const Projects = () => {
  return (
    <>
      <ProjectsTop />
      <ProjectsContent />
    </>
  );
};

export default Projects;
