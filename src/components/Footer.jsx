import React, { useEffect } from 'react'
import '../styles/footer.css'
import Logo from '../assets/Logo/logo.png'
import Facebook from '../assets/Icons/facebook.svg'
import Instagram from '../assets/Icons/instagram.svg'
import Github from '../assets/Icons/github.svg'
import { Link, useLocation } from 'react-router-dom'
import SmoothScrollBtn from './SmoothScrollBtn'

const Footer = () => {
  const date = new Date();
  let currentYear = date.getFullYear();

  const path = useLocation();
  useEffect(() => {
    scrollFooterTop();  
    console.log('Changed')
  }, [path]);

  const scrollFooterTop = () => {
    window.scrollTo(0, 0);
  }

  return (
    <>
      <section className="footer">
        <div className="ftr-uppr">
          <SmoothScrollBtn/>
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
          <div className="ftr-cnt mid">
              <h2 className="ftr-nav">Navigation</h2>
              <ol className='ftr-ol'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/About">About</Link></li>
                <li><Link to="/Projects">Projects</Link></li>
                <li><Link to="/Contact">Contact</Link></li>
              </ol>
          </div>
          <div className="ftr-cnt mid">
          <h2 className="ftr-nav">Get in Touch</h2>
              <ol className='ftr-ol'>
                <li className='ftr-info'>(+92)333-5281312</li>
                <li className='ftr-info'>0333-5467312</li>
                <li className='ftr-info'>talhaz5518@gmail.com</li>
                <li className='ftr-info'>Contact</li>
              </ol>
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
