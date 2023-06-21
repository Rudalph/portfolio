import React from "react";
import '../Components/Certificates_skills.css';
import Carousel from 'react-bootstrap/Carousel';
import flutter from '../Images/Flutter.png';
import fswd from '../Images/fswd.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";


function Certificates_skills ()
{
    return(
       <>
           <div className="head"><h1><b><i>CERTIFICATIONS</i></b></h1></div>
           <br></br>
           <h4 className="aboutmeleadtxt"><b><i>Development</i></b></h4>  
           <br></br>
                <Carousel>
                    <Carousel.Item>
                        <div className="trial">
                        <img
                        className="d-block w-100"
                        src={flutter}
                        alt="First slide"
                        />
                        </div>
                    </Carousel.Item>

                    <Carousel.Item>
                        <div className="trial">
                        <img
                        className="d-block w-100"
                        src={fswd}
                        alt="First slide"
                        />
                        </div>
                    </Carousel.Item>
                    
                </Carousel>  
                <div className="head"><h1><b><i>SKILLS</i></b></h1></div>
                <div >
                <Container>
                    <Row className="row">
                        <Col><h3 className="skills" ><i>C<ProgressBar striped variant="success" animated now={80} /></i></h3></Col>
                        <Col><h3 className="skills" ><i>C++<ProgressBar striped variant="danger" animated now={30} /></i></h3></Col>
                        <Col><h3 className="skills" ><i>JAVA<ProgressBar striped variant="info" animated now={50} /></i></h3></Col>
                    </Row>
                    <Row>
                       <Col><h3 className="skills" ><i>App Development<ProgressBar striped variant="danger" animated now={60} /></i></h3></Col>
                        <Col><h3 className="skills" ><i>Web Development<ProgressBar striped variant="success" animated now={75} /></i></h3></Col>
                    </Row>
                    <Row>
                       <Col><h3 className="skills" ><i>PYTHON<ProgressBar striped variant="primary" animated now={40} /></i></h3></Col>
                       <Col><h3 className="skills" ><i>Communication<ProgressBar striped variant="primary" animated now={60} /></i></h3></Col>
                        <Col><h3 className="skills" ><i>Leadership<ProgressBar striped variant="info" animated now={75} /></i></h3></Col>
                    </Row>
                    <br></br>
                    <Row>
                       <Col className="button"><Link to={'/'}><Button variant="outline-secondary">HOME</Button>{' '}</Link></Col> 
                    </Row>
                    </Container>
                </div>  
                <br></br>
               
       </>
    );
}

export default Certificates_skills;