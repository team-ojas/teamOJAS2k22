import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import { ImHome } from 'react-icons/im'
import { FcAbout } from 'react-icons/fc'
import { MdEmojiEvents } from 'react-icons/md'
import { MdOutlineMilitaryTech } from 'react-icons/md'

export default function Header() {
  const down1 = () => {
    document.documentElement.scrollTop = 1380;
  }
  const down2 = () => {
    document.documentElement.scrollTop = 2200;
  }
  return (
    <div className="z-50">
      <nav
        class="
        header
        max-w-8xl
          flex flex-wrap
          items-center
          justify-between
          w-full
          py-4
          md:py-0
          px-16
          text-lg text-gray-700
          bg-transparent
          border-opacity-30
        "
      >
        <div className="left">
          <Link to="/">
            <div className="club flex items-center">
              <div className="logo">
                {/* <img src="/icons/ojas.png" width="30"/> */}
              </div>
              <div className="ojasHeader text-white text-2xl md:text-2xl">OJAS</div>
            </div>
          </Link>
        </div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          id="menu-button"
          class="h-6 w-6 cursor-pointer md:hidden block"
          fill="none"
          viewBox="0 0 24 24"
          stroke="white"
          onClick={() => { menu.classList.toggle('hidden'); }}
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>

        <div class="hidden w-full md:flex md:items-center md:w-auto" id="menu">
          <ul
            class="
              pt-4
              text-base text-gray-700
              md:flex
              md:justify-between 
              md:pt-0"
            >
              <li><Link to="/"><div className="text-white flex  text-1xl md:text-xl  px-3 hover:text-blue-200">
                {/* <ImHome/> */}
                Home 

              </div></Link></li>
            <li><Link to="/about"><div className="text-white flex flex-row md:flex-col text-1xl md:text-xl px-3 hover:text-blue-200">
              {/* <FcAbout/> */}
              About us
            </div></Link></li>
            <li>
              <Link to="">
                <div className="text-white flex flex-row md:flex-col text-1xl md:text-xl px-3 hover:text-blue-200" onClick={down1}>
                 {/* <MdOutlineMilitaryTech/> */}
                  Projects
                </div></Link>
            </li>
            <li>
              <Link to="">
                <div className="text-white flex flex-row md:flex-col text-1xl md:text-xl px-3 hover:text-blue-200" onClick={down2}>
                 {/* <MdEmojiEvents/>  */}
                 Events
                </div></Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
