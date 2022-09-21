import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';
import './contact.css';
import IMG from './Contact.webp';
const Contact = () => {
    const form = useRef();
    const sendEmail = (e)=>{
        e.preventDefault();
        emailjs.sendForm('service_gqvb8wj', 'template_usftwjc', form.current, 'h7ppidTHRSaouGNGN')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        
    }
  return (
    <div className='row contact'>
      <div className="left">
        <img src={IMG} alt="" />
      </div>
      <div className="right">
       <form ref={form} onSubmit={sendEmail}>
       <div>
            <label htmlFor="">Name :</label>
            <input type="text" name='user_name' placeholder='Your Name' />
        </div>
        <div>
            <label htmlFor="">Email :</label>
            <input type="email"  name='user_email' placeholder='EMail address' />
        </div>
        <div>  <label htmlFor="">Message :</label>
            <textarea placeholder='Message' name='message'  cols="30" rows="10"></textarea>
        </div>
        <div>
            <button className='btn-btn' type='submit'>Submit</button>
        </div>
       </form>
      </div>
    </div>
  )
}

export default Contact
