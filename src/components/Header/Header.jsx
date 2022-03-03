import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

export default function Header() {
  return (
    <div className="header flex p-3 justify-between m-auto max-w-7xl rounded-md">
      <div className="left">
        <Link to="/">
          <div className="club flex items-center">
            <div className="logo">
              <img src="/icons/ojas.png" />
            </div>
            <div className="name font-mono">JAS</div>
          </div>
        </Link>
      </div>
      <div className="right flex items-center p-2">
        <Link to="projects">
          <div className="text-white text-2xl px-3">
            Projects
          </div>
        </Link>
        <Link to="events">
          <div className="text-white text-2xl px-3">
            Events
          </div>
        </Link>
      </div>
    </div>
  );
}
