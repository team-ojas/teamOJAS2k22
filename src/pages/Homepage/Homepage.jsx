import React from "react";
import "./Homepage.scss";
import Background from "../../components/Background/Background";
import { Footer, Header } from "../../components";
import CC from '../../components/OurTeam/CC';
import Events from '../../components/Events/Events';
import Background2 from "../../components/Background/Background2";
import Background3 from "../../components/Background/Background3";



export default function Homepage() {
  const down = () => {
    document.documentElement.scrollTop = 720;
  }
  return (
    <div >
      {/* Home */}
      <div className="">
        <Background />
        <Background2 />
        <Events/>
        <Background3/>
        <Footer/>
      </div>
      
    </div>
  );
}
