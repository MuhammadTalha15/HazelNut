import React from 'react'
import '../styles/footer.css'
import Logo from '../assets/Logo/logo.png'
import Facebook from '../assets/Icons/facebook.svg'
import Instagram from '../assets/Icons/instagram.svg'
import Github from '../assets/Icons/github.svg'
import Mail from '../assets/Icons/mail.svg'

const Footer = () => {
  const date = new Date();
  let currentYear = date.getFullYear()

  return (
    <>
      <section className="footer">
        <div className="ftr-uppr">
          <div className="ftr-cnt">
            <img src={Logo} alt="" className='ftr-logo' />
            <p className="ftr-lgo-aftr-txt">Your Vission, My Expertise Feel free to Contact for your Solutions and Products.</p>
            <form action="" className='sub-form'>
              <input type="text" name="sub" id="sub" className='sub' placeholder='Email' />
              <input type="submit" className='sub-btn' value="SUBSCRIBE" />
            </form>
            <div className="social-links">
              <a href="#" className='social-link-a' target='_blank'><img className='ftr-social-link-img' src={Facebook} alt="" /></a>
              <a href="#" className='social-link-a' target='_blank'><img className='ftr-social-link-img' src={Instagram} alt="" /></a>
              <a href="#" className='social-link-a' target='_blank'><img className='ftr-social-link-img' src={Github} alt="" /></a>
            </div>
          </div>
          <div className="ftr-cnt">

          </div>
          <div className="ftr-cnt">

          </div>
        </div>
        <div className="ftr-lwr">
          <p className="footer-text">{`Copyright © ${currentYear} Website | Muhammad Talha®. All rights reserved.`}</p>
        </div>
      </section>
    </>
  )
}

export default Footer
