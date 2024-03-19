import React from 'react'
import './SkillsSection.css'

function SkillsSection() {
  return (
   <div id="skills">
        <h2>Skills</h2>
        <ul>
          <li>C#<img height={14} width={18} src="./src/assets/c-sharp-c.svg" alt="c-sharp icon" /></li>
          <li>Python<img height={14} width={18} src="src\assets\python.svg" alt="python icon" /></li>
          <li>Java<img height={14} width={18} src="src\assets\java.svg" alt="java icon"/></li>
          <li>HTML5<img height={14} width={18} src="src\assets\html5.svg" alt="html5 icon" />
          CSS3<img height={14} width={18} src="src\assets\css3.svg" alt="css3 icon" />
          JavaScript<img height={14} width={18} src="src\assets\javascript.svg" alt="javascript icon" /></li>
          <li>React<img height={12} width={18} src="src\assets\react.svg" alt="react icon" /></li>
        </ul>
   </div>
  )
}

export default SkillsSection