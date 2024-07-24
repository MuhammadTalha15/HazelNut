import React from 'react'
import { useEffect, useState } from 'react'
import '../styles/about.css'

const About = () => {

    return (
        <>
            <section className="abt-hero-sec">
                <div className="txt cont">
                    <div className="abt-txt-cont-cnt">
                        <h1 className="abt-head">ABOUT</h1>
                        <p className="abt-descrip">I am Muhammad Talha, an Intermediate Computer Science student currently studying in college. With a passion for web development and computer science, I am dedicated to enhancing my skills and knowledge in the field.</p>
                        <p className="abt-descrip-main">As an intermediate-level computer science student, I am deeply immersed in various technology projects, showcasing a versatile skill set in web development, desktop applications, and data science. My primary tools include JavaScript, Python, React, Express, MongoDB, and C++. Javascript, React are done for my Frontend Projects, comprising Express and MongoDB responsible for Backend. Python is done for Data Science and Desktop Application with company of C++.</p>
                    </div>
                </div>
                <div className="rght cont">
                    <div className="rght-tble-cont-cnt">
                        <table className='abt-table'>
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
                                <th>Adress:</th>
                                <td>Naval Anchorage, Islamabad</td>
                            </tr>
                            <tr>
                                <th>Phone:</th>
                                <td>{`(+92)333-545-9231`}</td>
                            </tr>
                            <tr>
                                <th>Language:</th>
                                <td>English, Urdu</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </section>
            <section className="abt-scnd-sec">
                <div className="ext-lft">
                    <div className="tch-sklls-cnt">
                        <h2 className="skls-head">Technical Skills</h2>
                        <ol className="sklls-ol">
                            <li className='sklls-li'>Problem Solving</li>
                            <li className='sklls-li'>Data Structuring</li>
                            <li className='sklls-li'>Communication</li>
                            <li className='sklls-li'>Time Managment</li>
                            <li className='sklls-li'>Collaborations</li>
                            <li className='sklls-li'>Adaptability</li>
                        </ol>
                    </div>
                    <div className="prfl-sklls-cnt">
                        <h2 className="skls-head">Professional Skills</h2>
                        <ol className="sklls-ol">
                            <li className='sklls-li'>Website Development</li>
                            <li className='sklls-li'>Web App Development</li>
                            <li className='sklls-li'>Program Scripting</li>
                            <li className='sklls-li'>Database Management</li>
                            <li className='sklls-li'>Website Designing</li>
                            <li className='sklls-li'>Cloud Computing</li>
                        </ol>
                    </div>
                    <div className="prsnl-sklls-cnt">
                        <h2 className="skls-head">Personal Skills</h2>
                        <ol className="sklls-ol per">
                            <li className='sklls-li'>Fitness Training, Creativity, Team Work</li>
                        </ol>
                    </div>
                </div>
                <div className="mid"></div>
                <div className="ext-rgt"></div>
            </section>
        </>
    )
}

export default About
