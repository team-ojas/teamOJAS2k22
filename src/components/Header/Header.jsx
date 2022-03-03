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
    <div className="header flex p-3 justify-between m-auto max-w-8xl rounded-md">
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
        <Link to="">
          <div className="text-white text-2xl px-3" onClick={down1}>
            Projects
          </div>
        </Link>
        <Link to="">
          <div className="text-white text-2xl px-3" onClick={down2}>
            Events
          </div>
        </Link>
      </div>
    </div>
  );
}
