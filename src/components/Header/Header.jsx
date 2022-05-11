import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

export default function Header() {
  return (
    <div className="z-50">
      <nav
        className="
        header
          flex flex-wrap
          items-center
          justify-between
          w-full
          py-4
          md:py-0
          px-12
          md:px-20 
          text-lg text-gray-700
          bg-transparent
          border-opacity-30
        "
      >
        <div className="left">
          <Link to="/">
            <div className="club flex items-center">
              <div className="ojasHeader text-white text-2xl">OJAS</div>
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
          onClick={() => { menu.classList.toggle('hidden'); }}
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
            <li className="text-right"><Link to="/">
              <div className="text-white text-1xl md:text-2xl  px-3 hover:text-yellow-200 hover:underline hover:underline-offset-8 transition delay-5">
                Home

              </div></Link></li>
            <li className="text-right"><Link to="/team">
              <div className="text-white text-1xl md:text-2xl px-3 hover:text-yellow-200 hover:underline hover:underline-offset-8 transition delay-5">
                Team
              </div></Link></li>
            <li className="text-right">
              <Link to="/projects">
                <div className="text-white text-1xl md:text-2xl px-3 hover:text-yellow-200 hover:underline hover:underline-offset-8 transition delay-5">
                  Projects
                </div></Link>
            </li>
            <li className="text-right">
              <Link to="/events">
                <div className="text-white text-1xl md:text-2xl px-3 hover:text-yellow-200 hover:underline hover:underline-offset-8 transition delay-5" >
                  Events
                </div></Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
