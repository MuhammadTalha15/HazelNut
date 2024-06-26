import React from 'react'
import { useEffect, useState } from 'react'
import '../styles/about.css'

const About = () => {

    return (
        <>
            <section className="abt-hero-sec">
                <div className="txt cont">
                    <h1 className="abt-head">ABOUT</h1>
                    <p className="descrip">With a foundation built on both Intermediate and Beginner-level creations, I am on a journey to evolve into a seasoned Computer Scientist.</p>
                    <p className="descrip-main">As an intermediate-level computer science student, I am deeply immersed in various technology projects, showcasing a versatile skill set in web development, desktop applications, and data science. My primary tools include JavaScript, Python, React, Express, MongoDB, and C++. Javascript, React are done for my Frontend Projects, comprising Express and MongoDB responsible for Backend. Python is done for Data Science and Desktop Application with company of C++.</p>
                </div>
                <div className="rght cont">
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
            </section>
        </>
    )
}

export default About
