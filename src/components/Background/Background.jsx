
import React, { useState, useEffect, useRef } from 'react'
import NET from 'vanta/dist/vanta.net.min'
import Header from '../Header/Header'
import TextOJAS from './TextOJAS'
// Make sure window.THREE is defined, e.g. by including three.min.js in the document head using a <script> tag



const Background = (props) => {
    const [vantaEffect, setVantaEffect] = useState(0)
    const myRef = useRef(null)
    useEffect(() => {
      if (!vantaEffect) {
        setVantaEffect(NET({
          el: myRef.current
        }))
      }
      return () => {
        if (vantaEffect) vantaEffect.destroy()
      }
    }, [vantaEffect])
    const effect = VANTA.NET({
      el: '#bg',
      color: 0x1244a2,
  backgroundColor: 0xc061b,
  points:8,
  maxDistance:15
    })
  return (
    <div ref={myRef} id="bg" className="h-screen z-10">
      <Header/>
      <TextOJAS/>
      <p></p>
    </div>
  )
}

export default Background