import React from 'react'
import "../styles/contactform.css"
import {useState} from 'react'

function ContactForm() {


  return (
    <div className='form'>
        <section className='form-item'>
            <label htmlFor="name" className='form-label'>Name*</label>
            <input type="text" id="name" placeholder='Type your name' required/>
        </section>

        <section className='form-item'>
            <label htmlFor="email" className='form-label'>Email*</label>
            <input type="email" id="email" placeholder='email@email.com' required/>
        </section>

        <section className='form-item'>
            <label htmlFor="message" className='form-label'>Message</label>
            <textarea id="message" type="text" placeholder='Write your message here'/>
        </section>

        <section>
            <button className='submit-btn' type='submit'>Send</button>
        </section>
    </div>
  )
}

export default ContactForm
