import React from "react";
import Background from "../../components/Background/Background";
import { Footer } from "../../components";
import CC from '../../components/OurTeam/CC';
import Events from '../../components/Events/Events';
import About from "../../components/About/About";
import Background2 from "../../components/Background/Background2";

export default function Homepage() {
  return (
    <div >
      <div className="fonts">
        <Background2/>
        <Background />
        <About />
        <Events />
        <CC />
        <Footer />
      </div>
    </div>
  );
}
