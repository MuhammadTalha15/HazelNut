import React, { useEffect } from 'react'
import '../styles/footer.css'
import Logo from '../assets/Logo/footer-Logo.png'
import Facebook from '../assets/Icons/facebook.svg'
import Instagram from '../assets/Icons/instagram.svg'
import Github from '../assets/Icons/github.svg'
import Stack from '../assets/Icons/stack-overflow.svg'
import { Link, useLocation } from 'react-router-dom'
import SmoothScrollBtn from './SmoothScrollBtn'

const Footer = () => {
  const date = new Date();
  let currentYear = date.getFullYear();

  const path = useLocation();
  useEffect(() => {
    scrollFooterTop();
  }, [path]);

  const scrollFooterTop = () => {
    window.scrollTo(0, 0);
  }

  return (
    <>
      <section className="footer">
        <div className="uppr-txt-cnt">
          <div className="txt-cnt">
            <p className="ftr-upr-txt">Your Vission, My Expertise Feel free to Contact for your Solutions and Products.</p>
          </div>
        </div>
        <div className="ftr-lgo-cnt">
          <img className='ftr-lgo' src={Logo} alt="Footer Logo" />
        </div>
        <div className="ftr-nav-cnt">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/About">About</Link></li>
            <li><Link to="/Projects">Projects</Link></li>
            <li><Link to="/Contact">Contact</Link></li>
          </ul>
        </div>
        <div className="ftr-scl-lnk-cnt">
          <ul className='scl'>
            <li><a href="#"><img className='ftr-scl-img' src={Facebook} alt="" /></a></li>
            <li><a href="#"><img className='ftr-scl-img' src={Instagram} alt="" /></a></li>
            <li><a href="#"><img className='ftr-scl-img' src={Github} alt="" /></a></li>
            <li><a href="#"><img className='ftr-scl-img' src={Stack} alt="" /></a></li>
          </ul>
        </div>
        <div className="cpy-rht-cnt">
          <p className="cpy-rgt-txt"> Copyright © {currentYear} Website | Muhammad Talha®. All rights reserved. </p>
        </div>
      </section>
    </>
  )
}

export default Footer
