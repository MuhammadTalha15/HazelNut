import React from 'react'
import '../styles/home.css'
import Footer from './Footer'
import ServiceCard from './serviceCard'
import ProjectCard from './projectCard'
import MapComponent from './MapComponent'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import Trophy from '../assets/Icons/Trophy.png'
import Bug from '../assets/Icons/Bug.png'
import Light from '../assets/Icons/lightning.png'
import Clock from '../assets/Icons/Clock.png'

import JavascriptLogo from '../assets/Logo/js.png'
import PythonLogo from '../assets/Logo/py.png'
import ContactCard from './ContactCard'

import Facebook from '../assets/Icons/facebook.svg'
import Instagram from '../assets/Icons/instagram.svg'
import Github from '../assets/Icons/github.svg'
import Mail from '../assets/Icons/mail.svg'

const Home = () => {

  const [text] = useTypewriter({
    words: ['Computer Science Student.', 'Web Developer.', 'Web Designer.', 'Programmer.'],
    loop: {},
  });


  return (
    <>
      <section className='first' id='first'>
        <section className='hero-section'>
          <div className="content-cnt">
            <h1 className="greeting">HELLO THERE</h1>
            <h1 className="greet-after">My name is</h1>
            <h1 className="name">Muhammad Talha</h1>
            <h3 className="intro-tllr">I am a <span className='prof'>{text}</span><Cursor /></h3>
            <p className="hero-p">Explore the Synergy between Design and Development for a visually perfect experience. Discover my seamless workflow of transforming Designs into workflow Website and Web Applications. </p>
            <a href="#" className='vw-btn'>View Work <span className='arrow'></span></a>
          </div>
        </section>
      </section>

      <section className='fir-sec-section'>
        <section className='fir-sec-section-wrapper'>
          <h2 className="before-head">SERVICES</h2>
          <h1 className="main-head">Exceeding Expectations</h1>
          <p className="fir-sec-p">Offering bespoke web development solutions that blend innovation with precision to elevate your digital presence.</p>
          <div className="ser-card-holder">
            <ServiceCard image={Trophy} heading='Expertise in Figma to Webflow' description='Offering bespoke web development solutions that blend innovation with precision to elevate your digital presence.' />
            <ServiceCard image={Bug} heading='Comprehensive Testing' description='Offering bespoke web development solutions that blend innovation with precision to elevate your digital presence.' />
            <ServiceCard image={Light} heading='Interactivity and Responsiveness' description='Offering bespoke web development solutions that blend innovation with precision to elevate your digital presence.' />
            <ServiceCard image={Clock} heading='Product Delivery on Time' description='Offering bespoke web development solutions that blend innovation with precision to elevate your digital presence.' />
          </div>
        </section>
      </section>

      <section className="fir-thir-section">
        <section className='fir-sec-section-wrapper'>
          <h2 className="before-head">PROJECTS</h2>
          <h1 className="main-head">My Latest Projects</h1>
          <p className="fir-sec-p">Discover My Latest  Creations that showcase the Designing Innovations and Digital Essentials. Feel free to Explore for More.</p>
          <div className="ser-card-holder">
            <ProjectCard image={JavascriptLogo} projectHeading='Todo List App' projectDescription='A sleek and efficient to-do list app built with vanilla JavaScript, designed to help you manage tasks effortlessly with a clean and intuitive interface.' />
            <ProjectCard image={JavascriptLogo} projectHeading='Tic Tac Toe Game' projectDescription='A classic Tic Tac Toe game created in vanilla JavaScript, offering a smooth and interactive experience with a simple, user-friendly interface.' />
            <ProjectCard image={PythonLogo} projectHeading='QR Code Generator' projectDescription='A robust QR code generator built with Python, enabling you to create customized QR codes quickly and easily.' />
          </div>
        </section>
      </section>

      <section className="fir-fourth-section">
        <section className='fir-forth-section-wrapper'>
          <h2 className="before-head">CONTACT</h2>
          <h1 className="main-head">Get In Touch</h1>
          <p className="fir-sec-p">Discover My Latest  Creations that showcase the Designing Innovations and Digital Essentials. Feel free to Explore for More.</p>
          <div className="form-cont-holder">
            <form action="submit" className='form'>
              <h3 className="frm-head">Message Me</h3>
              <label className='label' htmlFor="name-input">Name</label>
              <input type="text" name="name-input" id="name-input" className='frm-input' placeholder='Your Name' />

              <label className='label' htmlFor="email-input">Email</label>
              <input type="text" name="email-input" id="email-input" className='frm-input' placeholder='Your Email' />

              <label className='label' htmlFor="sub-input">Subject</label>
              <input type="text" name="sub-input" id="sub-input" className='frm-input' placeholder='Title' />

              <label className='label' htmlFor="txtarea">Message</label>
              <textarea name="txtarea" id="txtarea" className='txtarea' placeholder='Type Here...'></textarea>

              <input type="submit" value="Send Now" className='send-btn' />
            </form>
            <div className="frm-after">
              <div className="cntct-c">
                <ContactCard logo={Facebook} sname='Facebook' />
                <ContactCard logo={Instagram} sname='Instagram' />
                <ContactCard logo={Github} sname='Github' />
                <ContactCard logo={Mail} sname='E-Mail' />
              </div>
              <div className="map">
                <MapComponent />
              </div>
            </div>
          </div>
        </section>
      </section>
      <Footer/>
    </>
  )
}

export default Home
