import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

export default function Header() {
  return (
    <div className="header flex p-3 justify-between m-auto max-w-7xl rounded-md">
      <nav
        className="
        header
          flex flex-wrap
          items-center
          justify-between
          w-full
          py-4
          md:py-0
          px-4
          text-lg text-gray-700
        "
      >
      <div className="left">
        <Link to="/">
          <div className="club flex items-center">
            <div className="logo">
              <img src="/icons/ojas.png" />
            </div>
            <div className="name text-white font-mono">JAS</div>
          </div>
        </Link>
      </div>
      <svg
            xmlns="http://www.w3.org/2000/svg"
            id="menu-button"
            className="h-6 w-6 cursor-pointer md:hidden block"
            fill="none"
            viewBox="0 0 24 24"
            stroke="white"
            onClick={() => {menu.classList.toggle('hidden');}}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
       
       <div className="hidden w-full md:flex md:items-center md:w-auto" id="menu">
          <ul
            className="
              pt-4
              text-base text-gray-700
              md:flex
              md:justify-between 
              md:pt-0"
              
          >
        <Link to="projects">
          <div className="text-white text-2xl px-3 hover:text-gray-300">
            Projects
          </div>
        </Link>
        <Link to="events">
          <div className="text-white text-2xl px-3 hover:text-gray-300">
            Events
          </div>
        </Link>
      </ul>
      </div>
    </nav>
    </div>
  );
}
