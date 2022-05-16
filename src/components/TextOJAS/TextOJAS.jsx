import React from 'react';
import Typewriter from 'typewriter-effect';
import "./TextOJAS.scss";

const TextOJAS = () => {
  return (
    
    <div className='h-screen flex justify-center items-center flex-col'>
        <h1 className='ojas text-5xl md:text-8xl text-center my-6 tracking-wide'>TEAM OJAS</h1>
        <div className="bottomText text-2xl text-yellow-200"><Typewriter
        onInit={(typewriter) =>{
          typewriter
          .typeString("Fueled by Innovation")
          .pauseFor(1000)
          .deleteAll()
          .typeString("Driven by Determination")
          .pauseFor(1000)
          .deleteAll()
          .typeString("We are Team OJAS")
          .start();
        }
        }
/>
</div>
    </div>
  )
}

export default TextOJAS