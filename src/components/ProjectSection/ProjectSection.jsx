import React from 'react'
import './ProjectSection.css'
import Project from './Project/Project.jsx'

function ProjectSection() {
  const projects = [
    { name: 'The Goodnight project', 
      link: 'https://github.com/WojteGK/GoodNight-Project',
      description: 'A project developed by me and 3 other students that aimed into creating mobile app that was meant to improve our sleep experience by waking user up after exact calculated time while user was in REM sleep phase. ',
      imgPath: './icons/project_default.png',
      imgAlt: 'project image',},
    { name: 'The ModLoader Project',
      link: 'https://github.com/WojteGK/Mod-Loader',
      description: 'A project of none GUI app that aimed into creating a simple modpack installer into Minecraft game. ',
      imgPath: './icons/project_default.png',
      imgAlt: 'project image',},
    { name: 'The Discover your drink project',
      link: 'https://github.com/Krzysiek742/Discover-your-drink',
      description: 'A project of a website that aimed into helping user to find a drink that would suit him the best. ',
      imgPath: 'icons/project_default.png',
      imgAlt: 'project image',}
  ]
  return (
    <div id="projects" className='subpage projects'>
      <h2>My projects:</h2>
      <ol className='project-list'>
        {projects.map((project, index) => (
          <li key={index}>
            <Project name={project.name} link={project.link} description={project.description} imgPath={project.imgPath} imgAlt={project.imgAlt}/>
          </li>
        ))}
      </ol>
    </div>
  )
}

export default ProjectSection