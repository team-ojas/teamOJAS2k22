import React from 'react';
import {motion} from "framer-motion";
import { useState, useRef, useEffect } from 'react';
import images from "./images.js";
import "./OurTeam.scss";

export default function OurTeam() {
  const [width, setWidth] = useState(0);
  const carousel = useRef();
  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, [])
  
  return (
    <div>
      <div className='text-center text-yellow-200 text-3xl mt-20'>OUR TEAM</div>
      <div className='back-carousel'>
        <motion.div ref={carousel} className="carousel">
          <motion.div drag="x" dragConstraints={{right:0, left: -width}} className='inner-carousel'>
            <motion.div className="items flex text-xs md:text-2xl justify-center items-center bg-black text-yellow-200">FINAL YEAR</motion.div>
            {images.map(image => {
              return(
              <motion.div className='items hover:scale-125' key={image}>
                  <img src={image} alt="" />
              </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
    </div>
      <div className='back-carousel'>
        <motion.div ref={carousel} className="carousel">
          <motion.div drag="x" dragConstraints={{right:0, left: -width}} className='inner-carousel'>
            <motion.div className="items text-xs md:text-2xl flex justify-center items-center bg-black text-yellow-200">COORDINATORS</motion.div>
            {images.map(image => {
              return(
              <motion.div className='items hover:scale-125' key={image}>
                <img src={image} alt="" />
              </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
    </div>
      <div className='back-carousel'>
        <motion.div ref={carousel} className="carousel">
          <motion.div drag="x" dragConstraints={{right:0, left: -width}} className='inner-carousel'>
            <motion.div className="items text-xs md:text-2xl flex justify-center items-center bg-black text-yellow-200">EXECUTIVES</motion.div>
            {images.map(image => {
              return(
              <motion.div className='items hover:scale-125' key={image}>
                <img src={image} alt="" />
              </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
    </div>
      <div className='back-carousel'>
        <motion.div ref={carousel} className="carousel">
          <motion.div drag="x" dragConstraints={{right:0, left: -width}} className='inner-carousel'>
            <motion.div className="items text-xs md:text-2xl flex justify-center items-center bg-black text-yellow-200">VOLUNTEERS</motion.div>
            {images.map(image => {
              return(
              <motion.div className='items hover:scale-125' key={image}>
                <img src={image} alt="" />
              </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
    </div>
    </div>
  );
}
