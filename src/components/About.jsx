import React from 'react'
import { useEffect, useState } from 'react'
import '../styles/about.css'
import vscode from '../assets/Icons/visual-studio.svg'
import figma from '../assets/Icons/logo-figma.svg'
import unsplash from '../assets/Icons/unsplash.svg'
import photoshop from '../assets/Icons/adobe-photoshop-logo.svg'
import Loader from './Loader'

const About = () => {

    return (
        <>
            <Loader />
            <section className="abt-hero-sec">
                <div className="abt-sec-head">
                    <h1 className="abt-mn-hd">ABOUT ME</h1>
                </div>
                <div className="prsl-dta-sec">
                    <div className="heading-cnt">
                        <h2 className="prsl-hd-fir">PERSONAL INFO</h2>
                        <h1 className="prsl-mn-hd">Learn About Me</h1>
                    </div>
                    <div className="abt-txt-cnt">
                        <p className="abt-prsl-txt">I am Muhammad Talha, an Intermediate Computer Science student currently studying in college. With a passion for Computer Engineering and Computer Sciences, I am dedicated to enhancing my skills and knowledge in the field.</p>
                        <p className="abt-prsl-txt">As an intermediate-level computer science student, I am deeply immersed in various technology projects, showcasing a versatile skill set in web development, desktop applications, and data science. My primary tools include JavaScript, Python, React, Express, MongoDB, and C++.</p>
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
                        </table>

                        <table>
                            <tr>
                                <th>Adress:</th>
                                <td>Naval Anchorage, Islamabad</td>
                            </tr>
                            <tr>
                                <th>Phone:</th>
                                <td>(+92)334-534-4658</td>
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

            </section>
        </>
    )
}

export default About
