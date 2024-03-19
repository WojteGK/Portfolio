import React from 'react'

function SkillsSection() {
  return (
   <div id="what-i-know">
        <h2>Na czym się znam</h2>
        <ul>
          <li>C#<img height={14} width={18} src="./src/assets/c-sharp-c.svg" alt="c-sharp icon" /></li>
          <li>Python<img height={14} width={18} src="src\assets\python.svg" alt="python icon" /></li>
          <li>Java</li>
          <li>HTML5<i className="fab fa-html5"></i>, CSS3<i class="fab fa-css3-alt"></i>, podstawy JavaScript<i class="fab fa-js-square"></i></li>
        </ul>
   </div>
  )
}

export default SkillsSection