import React from 'react';
import './loader.scss';
import 'animate.css';

import PulseLoader from "react-spinners/PulseLoader";

export default function loader () {
  return (
    <div>
        <div className=" load animate__animated animate__zoomIn animate__slower animate__repeat-2	">
            
            <img src="/icons/ojas.png" alt="" width="80px"/>
            <PulseLoader color={'#DDE9E7'} size={10} margin={10}></PulseLoader>
        </div>
        
    </div>
  )
}
