import React from 'react'
import { Footer, Header, OurTeam } from '../../components'
import Background2 from '../../components/Background/Background2'
import "./Teampage.scss"

const Teampage = () => {
  return (
    <div>
      <Background2 />
        <Header/>
        <div className="main-team mt-20 mb-4 z-10"><OurTeam /></div>
        <div className="footer-team"><Footer /></div>
      </div>
  )
}

export default Teampage