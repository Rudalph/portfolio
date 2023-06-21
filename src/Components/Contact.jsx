import React, {useState} from "react";
import './Contact.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { collection, addDoc, getDocs } from "firebase/firestore";
import {db} from './firebase';
import {Link} from 'react-router-dom';





function Contact () {

    const [data, setData] = useState({
        firstname:'',
        lastname:'',
        email:'',
        contact:'',
        subject:'',
        message:''
    })

    function submitForm() 
    {
        if(data.firstname==='' || data.lastname==='' || data.email==="" || data.contact==='' || data.subject==='' || data.message==='')
        {
            alert("Fill all the feilds to proceed. Thank you");
        }
        else
        {
            try{
                const docRef = addDoc(collection(db,"collections"),
                {
                  firstname:data.firstname,
                  lastname:data.lastname,
                  email:data.email,
                  contact:data.contact,
                  subject:data.subject,
                  message:data.message,
                });
                console.log("successfully data stored")
                
                 alert("Thank yor for approaching me. I will revert back soon.")
           } catch(e)
           {
             console.log("Couldnot store data")
           }
        }
        }
    return (
        <>
           <div className="heading">
                  <h1><b><i>CONTACT ME</i></b></h1>
                  <hr></hr> 
                  <br></br>
                  <br></br>  
                  <Container>
                        <Row className="subject">
                            <Col className="col"><input className="input" placeholder="Enter First Name" type="name" onChange={(event)=>setData((prev) => ({...prev, firstname: event.target.value}))}></input> </Col>
                            <Col className="col"><input className="input" placeholder="Enter Last Name" type="name" onChange={(event)=>setData((prev) => ({...prev, lastname: event.target.value}))}></input> </Col>
                        </Row>
                        <br></br>
                        <Row>
                            <Col><input className="input" placeholder="Enter Your email-id" type="email" onChange={(event)=>setData((prev) => ({...prev, email: event.target.value}))}></input> </Col>
                            <Col><input className="input" placeholder="Enter Your Contact Number" type="Number" onChange={(event)=>setData((prev) => ({...prev, contact: event.target.value}))}></input> </Col>
                        </Row>
                        <br></br>
                        <Row>
                            <Col><input className="input" placeholder="Enter Subject Of Message" type="text" onChange={(event)=>setData((prev) => ({...prev, subject: event.target.value}))}></input></Col> 
                            <Col><textarea className="input" placeholder="Enter Message" type="text" onChange={(event)=>setData((prev) => ({...prev, message: event.target.value}))}></textarea></Col>                          
                        </Row>
                        
                        <br></br><br></br>
                 <div className="heading1">
                       <Link to={'/'}><Button variant="outline-secondary" onClick={submitForm}>Submit Form</Button></Link>
                 </div>
                 <hr></hr>
                 </Container> 
                                 
            </div>
           
        </>
    );
}

export default Contact;