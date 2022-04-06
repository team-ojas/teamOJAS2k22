import React from 'react';
import "./CC.scss";

const CC = () => {
  return (
    <div className='p-4 md:p-24'>
      <h2 className='cc-head text-center text-4xl text-yellow-200'>CORE COODINATORS</h2>
    <div className='flex flex-wrap gap-10 my-24 justify-evenly'>
      <div className="cc hover:scale-125 transition delay-5 z-10">
        <img src="/images/Khwab Kalra.jpeg" alt="" />
        <div className="text-2xl text-center p-2">Khwab Kalra</div>
      </div>
      <div className="cc hover:scale-125 transition delay-5 z-10">
        <img src="/images/Shubham.JPG" alt="" />
        <div className="text-2xl text-center p-2">Shubham Sharma</div>
      </div>
    </div>
    </div> 
  )
}

export default CC