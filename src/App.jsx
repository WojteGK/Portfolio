import './App.css'
import Navbar from './components/Nav/Navbar'
import AboutMe from './components/AboutMe/AboutMe'
import SkillsSection from './components/SkillsSection/SkillsSection'
import ProjectSection from './components/ProjectSection/ProjectSection'
import Homepage from './components/Homepage/Homepage'
import Footer from './components/Footer/Footer'
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  return (
      <div>
    <Router>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Homepage/>} />
          <Route path="/about-me" element={<AboutMe/>} />
          <Route path="/skills" element={<SkillsSection />} />
          <Route path="/projects" element={<ProjectSection/>} />
        </Routes>
    </Router>
        <Footer />
      </div>
  )
}

export default App
