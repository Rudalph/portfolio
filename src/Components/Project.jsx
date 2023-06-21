import React from "react";
import '../Components/Project.css';
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { MdOutlineManageHistory } from 'react-icons/md';
import { MdWorkHistory } from 'react-icons/md';
import { RiRecycleFill } from 'react-icons/ri';
import { IoMdLogIn } from 'react-icons/io';
import Button from 'react-bootstrap/Button';
function Project ()
{
    return(
        <>
           <div className="main">
                <h1><b><i>My Projects</i></b></h1>
           </div>
           <br></br>
           <br></br>
           <br></br>
            <div>
                    <Container>
                        <Row className="center">
                            <Col><Link to="https://github.com/Rudalph/Flutter_pbl"><button className="project-button"><MdOutlineManageHistory className="project-icon"></MdOutlineManageHistory>Disaster Management</button></Link></Col>
                            <Col><Link><button className="project-button"><MdWorkHistory className="project-icon"></MdWorkHistory>Client-Worker</button></Link></Col>
                        </Row>
                        <br></br>
                        <br></br>
                        <br></br>
                        <Row className="center">
                            <Col><Link to="https://github.com/Rudalph/E-waste-reduction-system"><button className="project-button"><RiRecycleFill className="project-icon"></RiRecycleFill>Waste Reduction</button></Link></Col>
                            <Col><Link><button className="project-button"><IoMdLogIn className="project-icon"></IoMdLogIn>Signup-Login</button></Link></Col>
                        </Row>

                         <br></br>
                        <Row >
                            <Col className="button"><Link to={'/'}><Button variant="outline-secondary">HOME</Button>{' '}</Link></Col>
                        </Row>
                        
                    </Container>
                    <br></br>
                        

           </div>
            
        </>
    );
}

export default Project;