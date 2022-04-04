import React from 'react';
import "./Events.scss";

const Events = () => {
  return (
    <div className='even p-6 md:p-24'>
        <h2 className='text-center text-4xl text-yellow-200 my-16'>OUR EVENTS</h2>
        <div className="containers flex justify-center">
        <div className="item id1 mr-20">
            <div className="img"></div>
            <div className="info ">
                <p>Lorem ipsum dolor sit amet</p>
                <a href="http://dribbble.com/shots/887990-Canada?list=popular&offset=8">Source</a>
            </div>
        </div>
        <div className="item id2 ml-20 md:ml-96">
            <div className="img"></div>
            <div className="info left">
                <p>Lorem ipsum dolor sit amet </p>
                <a href="http://dribbble.com/shots/888253-New-IOS-App-design?list=popular&offset=8">Source</a>
            </div>
        </div>


        <div className="item id3 mr-20">
            <div className="img"></div>
            <div className="info">
                <p>Lorem ipsum dolor sit amet</p>
                <a href="http://dribbble.com/shots/887232-WIP-Artwork?list=popular&offset=5">Source</a>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Events