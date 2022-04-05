import React from "react";
import "./Projects.scss";
import { projects } from "../../data/projects";
import { ProjectCard } from "../../components";

export default function Projects() {
  return (
    <div className="projects flex- flex-col p-16 md:p-24 m-auto">

      <div className="flex flex-wrap gap-12 ">
        {projects.map((project) => (
          <ProjectCard project={project} />
        ))}
      </div>
    </div>
  );
}
