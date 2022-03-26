import React from "react";
import "./Homepage.scss";
import {Homepage2} from './Homepage2';
import { Caraousel, Footer, Header } from "../../components";

export default function Homepage() {
  const down = () => {
    document.documentElement.scrollTop = 720;
  }
  return (
    <div >
    <div className="homepage">
      <Header/>
      {/* <Caraousel/> */}
      <img className="mx-auto mt-12" src="/icons/ojas.png" alt="" width="150px"/>
      <h1 className="text-white text-5xl text-center font-serif my-10">
        Team OJAS
      </h1>
      <p className="text-blue-200 text-3xl text-center">
        Departmental Team of Electrical Engineering
      </p>
      </div>
      {/* <button className="m-auto border rounded-md w-20 hover:text-yellow-200" onClick={down}>Explore</button> */}
    <div className="about m-auto  ">
      <div className="text-center text-4xl text-yellow-200">About us</div>
      <div className="about2 p-12 border-b border-l m-auto flex-col md:flex-row">
        <p className="text-1xl md:text-2xl">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis voluptas id perferendis recusandae? Sequi numquam quidem illum! Delectus quasi ipsam dolores ipsum vel cupiditate voluptatem veritatis, fuga, repellendus voluptatum reiciendis!
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis voluptas id perferendis recusandae? Sequi numquam quidem illum! Delectus quasi ipsam dolores ipsum vel cupiditate voluptatem veritatis, fuga, repellendus voluptatum reiciendis!
        <br />
        <button className="text-gray-600 hover:text-yellow-200">Our team</button>
        </p>
        <img  src="/images/6.gif" width="350"/>
        </div>
    </div>
    <Homepage2/>
    <Footer/>
    </div>
  );
}
