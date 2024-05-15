import React from 'react'
import './AboutMe.css'

function AboutMe() {
  return (
  <div id="about-me" className='subpage about-me'>
    <div className='about-section'>
      <div className="about-me-text">
        <h2 className='sub-heading'>About me</h2>
        <p className='text-block'>Hi! I am Computer Science student from Katowice. 
          In free time I'm also participating in many <a href="/projects">Projects</a>. 
          I have many hobbys, some of which are hitting gym, playing electric guitar,
          and of course programming. I finished 12 years of education in music school
          where I developed many usefull abilities like performing in front of people
          or working in group, which is very useful in many cases.</p>
      </div>
      <div className="about-me-image">
        <img src="https://avatars.githubusercontent.com/u/93033932?s=400&u=0a20f55c1d975413636171aef8ec914e67c73519&v=4" alt=""/>
      </div>
    </div>
    {/* <div className="social-links">
    <a href="https://www.linkedin.com/in/wojciech-g%C3%B3recki-068703265/"><img src="icons/linkedin.png" alt="LinkedIn"/></a>
    </div> */}
  </div>
  )
}

export default AboutMe