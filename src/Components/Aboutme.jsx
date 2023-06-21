import React from "react";
import './Aboutme.css';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import img1 from '../Images/Rudalph.jpeg';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import {VscGithub} from 'react-icons/vsc';
import {GrInstagram} from 'react-icons/gr';
import {GrLinkedin} from 'react-icons/gr';
import {SiGmail} from 'react-icons/si';


function Aboutme () 
{
   return(
    <>

       <div className="general">
              <h1 className="aboutmeleadtxt"><b><i>KNOW ABOUT ME</i></b></h1>
              <Container className="general">
                <Row>            
                  <Col xs={6} md={4}>
                    <Image className="leadimage" src={img1} rounded/>
                  </Col>
                </Row>
              </Container>

              <br></br> 

              
              <Container fluid="md">
                  <Row>
                    <Col><h5 className="aboutmeleadtxt disc-color"><i>Highly motivated computer engineering student at Fr. Conceicao Rodrigues College of Engineering. Certified full stack Web and app developer. Seeking a challenging internship opportunity in the field of full stack app and web development or related domains, leveraging my skills and experiences to contribute to a dynamic organization. Software Engineering intern at JP Morgan & Chase</i></h5></Col>
                  </Row>
                </Container>
                <br></br>

                <Container>
                    <Row>
                      <Col><h5 className="aboutmeleadtxt">Name:<i>Rudalph Victor Gonsalves</i> </h5></Col>
                      <Col><h5 className="aboutmeleadtxt">City:<i>Mumbai</i> </h5></Col>
                    </Row>
                    <br></br>
                    <Row>
                      <Col><h5 className="aboutmeleadtxt">Age:<i>19 years</i> </h5></Col>
                      <Col><h5 className="aboutmeleadtxt">Phone:<i>7249735828</i> </h5></Col>
                    </Row>
                    <br></br>
                    <Row>
                      <Col><h5 className="aboutmeleadtxt">Degree:<i>Computer Engineering</i> </h5></Col>
                      <Col><h5 className="aboutmeleadtxt">Year of Study:<i>Third Year</i> </h5></Col>
                    </Row>
                    <br></br>
                    <Row>
                      <Col><h5 className="aboutmeleadtxt"><i>Algozenith Campus Connection Lead</i> </h5></Col>
                      <Col><h5 className="aboutmeleadtxt"><i>GDSC Asociate @FRCRCE</i> </h5></Col>
                    </Row>
                    
                    <br></br>
                    <Row className="amicons">
                      <Col> <Link to="https://github.com/Rudalph"><span><VscGithub className="icon"></VscGithub></span></Link></Col>
                      <Col><Link to="https://www.instagram.com/rudalphgonsalves/?next=%2F"><span><GrInstagram className="icon"></GrInstagram></span></Link></Col>
                      <Col><Link to="https://www.linkedin.com/in/rudalph-gonsalves-219463257/"><span><GrLinkedin className="icon"></GrLinkedin></span></Link></Col>
                      <Col><Link to="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRlRQkzFGtTdqCqdrKpfpJwmdhNkmmnHrLBLHDtLvhkPwdWsHRMznpdpTKxvhtkpWfnlFzB"><span><SiGmail className="icon"></SiGmail></span></Link></Col>
                    </Row>
                   
                    <Row>
                       <Col className="button"><Link to={'/'}><Button variant="outline-secondary">HOME</Button>{' '}</Link></Col> 
                    </Row>

                    
                
                </Container>       
       </div>

              

                  
    </>
   );
}

export default Aboutme;