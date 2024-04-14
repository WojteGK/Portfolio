
import React, { useState } from 'react';
import '../Nav/Navbar.css'

function Navbar() {
  return (    
   <nav>
    <div className="nav-wrapper">
    <button className="hamburger" id="expand-button">
      <div className="line"></div>
      <div className="line"></div>
      <div className="line"></div>
    </button>
      <h1 className="title black-ops">Wojciech Górecki</h1>
      <ul>
        <li><a href="#about-me">About Me</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="https://github.com/WojteGK" target='blank'><i class="fab fa-github"> GitHub</i></a></li>
      </ul>
    </div>
  </nav>
  )
}

export default Navbar