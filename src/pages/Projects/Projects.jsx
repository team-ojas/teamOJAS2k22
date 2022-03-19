import React from "react";
import "./Projects.scss";
import { projects } from "../../data/projects";
import { ProjectCard } from "../../components";

export default function Projects() {
  return (
    <div className="projects flex- flex-col p-3 max-w-7xl m-auto">
      <h1 className="text-4xl mt-3 mb-12 text-white text-center underline decoration-2 underline-offset-4 ">Our Projects</h1>

      <div className="pro flex flex-wrap m-auto gap-12">
        {projects.map((project) => (
          <ProjectCard project={project} />
        ))}
      </div>
    </div>
  );
}
