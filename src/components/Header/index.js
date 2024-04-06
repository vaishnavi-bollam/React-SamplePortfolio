import { useContext } from 'react'
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

import { MyContext } from '../MyContext/index'

import portfolioIcon from '../../images/portfolio-icon.jpg'
import moon from '../../images/black-moon.png'
// import sun from '../../images/sun.jpg'

import "./index.css"

const Header = () => {
  

  const {sectionRef,aboutRef,skillsRef,projectsRef,servicesRef}=useContext(MyContext)
  

  const handleClicked =(particularRef)=>{
    // console.log(particularRef.current)
    const headerHeight = document.querySelector('.header-bg').offsetHeight; // offsetHeight is a property in JavaScript that returns the height of an element, including its vertical padding, vertical scrollbar (if present), and borders, but does not include margin.
    // console.log(headerHeight,"headerHeight")
    if(particularRef.current){
      window.scrollTo({
        top: particularRef.current.offsetTop - headerHeight,// adjusting the scroll position to ensure that the target element is visible below the header.
        behavior: "smooth" // scrolling should be animated smoothly.
      });
    }
  }

  // useEffect(()=>{
  //   const headerHeightValue = document.querySelector('.header-bg').offsetHeight;
  //   console.log(headerHeightValue,"headerHeightValue")
  // })

  //const handleOnHover=(particularElementRef)=>{
  //   // console.log(particularElementRef.current,"handleOnHover")
  //   if(particularElementRef.current){
  //     particularElementRef.current.style.fontWeight="bold"
  //     particularElementRef.current.style.fontSize="20px"
  //     particularElementRef.current.style.color="blueviolet"
  //   }
  // }

  // const handleOnLeaveHover=(particularElementRef)=>{
  //   // console.log(particularElementRef.current,"handleOnLeaveHover")
  //   if(particularElementRef.current){
  //     particularElementRef.current.style.fontWeight="normal"
  //     particularElementRef.current.style.fontSize="inherit"
  //     particularElementRef.current.style.color="inherit"
  //   }
  // }

  return (
    <nav className='header-bg'>
    <div className='header-container-bg'>
        <nav className='nav-elements-bg'>
            <p className='about-nav-el nav-el' onClick={()=>handleClicked(aboutRef)}>About</p>
            <p className='services-nav-el nav-el' onClick={()=>handleClicked(servicesRef)}>Services</p>
            <p className='skills-nav-el nav-el' onClick={()=>handleClicked(skillsRef)}>Skills</p>
            <p className='portfolio-nav-el nav-el' onClick={()=>handleClicked(projectsRef)}>Portfolio</p>
            <p className='resume-nav-el nav-el'>Resume</p>
            <p className='portfolio-nav-el nav-el'>Testimonials</p>
            <p className='portfolio-nav-el nav-el'>Contact</p>
           
        </nav>
        <div className='social-icons'>
            <FaFacebook className='social-icon' />
            <FaTwitter className='social-icon' />
            <FaLinkedin className='social-icon' />
            <FaGithub className='social-icon' />
        </div>
    </div>
</nav>
  )
}

export default Header
