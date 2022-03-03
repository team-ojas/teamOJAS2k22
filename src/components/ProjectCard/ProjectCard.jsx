import React from "react";
import { Link } from "react-router-dom";
import "./ProjectCard.scss";

export default function ProjectCard({ project }) {
  if (!project) return null;
  return (
    <Link to={`/projects/${project.slug}`}>
      <div className="project-card flex flex-col p-4 border-2 rounded-md border-white border-opacity-20">
        <img src={project.imageSrc} className="h-32 align-center" />
        <div className="title text-xl text-red-600 text-center mb-2">{project.title}</div>
        <div className="description text-gray-200 text-center">{project.description}</div>
      </div>
    </Link>
  );
}
