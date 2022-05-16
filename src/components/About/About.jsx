import React from "react";
import "./About.scss";

const About = () => {
  return (
    <div>
      <div className="about m-auto p-10 md:p-24">
        <div className="about-head text-center  text-4xl text-yellow-200 my-12">
          ABOUT US
        </div>
        <div className="about2 gap-8 m-auto flex flex-col-reverse md:flex-row  md:p-12">
          <div>
            <p className="textt text-center md:text-left">
              Team OJAS, the departmental team of Electrical Engineering at
              National Institute of Technology, Hamirpur is a club driven by the
              motto “Fuelled by innovation, driven by determination” that
              strives to innovate viable and smart solutions for the many
              problems of our lives. We conduct various technical as well as
              non-technical events throughout the year aimed at accelerating
              students interest towards electrical engineering and nurturing a
              learning yet enjoyable atmosphere where everyone can exhibit their
              ideas and get a chance to turn their dreams into reality. We have
              also won the prize in “Best Event Execution” category in NIMBUS
              2021.
            </p>
          </div>
          {/* <video className='rounded-xl' width="350" height="350" autoPlay loop>
            <source src='/images/ojaslogo.mp4' type='video/mp4' />
          </video> */}
            <img src="/images/team-img.jpeg" alt="" width="350" className="rounded-md z-10"/>
        </div>
      </div>
    </div>
  );
};

export default About;
