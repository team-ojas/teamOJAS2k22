import React from "react";
import "./Homepage.scss";
import { Homepage2 } from './Homepage2';
import Background from "../../components/Background/Background";
import { Footer, Header } from "../../components";



export default function Homepage() {
  const down = () => {
    document.documentElement.scrollTop = 720;
  }
  return (
    <div >
      <div className="">
        <Header />
        <Background />
      </div>
      {/* <button className="m-auto border rounded-md w-20 hover:text-yellow-200" onClick={down}>Explore</button> */}
      
      <div className="about m-auto px-12 py-36 bg-transparent ">
        <div className="text-center text-4xl text-yellow-200">ABOUT US</div>
        <div className="about2 p-12  m-auto flex flex-col-reverse md:flex-row">
          <p className="text-1xl md:text-xl m-8">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis voluptas id perferendis recusandae? Sequi numquam quidem illum! Delectus quasi ipsam dolores ipsum vel cupiditate voluptatem veritatis, fuga, repellendus voluptatum reiciendis!
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis voluptas id perferendis recusandae? Sequi numquam quidem illum! Delectus quasi ipsam dolores ipsum vel cupiditate voluptatem veritatis, fuga, repellendus voluptatum reiciendis!
          </p>
          <video controls autoplay loop src="/images/ojas logo.mp4" width="400px" height="400px"  muted></video>
        </div>
      </div>

      <Homepage2 />
      <Footer />
    </div>
  );
}
