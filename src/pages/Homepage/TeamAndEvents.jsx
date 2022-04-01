import React from 'react';
import Projects from '../Projects/Projects';
import Events from '../../components/Events/Events';
import "./TeamAndEvents.scss";
import OurTeam from '../../components/OurTeam/OurTeam';
import CC from '../../components/OurTeam/CC';

export const TeamAndEvents = () => {
  return (
    <div>
        <div className="homepage3 p-3 ">
            <h2 className='text-center text-4xl mt-12 text-yellow-200'>UPCOMING EVENTS</h2>
            <Events/>
        </div>
        <div className="homepage2 p-12">
            <h2 className='text-center text-4xl mt-12 mb-6 text-yellow-200'>Core Coordinators</h2>
            <CC/>
        </div> 
        
        
    </div>
  )
}
