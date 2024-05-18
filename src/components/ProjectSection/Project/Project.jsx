import React from 'react'
import './Project.css'

export default function Project({name = 'Default Name', 
                                 link = 'https://github.com/wojtegk', 
                                 description = '', 
                                 imgPath = 'icons/project_default.png', 
                                 imgAlt = 'project image'
                              }) {
  return (
    <div className='project'>
      <div className='project-info'>
      <h3 className='project-name' ><a href={link} target='_blank' rel='noopener noreferrer'> {name}</a></h3>
         {description}
      </div>
      <img className='project-image' src={imgPath} alt={imgAlt}/>
    </div>
  )
}
