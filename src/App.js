import './App.css';
import React from 'react';
import { BrowserRouter as  Router,Routes, Route } from 'react-router-dom';
import Homepage from './Components/Homepage';
import Aboutme from './Components/Aboutme';
import Contact from './Components/Contact';
import Project from './Components/Project';
import Certificates_skills from './Components/Certificates_skills';
import Resume from './Components/Resume';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Routes>
         <Route path='/' element={<Homepage/>}/>
         <Route path='/Aboutme' element={<Aboutme/>}/>
         <Route path='/Contact' element={<Contact/>}/>
         <Route path='/Certificates_skills' element={<Certificates_skills/>}/>
         <Route path='/Project' element={<Project/>}/>
         <Route path='/Resume' element={<Resume/>}/>
      </Routes>
    </Router>
  );
}

export default App;
