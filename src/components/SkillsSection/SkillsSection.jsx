import React from 'react'
import './SkillsSection.css'

function SkillsSection() {
  return (
   <div id="skills" className='subpage skills'>
        <h2>Skills</h2>
        <ul>
          <li><img height={14} width={18} src="icons/c-sharp.svg" alt="[c-sharp icon]" />C# & .NET (Xamarin, Forms)</li>
          <li><img height={14} width={18} src="icons/python.svg" alt="[python icon]" />Python & ML (OpenCV, Scikit-learn, Tensorflow) </li>
          <li><img height={14} width={18} src="icons/java.svg" alt="[java icon]"/>Java</li>                    
          <li><img height={12} width={18} src="icons/react.svg" alt="[react icon]" />Front-end (ReactJS)</li>
          <li>Containerization (Docker, Azure Kubernetes Service)</li>
        </ul>
   </div>
  )
}

export default SkillsSection