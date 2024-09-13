import React from 'react'
import '../styles/contact.css'

const Contact = () => {
  return (
    <>
      <section className="cntct-hero">
        <div className="cntct-lft">
          <div className="contact-left-cont-cnt">
            <h1 className="cntct-head">CONTACT</h1>
            <p className="contact-para">Feel free to Contact me</p>
            <p className="contact-des">Thank you for your interest in getting in touch with me. I welcome your feedback, questions, and suggestions. If you have a specific question or comment, please feel free to email me directly at <a href='#' className='contact-des-email'>talhaz5518@gmail.com</a></p>
            <div className="contact-link-cnt">
              <a href="https://www.facebook.com/profile.php?id=100092518021987" className='contact-scl-links'><span className='contact-links-ico f'></span>Follow on Facebook</a>
              <a href="https://www.instagram.com/ttlha._15" className='contact-scl-links'><span className='contact-links-ico i'></span>Follow on Instagram</a>
              <a href="https://www.github.com/Muhammadtalha15" className='contact-scl-links'><span className='contact-links-ico g'></span>Follow on Github</a>
              <a href="https://mail.google.com" className='contact-scl-links eml-a'><span className='contact-links-ico e'></span> talhaz5518@gmail.com</a>
            </div>
          </div>
        </div>
        <div className="cntct-right">

          <form action="" className="contact-form">
            <input className='cntct-inpt-txt nm' type="text" name="" id="name" placeholder='Name' />
            <input className='cntct-inpt-txt eml' type="text" name="" id="email" placeholder='Email' />
            <textarea className='cntact-message' name="" id="message" placeholder='Message'></textarea>
            <input type="submit" className='contact-sub-btn' value={`SEND`} />
          </form>
        </div>
      </section>
    </>
  )
}

export default Contact
