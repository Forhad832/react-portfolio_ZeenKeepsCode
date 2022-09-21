import React from 'react'
import { FaArrowCircleUp, FaFacebook, FaGithub, FaInstagram } from 'react-icons/fa'
import './footer.css'
import IMG from './footer.png'
const Footer = () => {
  return (
    <div  className='footer'>
      <img src={IMG} alt="" />
     <div className="center">
     <div>
        <p>forhadhossain0619@gmail.com</p>
      </div>
      <div className="icons">
              <a target='-blank' href='https://www.facebook.com/Forhad9034/'> <FaFacebook className='fa' /></a>
             <a  target='-blank' href="https://github.com/Forhad832">  <FaGithub  className='fa'/></a>
               <FaInstagram  className='fa'/>
            
               </div>
     </div>
      <div className="upper-icon">
      <a className='' href="#"><FaArrowCircleUp /></a>
      </div>
    </div>
  )
}

export default Footer
