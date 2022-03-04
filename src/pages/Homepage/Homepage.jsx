import React from "react";
import "./Homepage.scss";
import {Homepage2} from './Homepage2';

export default function Homepage() {
  const down = () => {
    document.documentElement.scrollTop = 720;
  }
  return (
    <div className="main">
    <div className="homepage">
      <img className="mx-auto mt-12" src="/icons/ojas.png" alt="" width="150px"/>
      <h1 className="text-white text-5xl text-center font-serif my-10">
        Team OJAS
      </h1>
      <p className="text-white text-3xl text-center">
        Departmental Team of Electrical Engineering
      </p>
      <button className="m-auto border rounded-md w-20 hover:text-yellow-400" onClick={down}>Explore</button>
    </div>
    <div className="about m-auto  ">
      <div className="text-center text-3xl">About us</div>
      <div className="about2 p-12 border-b border-l m-auto flex-col md:flex-row">
        <p className="text-1xl md:text-2xl">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis voluptas id perferendis recusandae? Sequi numquam quidem illum! Delectus quasi ipsam dolores ipsum vel cupiditate voluptatem veritatis, fuga, repellendus voluptatum reiciendis!
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis voluptas id perferendis recusandae? Sequi numquam quidem illum! Delectus quasi ipsam dolores ipsum vel cupiditate voluptatem veritatis, fuga, repellendus voluptatum reiciendis!
        <br />
        <button className="text-gray-600 hover:text-yellow-400">Our team</button>
        </p>
        <img  src="/images/img1.svg" width="250"/>
        </div>
    </div>
    <Homepage2/>
    </div>
  );
}
