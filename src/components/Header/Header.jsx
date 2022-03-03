import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

export default function Header() {
  const down1 = () => {
    document.documentElement.scrollTop = 1380;
  }
  const down2 = () => {
    document.documentElement.scrollTop = 2200;
  }
  return (
    // <div className="header flex p-3 justify-between m-auto max-w-8xl rounded-md">
    //   <div className="left">
    //     <Link to="/">
    //       <div className="club flex items-center">
    //         <div className="logo">
    //           <img src="/icons/ojas.png" />
    //         </div>
    //         <div className="name font-mono">JAS</div>
    //       </div>
    //     </Link>
    //   </div>
    //   <div className="right flex items-center p-2">
    //     <Link to="">
    //       <div className="text-white text-2xl px-3" onClick={down1}>
    //         Projects
    //       </div>
    //     </Link>
    //     <Link to="">
    //       <div className="text-white text-2xl px-3" onClick={down2}>
    //         Events
    //       </div>
    //     </Link>
    //   </div>
    // </div>
    <div className="header flex p-3 justify-between m-auto max-w-8xl rounded-md">
    <nav
        class="
        header
          flex flex-wrap
          items-center
          justify-between
          w-full
          py-4
          md:py-0
          px-4
          text-lg text-gray-700
          bg-white
        "
      >
        <div className="left">
       <Link to="/">
         <div className="club flex items-center">
           <div className="logo">
             <img src="/icons/ojas.png" width="30"/>
           </div>
           <div className="text-white font-mono text-1xl md:text-3xl">JAS</div>
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
            onClick={() => {menu.classList.toggle('hidden');}}
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
            <li>
              <Link to="">
            <div className="text-white text-1xl md:text-2xl px-3" onClick={down1}>
           Projects
         </div></Link>
            </li>
            <li>
              <Link to="">
            <div className="text-white text-1xl md:text-2xl px-3" onClick={down2}>
           Events
         </div></Link>
            </li>
          </ul>
        </div>
    </nav>
    </div>
  );
}
