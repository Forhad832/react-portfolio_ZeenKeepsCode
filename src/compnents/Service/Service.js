import React from 'react'
import Card from '../Card/Card'
import Glass from './glassepng.png'
import Heart from './heartpng.png'
import './service.css'
const Service = () => {
  return (
    <div className='row service'>
      <div className="left">
        <div className="h-content">
            <h2>My Awoseme</h2>
            <h3>Services</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nam, blanditiis modi minima consequuntur iste</p>
         <button className='btn-btn'>Download Cv</button>
        </div>
      </div>
      <div className="right card-section">
        <div className="card">
            <Card IMG={Glass} text={`Developer`} para={`Html, CSS, Sass, Java Script, React js`}/>
        </div>
        <div className="card">
            <Card IMG={Heart} text={`Design`} para={`Figma, Sketch, Adobe PS, XD, Ai`}/>
        </div>
        <div className="card">
        <Card IMG={Glass} text={`Developer`} para={`Html, CSS, Sass, Java Script, React js`}/>
        </div>
      </div>
    </div>
  )
}

export default Service
