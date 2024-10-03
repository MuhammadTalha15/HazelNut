import React from 'react'
import { useEffect, useState } from 'react'
import '../styles/about.css'
import vscode from '../assets/Icons/visual-studio.svg'
import figma from '../assets/Icons/logo-figma.svg'
import unsplash from '../assets/Icons/unsplash.svg'
import photoshop from '../assets/Icons/adobe-photoshop-logo.svg'
import Loader from './Loader'
import Skillcard from './Skillcard'

const About = () => {

    return (
        <>
            <Loader />
            <section className="abt-hero-sec">
                <div className="head-cnt">
                    <h2 className="before-head">ABOUT ME</h2>
                    <h1 className="main-head">Learn More About MySelf</h1>
                </div>
                <div className="abt-txt-cont-cnt">
                    <div className="abt-mn-txt">
                        <p className="txt-fir">I am Muhammad Talha, an Intermediate Computer Science student currently studying in college. With a passion for Computer Engineering and Computer Sciences, I am dedicated to enhancing my skills and knowledge in the field.</p>
                        <p className="txt-sec">As an intermediate-level computer science student, I am deeply immersed in various technology projects, showcasing a versatile skill set in web development, desktop applications, and data science. My primary tools include JavaScript, Python, React, Express, MongoDB, and C++.</p>
                        <a href="#" className='vw-btn'>Resume</a>
                    </div>

                    <div className="tble-cnt">
                        <table>
                            <tr>
                                <th>Name:</th>
                                <td>Muhammad Talha</td>
                            </tr>
                            <tr>
                                <th>Date of Birth:</th>
                                <td>18 July 2007</td>
                            </tr>
                            <tr>
                                <th>Email:</th>
                                <td>talhaz5518@gmail.com</td>
                            </tr>
                            <tr>
                                <th>Address:</th>
                                <td>Naval Anchorage, Islamabad</td>
                            </tr>
                            <tr>
                                <th>Phone:</th>
                                <td>0334-5334-658</td>
                            </tr>
                            <tr>
                                <th>Language:</th>
                                <td>Urdu, English</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </section>

            <section className="abt-scnd-sec">
                <div className="abt-scnd-sec-head-cnt">
                    <h2 className="before-head">SKILLS</h2>
                    <h1 className="main-head">My Hard Skill Sets</h1>
                </div>
                <div className="abt-cont-card-cnt">
                    <Skillcard heading='Software Development' description='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque odit necessitatibus cupiditate quae molestias, natus similique id consequuntur non iste quisquam atque molestiae tenetur repudiandae unde sapiente autem minus. Similique!' />
                    <Skillcard heading='Programming Languages' description='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque odit necessitatibus cupiditate quae molestias, natus similique id consequuntur non iste quisquam atque molestiae tenetur repudiandae unde sapiente autem minus. Similique!' />
                    <Skillcard heading='Algorithm Codding' description='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque odit necessitatibus cupiditate quae molestias, natus similique id consequuntur non iste quisquam atque molestiae tenetur repudiandae unde sapiente autem minus. Similique!' />
                    <Skillcard heading='Problem Solving Skills' description='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque odit necessitatibus cupiditate quae molestias, natus similique id consequuntur non iste quisquam atque molestiae tenetur repudiandae unde sapiente autem minus. Similique!' />
                    <Skillcard heading='Technical Writing Skills' description='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque odit necessitatibus cupiditate quae molestias, natus similique id consequuntur non iste quisquam atque molestiae tenetur repudiandae unde sapiente autem minus. Similique!' />
                    {/* <Skillcard heading='Time Management' description='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque odit necessitatibus cupiditate quae molestias, natus similique id consequuntur non iste quisquam atque molestiae tenetur repudiandae unde sapiente autem minus. Similique!' /> */}
                </div>
            </section>
            
            <section className="abt-thrd-sec">
                <div className="abt-scnd-sec-head-cnt">
                    <h1 className="main-head">My Soft Skill Sets</h1>
                </div>
                <div className="abt-cont-card-cnt">
                    <Skillcard heading='Communication Skills' description='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque odit necessitatibus cupiditate quae molestias, natus similique id consequuntur non iste quisquam atque molestiae tenetur repudiandae unde sapiente autem minus. Similique!' />
                    <Skillcard heading='Team Collaboration Skills' description='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque odit necessitatibus cupiditate quae molestias, natus similique id consequuntur non iste quisquam atque molestiae tenetur repudiandae unde sapiente autem minus. Similique!' />
                    {/* <Skillcard heading='Creative Thinking' description='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque odit necessitatibus cupiditate quae molestias, natus similique id consequuntur non iste quisquam atque molestiae tenetur repudiandae unde sapiente autem minus. Similique!' /> */}
                    <Skillcard heading='Task Adaptibility' description='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque odit necessitatibus cupiditate quae molestias, natus similique id consequuntur non iste quisquam atque molestiae tenetur repudiandae unde sapiente autem minus. Similique!' />
                    <Skillcard heading='Leadership Skills' description='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque odit necessitatibus cupiditate quae molestias, natus similique id consequuntur non iste quisquam atque molestiae tenetur repudiandae unde sapiente autem minus. Similique!' />
                    <Skillcard heading='Accountability' description='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque odit necessitatibus cupiditate quae molestias, natus similique id consequuntur non iste quisquam atque molestiae tenetur repudiandae unde sapiente autem minus. Similique!' />
                </div>
            </section>
        </>
    )
}

export default About
