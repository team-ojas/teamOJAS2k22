import React from 'react';
import "./CC.scss";

const CC = () => {
  return (
    <div>
        <div className="cc flex justify-center flex-col md:flex-row gap-12 p-4 m-auto my-36">
        <div>
          <div className='rounded-lg overflow-hidden transition ease-in-out delay-150'><img className='cc-image m-auto' src="/images/Khwab Kalra.jpeg" alt="" /></div>
          <div className='flex justify-center p-2 text-slate-400 text-sm md:text-xl'>Khwab Kalra</div> 
          </div>
        <div>
        <div className='rounded-lg overflow-hidden'><img className='cc-image m-auto' src="/images/Shubham.jpg" alt="" /></div>
          <div className='flex justify-center p-2 text-sm md:text-xl'>Shubham Sharma</div> 
          
        </div>
      </div>
    </div>
  )
}

export default CC