import React from 'react'
import '../styles/home.css'
import ServiceCard from './serviceCard'
import ProjectCard from './projectCard'
import MapComponent from './MapComponent'
import Loader from './Loader'

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

import Facebook from '../assets/Logo/facebook.svg'
import Instagram from '../assets/Logo/instagram.svg'
import Github from '../assets/Logo/github.svg'
import Stack from '../assets/Logo/stack-overflow.svg'
import Mail from '../assets/Icons/Message.png'
import Pin from '../assets/Icons/Pin.png'


const Home = () => {

  const [text] = useTypewriter({
    words: ['Computer Science Student.', 'Web Developer.', 'Web Designer.', 'Programmer.'],
    loop: {},
  });


  return (
    <>
      <Loader />
      <section className='first' id='first'>
        <section className='hero-section'>
          <div className="content-cnt">
            <h1 className="greeting">HELLO THERE</h1>
            <h1 className="greet-after">I am <span className='name'>Muhammad Talha</span></h1>
            <h3 className="prof">{text}<Cursor cursorColor='transparent' /></h3>
            <p className="hero-p">Explore the Synergy between Design and Development for a visually perfect experience.</p>
            <a href="#" className='vw-btn'>View Work <span className='arrow'></span></a>
          </div>
        </section>
      </section>

      <section className='fir-sec-section'>
        <section className='fir-sec-section-wrapper'>
          <div className="fir-sec-txt-cnt">
            <h2 className="before-head">SERVICES</h2>
            <h1 className="main-head">Exceeding Expectations</h1>
            <p className="fir-sec-p">Offering bespoke web development solutions that blend innovation with precision to elevate your digital presence.</p>
          </div>
          <div className="ser-card-holder">
            <ServiceCard image={Trophy} heading='Expertise in Figma to Webflow' description='Seamlessly transform your designs from Figma to Webflow with my expertise, ensuring pixel-perfect implementation and interactive, responsive websites.' />
            <ServiceCard image={Bug} heading='Comprehensive Testing' description='Ensure your projects are robust and error-free with my comprehensive testing services, covering functionality, performance, and user experience.' />
            <ServiceCard image={Light} heading='Interactivity and Responsiveness' description='Enhance user experience with dynamic interactivity and seamless responsiveness, ensuring your website looks and performs flawlessly on all devices.' />
            <ServiceCard image={Clock} heading='Product Delivery on Time' description='Depend on timely and efficient product delivery, ensuring your projects are completed and launched as scheduled without compromising quality.' />
          </div>
        </section>
      </section>

      <section className="fir-thir-section">
        <section className='fir-sec-section-wrapper'>
          <div className="fir-sec-txt-cnt">
            <h2 className="before-head">PROJECTS</h2>
            <h1 className="main-head">My Latest Projects</h1>
            <p className="fir-sec-p">Discover My Latest  Creations that showcase the Designing Innovations and Digital Essentials. Feel free to Explore for More.</p>
          </div>
          <div className="ser-card-holder">
            <ProjectCard image={JavascriptLogo} projectHeading='Todo List App' projectDescription='A sleek and efficient to-do list app built with vanilla JavaScript, designed to help you manage tasks effortlessly with a clean and intuitive interface.' />
            <ProjectCard image={JavascriptLogo} projectHeading='Tic Tac Toe Game' projectDescription='A classic Tic Tac Toe game created in vanilla JavaScript, offering a smooth and interactive experience with a simple, user-friendly interface.' />
            <ProjectCard image={PythonLogo} projectHeading='QR Code Generator' projectDescription='A robust QR code generator built with Python, enabling you to create customized QR codes quickly and easily.' />
          </div>
        </section>
      </section>

      <section className="fir-fourth-section">
        <section className='fir-forth-section-wrapper'>
          <div className="fir-sec-txt-cnt">

            <h2 className="before-head">CONTACT</h2>
            <h1 className="main-head">Get In Touch</h1>
            <p className="fir-sec-p">Reach out to collaborate or discuss innovative web solutions—I'm here to connect.</p>
          </div>
          <div className="last-cont-holder">
            <p className="contct-p">Thank you for your interest in getting in touch with me. I welcome your feedback, questions, and suggestions. If you have a specific question or comment, please feel free to email me directly at talhaz5518@gmail.com</p>
            <div className="lnk-cnt">
              <a href="#" className='scl-a'>
                <img src={Facebook} alt="" className="scl-lnk-img" />
                <h3 className="scl-lbl">Follow me on</h3>
                <h3 className="scl-name">Facebook</h3>
              </a>
              <a href="#" className='scl-a'>
                <img src={Instagram} alt="" className="scl-lnk-img" />
                <h3 className="scl-lbl">Follow me on</h3>
                <h3 className="scl-name">Instagram</h3>
              </a>
              <a href="#" className='scl-a'>
                <img src={Github} alt="" className="scl-lnk-img" />
                <h3 className="scl-lbl">Follow me on</h3>
                <h3 className="scl-name">Github</h3>
              </a>
              <a href="#" className='scl-a'>
                <img src={Stack} alt="" className="scl-lnk-img" />
                <h3 className="scl-lbl">Follow me on</h3>
                <h3 className="scl-name">Stack-Overflow</h3>
              </a>
              {/* <div className="scl-a">
                <img src={Mail} alt="" className='cntct-aftr-img' />
                <h3 className="scl-name">talhaz5518@gmail.com</h3>
              </div>
              <div className="scl-a">
                <img src={Pin} alt="" className='cntct-aftr-img' />
                <h3 className="scl-name">Naval Anchorage, Islamabad</h3>
              </div> */}
            </div>
            <a href="#" className='vw-btn'>Contact Me <span className='arrow'></span></a>
          </div>
        </section>
      </section>
    </>
  )
}

export default Home
