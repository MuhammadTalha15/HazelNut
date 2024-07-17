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
                        <p className="abt-descrip">With a foundation built on both Intermediate and Beginner-level creations, I am on a journey to evolve into a seasoned Computer Scientist.</p>
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
            {/* <section className="abt-scnd-sec">
                <div className="ext-lft"></div>
                <div className="mid"></div>
                <div className="ext-rgt"></div>
            </section> */}
        </>
    )
}

export default About
