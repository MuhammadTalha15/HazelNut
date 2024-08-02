import React from 'react'
import '../styles/contactcard.css'

const ContactCard = (props) => {
  return (
    <>
        <a href={props.link} className="cntct-card">
            <img src={props.logo} alt="" className='contact-card-image'/>
            <h3 className="contact-card-text">Follow on</h3>
            <h2 className="contact-card-head">{props.sname}</h2>
        </a>
    </>
  )
}

export default ContactCard
