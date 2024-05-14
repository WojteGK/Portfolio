import React from 'react'
import './SkillsSection.css'

function SkillsSection() {
  return (
   <div id="skills" className='subpage skills'>
        <h2>Skills</h2>
        <ul>
          <li>C#<img height={14} width={18} src="icons/c-sharp.svg" alt="[c-sharp icon]" /></li>
          <li>Python<img height={14} width={18} src="icons/python.svg" alt="[python icon]" /></li>
          <li>Java<img height={14} width={18} src="icons/java.svg" alt="[java icon]"/></li>
          <li>HTML5<img height={14} width={18} src="icons/html5.svg" alt="[html5 icon]" />
            CSS3<img height={14} width={18} src="icons/css3.svg" alt="[css3 icon]" />
            JavaScript<img height={14} width={18} src="icons/javascript.svg" alt="[javascript icon]" /></li>
          <li>React<img height={12} width={18} src="icons/react.svg" alt="[react icon]" /></li>
        </ul>
   </div>
  )
}

export default SkillsSection