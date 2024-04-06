import { useContext } from 'react'
import { MyContext } from '../MyContext/index'

import "./index.css"

const About = () => {

  const userDetail = useContext(MyContext)
  const {about} = userDetail
  const {address,description,exp_year,some_total,subTitle} = about
  return (
    <div className="about-bg">
      <h1 className="about">About Me</h1>   
      <div className="container1">
      <div className="container">
        <div className="progress" style={{ '--i': 85, '--clr': '#43f94a' }}>
        <h3>{some_total}<span>+</span></h3>
        <h4>Projects</h4>
        </div>
        <div className="progress" style={{ '--i': 85, '--clr': '#2ccde9' }}>
        <h3>{exp_year}<span>+</span></h3>
        <h4>Years Experience</h4>
        </div>
          {/* <button type='button'>{some_total}+ Projects</button>
          <button>{exp_year}+ Years Experience</button>     */}
      </div>        
          <p className="desc">
            I'm from {address}.{subTitle}.{description}
          </p>    
        </div> 
      
    </div>
  )
}

export default About
