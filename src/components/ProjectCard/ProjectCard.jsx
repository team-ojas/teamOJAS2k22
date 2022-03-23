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
      <div className="project-card flex flex-col border-2 rounded-md border-white border-opacity-20" data-aos="fade-up"
    data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="bottom">
        <img src={project.imageSrc} className="h-48 w-53 align-center" />
        <div className="title text-xl  text-center mb-2">{project.title}</div>
        {/* <div className="description text-gray-200 text-center">{project.description}</div> */}
      </div>
    </Link>
  );
}
