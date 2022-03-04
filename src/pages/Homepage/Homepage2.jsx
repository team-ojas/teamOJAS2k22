import React from 'react';
import Projects from '../Projects/Projects';
import Events from '../Projects/Events';
import "./Homepage2.scss";

export const Homepage2 = () => {
  return (
    <div>
        <div className="homepage2 p-12">
            <h2 className='text-center text-3xl my-12'>Our Projects</h2>
            <Projects/>
        </div> 
        <div className="homepage3 p-3 ">
            <h2 className='text-center text-3xl mb-12'>Our Events</h2>
            {/* <div className="projects1  p-3 flex-col md:flex-row">
                <div className="project p-3 border-opacity-10 rounded-md ">
                    <img src='/images/img1.svg' width="100"/>
                    <p className="text-center text-1xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod sapiente, laborum vel unde recusandae sequi aperiam aspernatur dignissimos facere sit</p>
                </div>
                <div className="project p-3 rounded-md border-opacity-10">
                    <img src='/images/img1.svg' width="100"/>
                    <p className="text-center text-1xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod sapiente, laborum vel unde recusandae sequi aperiam aspernatur dignissimos facere sit</p>
                </div>
                <div className="project p-3 rounded-md border-opacity-10">
                    <img src='/images/img1.svg' width="100"/>
                    <p className="text-center text-1xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod sapiente, laborum vel unde recusandae sequi aperiam aspernatur dignissimos facere sit</p>
                </div>
                <div className="project p-3 rounded-md border-opacity-10">
                    <img src='/images/img1.svg' width="100"/>
                    <p className="text-center text-1xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod sapiente, laborum vel unde recusandae sequi aperiam aspernatur dignissimos facere sit</p>
                </div>
            </div> */}
            <Events/>
        </div>
        
        
    </div>
  )
}
