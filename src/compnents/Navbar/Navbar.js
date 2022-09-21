import React, { useRef } from 'react'
import { FaBars } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import './navbar.css'
const Navbar = () => {
  const navRef = useRef()
  const showbar = ()=>{
    navRef.current.classList.toggle('responsive')
  }
  return (
    <header>
      <div className="container">
        <nav>
            <div className="logo">
                <h2>Forhad</h2>
            </div>
            <div ref={navRef} className="nav_container">
                <NavLink className='nav_link' to='/'>Home</NavLink>
                <NavLink className='nav_link' to='/service'>Services</NavLink>
                <NavLink className='nav_link' to='/experience'>Experience</NavLink>
                <NavLink className='nav_link' to='/prtofolio'>Portfolio</NavLink>
                <NavLink className='nav_link' to='/testimonial'>Testimonials</NavLink>
                 <button className='btn-btn'>Contact Me</button>
            </div>
            <div className='bar' onClick={showbar}>
              <FaBars className='fa' />
            </div>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
