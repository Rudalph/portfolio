import React from "react";
import '../Components/Resume.css';
import { CgDetailsMore } from 'react-icons/cg';
import { FcViewDetails } from 'react-icons/fc';
import { FaUser } from 'react-icons/fa';
import { MdMobileScreenShare } from 'react-icons/md';
import { CgWebsite } from 'react-icons/cg';
import { SiCodersrank } from 'react-icons/si';
import { MdWorkHistory } from 'react-icons/md';
import { IoBookSharp } from 'react-icons/io5';
import { ImBooks } from 'react-icons/im';
import { MdLeaderboard } from 'react-icons/md';
import { SiAlgorand } from 'react-icons/si';
import { SlSocialGoogle } from 'react-icons/sl';
import { SiExpensify } from 'react-icons/si';
import { FaLaptopCode } from 'react-icons/fa';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

function Resume() 
{
   

    return(
        <>  
           <div className="Resume-txt">
                <h1><b><i><FcViewDetails></FcViewDetails>Resume</i></b></h1> 
                
            </div> 

             <hr className="line"></hr> 

             <div className="title">
                <h3><b><i><CgDetailsMore className="resume-icons"></CgDetailsMore>About Me</i></b></h3> 
            </div>
           
            <div className="resume-sub-body">
                 <Container>
                   <Row>
                        <Col><FaUser className="resume-sub-icons"></FaUser> Rudalph Gonsalves</Col>
                    </Row>
                    <Row>
                    
                        <Col><MdMobileScreenShare className="resume-sub-icons"></MdMobileScreenShare> Full Stack App Developer</Col>
                        <Col><CgWebsite className="resume-sub-icons"></CgWebsite> Full Stack Web Developer</Col>
                    </Row>
                    <Row>
                        <Col><SiCodersrank className="resume-sub-icons"></SiCodersrank> Coder @ Codechef</Col>
                        <Col><MdWorkHistory className="resume-sub-icons"></MdWorkHistory> Intern @ JPM&C</Col>
                    </Row>
                    <br></br>
                </Container>
                </div>

                <hr className="line"></hr> 

                <div className="title">
                    <h3><b><i></i><IoBookSharp className="resume-sub-icons"></IoBookSharp> Education</b></h3> 
              </div>
                <div className="resume-sub-body">
                <Container>
                 <Row>
                        <Col><ImBooks className="resume-sub-icons"></ImBooks> HSC-R P Junior College of Arts Commerce & Science(93.38%)</Col>
                        <Col><ImBooks className="resume-sub-icons"></ImBooks> B.E.-Fr Conceicao Rodrigues College of Engineering</Col>
                </Row>
                <br></br>
              </Container>            
            </div>

            <hr className="line"></hr> 

            <div className="title">
                    <h3><b><i></i><MdLeaderboard className="resume-sub-icons"></MdLeaderboard>Leadership</b></h3> 
              </div>
            <div className="resume-sub-body">
                <Container>
                 <Row>
                        <Col><SiAlgorand className="resume-sub-icons"></SiAlgorand> AlgoZenith Campus Connection Lead @FRCRCE(2023-24)</Col>
                        <Col><SlSocialGoogle className="resume-sub-icons"></SlSocialGoogle> Google Developer Student Clubs Asociate @FRCRCE(2022-23)</Col>
                </Row>
                <br></br>
              </Container>            
            </div>

            <hr className="line"></hr> 

            <div className="title">
                    <h3><b><i></i><SiExpensify className="resume-sub-icons"></SiExpensify>Experience</b></h3> 
              </div>
            <div className="resume-sub-body">
                <Container>
                 <Row>
                  <Col><FaLaptopCode className="resume-sub-icons"></FaLaptopCode> Software Engineering Intern @ JPM&C</Col>  
                  <Col ><Link to={'/'}><Button className="button-1" variant="outline-secondary">HOME</Button>{' '}</Link></Col> 
                </Row>
                
                
              </Container> 
                       
            </div>
           
            
            
        </>
    );
}

export default Resume;

