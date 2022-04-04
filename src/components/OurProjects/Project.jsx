import React from 'react'
import { Header, Footer } from '../../components'
import Background2 from '../Background/Background2'
import './Project.scss'

const Project = () => {
  return (
    <div className='projects-ojas h-screen '>
      <Background2/>
      <Header/>
        <div className="project-ojas text-4xl flex justify-center items-center">
          COMING SOON...
        </div>
      <Footer/>
    </div>
  )
}

export default Project