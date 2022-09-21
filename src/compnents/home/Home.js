import React from 'react'
import Client from '../Client/Client'
import Contact from '../Contact/Contact'
import Counter from '../Counter/Counter'
import Dashboard from '../Dashboard/Dashboard'
import Footer from '../Footer/Footer'
import Portfolio from '../Portfolio/Portfolio'
import Service from '../Service/Service'
import Vector from './download.png'
import Forhad from './Forhad.png'
import Git from './git.png'
import Glass from './glass.png'
import './home.css'
import In from './in.png'
import Insta from './insta.png'
import Thum from './thum.png'
import Vector1 from './Vector2.png'
const Home = () => {
  return (
    <div>
      <div className="container">
         <div className="row">
           <div className="left">
           <div className="h-content">
                <h3>Hi! I am</h3>
                <h2>Forhad Hossen</h2>
                <p>Frontend Developer with a High level of experience in web design and development, Production the quality work</p>
              <button className='btn-btn'>Hire Me</button>
                </div>
                <div className="icon">
                <img src={Git} alt="" />
                <img src={In} alt="" />
                <img src={Insta} alt="" />
               </div>
             
           </div>
           <div className="right">
           <div className="h-content">
             <img src={Vector} alt="" />
             <img src={Vector1} alt="" />
             <img src={Forhad} alt="Forhad" />
             <img src={Glass} alt="Forhad" />
           <div className="float">
           <Dashboard text1='Best Design' text2='Award' IMG={Thum} />
           <Dashboard text1='Web' text2='Developer' IMG={Thum} />
           </div>
           </div>
           </div>
           
         </div>
          
         <section>
            <Service />
         </section>
         <section>
            <Counter />
         </section>
         <section>
            <Portfolio />
         </section>
         <section>
          <Client />
         </section>
         <section>
          <Contact />
         </section>
         <Footer />
      </div>
    </div>
  )
}

export default Home
