import React from 'react'
import './Footer.css'

function Footer() {
  const year = new Date().getFullYear()
  return (
   <div id="footer">      
      <footer>
        <div>Wojciech Górecki</div>
        <div className='year'>{year}</div>
      </footer>
   </div>
  )
}

export default Footer