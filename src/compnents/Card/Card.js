import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({IMG,text,para}) => {
  return (
    <article>
      <img src={IMG} alt="" />
      <h5>{text}</h5>
      <p>{para}</p>
     <Link to='/' className='learn-btn'>Learn More</Link>
    </article>
  )
}

export default Card
