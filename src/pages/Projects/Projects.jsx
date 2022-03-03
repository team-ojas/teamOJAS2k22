import React from "react";
import "./Projects.scss";
import { projects } from "../../data/projects";
import { ProjectCard } from "../../components";

export default function Projects() {
  return (
    <div className="projects flex- flex-col p-3 m-auto">

      <div className="flex flex-wrap m-auto gap-12 ">
        {projects.map((project) => (
          <ProjectCard project={project} />
        ))}
      </div>
    </div>
  );
}
