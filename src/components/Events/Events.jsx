import React from 'react';
import "./Events.scss";

const Events = () => {
  return (
    <div className='p-6 md:p-24'>
        <h2 className='eventText text-center text-4xl text-yellow-200 my-16'>OUR EVENTS</h2>
        <div className="containers flex justify-center">
        <div className="item id1 mr-20 md:mr-96">
            <div className="img"></div>
            <div className="info ">
                <p></p>
                <a href=""></a>
            </div>
        </div>
        <div className="item id2 ml-20 md:ml-96">
            <div className="img"></div>
            <div className="info left">
                <p></p>
                <a href=""></a>
            </div>
        </div>


        <div className="item id3 mr-20 md:mr-96">
            <div className="img"></div>
            <div className="info">
                <p></p>
                <a href=""></a>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Events