import React from 'react'
import './dashboard.css'
const Dashboard = ({IMG,text1,text2}) => {
  return (
    <div className='flex'>
      <img src={IMG} alt="" />
      <p>{text1} <br />{text2}</p>
    </div>
  )
}

export default Dashboard
