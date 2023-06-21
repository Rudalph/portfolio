import React, {useEffect, useRef} from "react";
import Typed from 'typed.js';
import '../../src/Typinganimation.css';
import './Homepage.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import {VscGithub} from 'react-icons/vsc';
import {GrInstagram} from 'react-icons/gr';
import {GrLinkedin} from 'react-icons/gr';
import {SiGmail} from 'react-icons/si';
import { Link } from "react-router-dom";






const Homepage = () => {
    const typingRef = useRef(null);

    useEffect(() => {
        const options = {
            strings: [
                'I AM WEB DEVELOPER',
                'I AM APP DEVELOPER',
                'I AM A PROGRAMMER',
                'KNOW MORE ABOUT ME',
            ],
            typeSpeed:50,
            backSpeed: 50,
            backDelay: 3000,
            loop: true,
            showCursor: true,
        };

        const typingInstance = new Typed(typingRef.current, options);

        return () => {
            typingInstance.destroy();
        };
    }, []);

    return (
        <>
                       <div classname="navbar">

                            <Navbar >
                                <Container>
                                    <Navbar.Collapse className="justify-content-center">
                                    <Navbar.Text>
                                    <Dropdown>
                                                <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic">
                                                    EXPLORE ME
                                                </Dropdown.Toggle>

                                                <Dropdown.Menu >
                                                    <Dropdown.Item href="/Resume">My Resume</Dropdown.Item>
                                                    <Dropdown.Item href="/Certificates_skills">Certifications & Skills</Dropdown.Item>
                                                    <Dropdown.Item href="/Project">My Projects</Dropdown.Item>
                                                    <Dropdown.Item href="/Aboutme">About Me</Dropdown.Item>
                                                    <Dropdown.Item href="/Contact">Contact Me</Dropdown.Item>
                                                </Dropdown.Menu>
                                                </Dropdown>
                                    </Navbar.Text>
                                    </Navbar.Collapse>
                                </Container>
                                </Navbar>
                       </div>
                       

           
             <div className="outline">

                <div className="name-text">
                    <h1><b>RUDALPH GONSALVES</b></h1>
                </div>

                <div className="center-text">
                <div className="typing"><span ref={typingRef}/></div>
                </div>


                <div className="bottom">
                      <Link to="https://github.com/Rudalph"><span><VscGithub className="icon"></VscGithub></span></Link>
                      <Link to="https://www.instagram.com/rudalphgonsalves/?next=%2F"><span><GrInstagram className="icon"></GrInstagram></span></Link>
                      <Link to="https://www.linkedin.com/in/rudalph-gonsalves-219463257/"><span><GrLinkedin className="icon"></GrLinkedin></span></Link>
                      <Link to="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRlRQkzFGtTdqCqdrKpfpJwmdhNkmmnHrLBLHDtLvhkPwdWsHRMznpdpTKxvhtkpWfnlFzB"><span><SiGmail className="icon"></SiGmail></span></Link>
                </div>

              </div>       
        </>

       
        
        

    );
};

export default Homepage;