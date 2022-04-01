import React from 'react'
import { Footer, Header, OurTeam } from '../../components'
import "./Teampage.scss"

const Teampage = () => {
  return (
    <div className='team flex flex-col'>
      <div className="header-team"><Header/></div>
      <div className="main-team mt-20 mb-4"><OurTeam/></div>
      <div className="footer-team"><Footer/></div>
    </div>
  )
}

export default Teampage