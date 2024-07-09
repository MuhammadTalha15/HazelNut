import React from 'react'
import '../styles/home.css'
import Footer from './Footer'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {

  const [text] = useTypewriter({
    words: ['Computer Science Student.', 'Web Developer.', 'Web Designer.', 'Programmer.'],
    loop: {},
  });


  return (
    <>
  
      <section className='first'>
        <section className='hero-section'>
          <div className="content-cnt">
            <h2 className="greeting">HELLO THERE</h2>
            <h3 className="greet-after">My name is</h3>
            <h1 className="name">Muhammad Talha</h1>
            <h3 className="intro-tllr">I am a <span className='prof'>{text}</span><Cursor /></h3>
            <div className="btn-cnt">
              <li className='btn resume'>Resume</li>
              <Link to="/Contact"><li className='btn contact'>Contact Me</li></Link>
            </div>
            <div className="scl-cnt">
                <a href="https://www.facebook.com/profile.php?id=100092518021987" className='scl face' title='Facebook'></a>
                <a href="https://www.instagram.com/ttlha._15" className='scl ins' title='Instagram'></a>
                <a href="https://stackoverflow.com/users/23203699/muhammad-talha?tab=topactivity" className='scl stack' title='StackOverflow'></a>
                <a href="https://www.github.com/MuhammadTalha15" className='scl git' title='Github'></a>
                <p className='scl-fllw'>Follow Me</p>
            </div>
          </div>
        </section>
        <Footer />
      </section>
    </>
  )
}

export default Home
