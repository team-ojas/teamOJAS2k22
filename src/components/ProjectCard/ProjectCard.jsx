import React from "react";
import { Link } from "react-router-dom";
import "./ProjectCard.scss";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

export default function ProjectCard({ project }) {
  if (!project) return null;
  return (
    <Link to={`/projects/${project.slug}`}>
      <div className="project-card max-w-6xl flex flex-col border-2 rounded-md border-white border-opacity-20">
        <img src={project.imageSrc} className="h-48 w-56 align-center" />
        <div className="title text-xl text-center mb-2">{project.title}</div>
      </div>
    </Link>
  );
}
