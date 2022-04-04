import React from 'react';
import './loader.scss';

import PulseLoader from "react-spinners/PulseLoader";

export default function loader () {
  return (
    <div>
        <div className="load flex justify-center items-center flex-col h-screen">
            
            <img src="/icons/ojas.png" alt=""/>
            <PulseLoader color={'#DDE9E7'} size={8} margin={10}></PulseLoader>
        </div>
        
    </div>
  )
}
