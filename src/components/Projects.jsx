import React from 'react'
import '../styles/projects.css'
import ProjectCard from './projectCard'
import JavascriptLogo from '../assets/Logo/js.png'
import ReactLogo from '../assets/Logo/react.png'
import PythonLogo from '../assets/Logo/py.png'
import CPPLogo from '../assets/Logo/cpp.png'

const Projects = () => {

    return (
        <>
            <section className="prjct-hero">
                <div className="prjct-txt prjct-cont">
                    <div className="prjct-txt-cont-cnt">
                        <h1 className="prjct-head">PROJECTS</h1>
                        <p className="prjct-descrip">I have Craeted many frontend and Backend Web Projects as well as Desktop Applications and Automation Applications.</p>
                        <p className="prjct-descrip-main">I've developed a diversity of projects using a wide array of technologies. In front-end development, I've built numerous applications with JavaScript, React, Redux, Next.js, and Vite, ranging from dynamic single-page apps to complex user interfaces. On the back-end, I've created robust APIs with Python and Express.js, often integrating MongoDB for scalable database solutions. My experience with C and C++ includes optimizing performance-critical applications and contributing to open-source projects.</p>
                        <a href="https://github.com/MuhammadTalha15" className='prjct-github'>GITHUB</a>
                    </div>
                </div>
                <div className="prjct-tech-cont-cnt">
                    <div className="prjct-tech">
                        <h2 className="prjct-tech-head">Technologies that I am Learning.</h2>
                        <div className="ico-cnt">
                            <a href='https://www.w3schools.com/html/' className="tech-cnt" title='HTML'>
                                <div className="icon-cnt h"></div>
                                <h2 className="ico-title">HTML</h2>
                            </a>
                            <a href='https://javascript.info/' className="tech-cnt" title='JavaScript'>
                                <div className="icon-cnt j"></div>
                                <h2 className="ico-title">JavaScript</h2>
                            </a>
                            <a href='https://react.dev/' className="tech-cnt" title='React'>
                                <div className="icon-cnt r"></div>
                                <h2 className="ico-title">React</h2>
                            </a>
                            <a href='https://www.python.org/doc/' className="tech-cnt" title='Python'>
                                <div className="icon-cnt p"></div>
                                <h2 className="ico-title">Python</h2>
                            </a>
                            <a href='https://isocpp.org/' className="tech-cnt" title='C++'>
                                <div className="icon-cnt c"></div>
                                <h2 className="ico-title">C++</h2>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="projects-container-second-section">
                <div className="headwrapper">
                    <h2 className="prjct-scnd-head">Things I’ve made so Far.</h2>
                    <p className='prjct-scnd-head-para'>Following are Projects that I've Created by Myself and More Stunning Projects are still On way.</p>
                </div>
                <div className="project-cont-wrapper">
                    <ProjectCard image={JavascriptLogo} projectHeading="Todo List App" projectDescription="A sleek and efficient to-do list app built with vanilla JavaScript, designed to help you manage tasks effortlessly with a clean and intuitive interface." projectLink="https://github.com/MuhammadTalha15/Todo-List-App" />
                    <ProjectCard image={JavascriptLogo} projectHeading="Tic Tac Toe Game" projectDescription="A classic Tic Tac Toe game created in vanilla JavaScript, offering a smooth and interactive experience with a simple, user-friendly interface." projectLink="https://github.com/MuhammadTalha15/Tic-Tac-Toe" />
                    <ProjectCard image={ReactLogo} projectHeading="Resume" projectDescription="A dynamic and responsive resume crafted with React.js, showcasing my skills, experience, and achievements with a modern, clean design." projectLink="#" />
                    <ProjectCard image={PythonLogo} projectHeading="QR Code Generator" projectDescription="A robust QR code generator built with Python, enabling you to create customized QR codes quickly and easily." projectLink="https://github.com/MuhammadTalha15/QR-Code-Generator-Python" />
                    <ProjectCard image={CPPLogo} projectHeading="Game in C++" projectDescription="A fully-functional Tic Tac Toe clone developed in C++, providing a seamless and engaging gameplay experience." projectLink="https://github.com/MuhammadTalha15/Tic-Tac-Toe-C-" />
                </div>
            </section>
        </>
    )
}

export default Projects
