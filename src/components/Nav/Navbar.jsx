import React, { useRef, useEffect, useState } from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';

function Navbar() {
  const navRef = useRef(null);
  const [activeLink, setActiveLink] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false); // new state variable

  useEffect(() => {
    const height = navRef.current.offsetHeight;
    document.documentElement.style.setProperty('--navbar-height-dyn', `${height}px`);
  }, []);

  const handleClick = (e) => {
    setActiveLink(e.target.innerText);
  }
  const handleNavClick = () => { // new handler function
    setIsExpanded(!isExpanded);
  }

  return (    
   <nav ref={navRef} >
    <div onClick={handleNavClick} className={isExpanded ? 'nav-wrapper expanded' : 'nav-wrapper'}>
      <Link to="/" className="main-title">
      <img src="public/icons/favicon/android-chrome-512x512.png" alt="WG logo" className="logo"/>
      <h1 className="title black-ops">Wojciech Górecki</h1>
      </Link>
      <ul>
        <li><Link to="/about-me" onClick={handleClick} className={activeLink === 'About Me' ? 'active' : ''}>About Me</Link></li>
        <li><Link to="/skills" onClick={handleClick} className={activeLink === 'Skills' ? 'active' : ''}>Skills</Link></li>
        <li><Link to="/projects" onClick={handleClick} className={activeLink === 'Projects' ? 'active' : ''}>Projects</Link></li>
        <li><a href="https://github.com/WojteGK" target='blank'><i className="fab fa-github"> GitHub</i></a></li>
      </ul>
    </div>
  </nav>
  )
}

export default Navbar