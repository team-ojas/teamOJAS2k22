import React from "react";
import "./Homepage.scss";
import {Homepage2} from './Homepage2';

export default function Homepage() {
  return (
    <div className="main">
    <div className="homepage">
      <img className="m-auto" src="/icons/ojas.png" alt="" width="200px"/>
      <h1 className="text-white text-5xl text-center font-serif my-12">
        Team OJAS
      </h1>
      <p className="text-gray-400 text-3xl text-center">
        Departmental Team of Electrical Engineering
      </p>
    </div>
    <div className="about max-w-6xl m-auto  ">
      <h2 className="text-center text-white text-4xl mb-10 ">About us</h2>
      <div className="about2">
        <p className=" text-2xl">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis voluptas id perferendis recusandae? Sequi numquam quidem illum! Delectus quasi ipsam dolores ipsum vel cupiditate voluptatem veritatis, fuga, repellendus voluptatum reiciendis!
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis voluptas id perferendis recusandae? Sequi numquam quidem illum! Delectus quasi ipsam dolores ipsum vel cupiditate voluptatem veritatis, fuga, repellendus voluptatum reiciendis!
        </p>
        <img src="/images/img1.svg" width="250"/>
        </div>
    </div>
    <Homepage2/>
    </div>
  );
}
