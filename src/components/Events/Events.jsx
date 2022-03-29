import React from 'react';
import "./Events.scss";

const Events = () => {
  return (
    <div>
        <div className="container flex justify-center ">
        <div className="item id1">
            <div className="img"></div>
            <div className="info">
                <p>Another thing for a thing!</p>
                <a href="http://dribbble.com/shots/887990-Canada?list=popular&offset=8">Source</a>
            </div>
        </div>
        <div class="item id2 ml-20 md:ml-0">
            <div class="img"></div>
            <div class="info left">
                <p>Another preview! Make sure to see the attachment to see the nice subtle textures. </p>
                <a href="http://dribbble.com/shots/888253-New-IOS-App-design?list=popular&offset=8">Source</a>
            </div>
        </div>


        <div className="item id3">
            <div className="img"></div>
            <div className="info">
                <p>Here's a preview of something new I'm working on. </p>
                <a href="http://dribbble.com/shots/887232-WIP-Artwork?list=popular&offset=5">Source</a>
            </div>
        </div>
        
    </div>
    </div>
  )
}

export default Events