
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
        <li><a href="#about-me">O mnie</a></li>
        <li><a href="#capabilities">Czym się zajmuję</a></li>
        <li><a href="#skills">Na czym się znam</a></li>
        <li><a href="#projects">Portfolio</a></li>
        <li><a href="https://github.com/WojteGK" target='blank'><i class="fab fa-github"> GitHub</i></a></li>
      </ul>
    </div>
  </nav>
  )
}

export default Navbar