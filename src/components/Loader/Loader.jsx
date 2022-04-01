import React from 'react';
import './loader.scss';
import 'animate.css';

import PulseLoader from "react-spinners/PulseLoader";

export default function loader () {
  return (
    <div>
        <div className="load flex justify-center items-center flex-col h-screen load animate__animated animate__zoomIn animate__slower animate__repeat-1	">
            
            <img src="/icons/ojas.png" alt=""/>
            <PulseLoader color={'#DDE9E7'} size={8} margin={10}></PulseLoader>
        </div>
        
    </div>
  )
}
