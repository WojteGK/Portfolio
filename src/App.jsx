import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <nav>
        <div class="nav-wrapper">
          <h1 class="title black-ops">Wojciech Górecki</h1>
          <ul>
            <li><a href="#about-me">O mnie</a></li>
            <li><a href="#what-i-do">Czym się zajmuję</a></li>
            <li><a href="#what-i-know">Na czym się znam</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
          </ul>
        </div>
      </nav>

      <section id="about-me">
        <h2>O mnie</h2>
        <p>Jestem studentem informatyki, a w wolnym czasie angażuję się w różne projekty.</p>
      </section>

      <section id="what-i-do">
        <h2>Czym się zajmuję</h2>
        <p>Zajmuję się tworzeniem wszelakich aplikacji webowych, mobilnych i desktopowych. Używam technologii takich jak .NET, React czy Flask.</p>
        <br />
      </section>

      <section id="what-i-know">
        <h2>Na czym się znam</h2>
        <ul>
          <li>C#<i class="fab fa-code"></i></li>
          <li>Python<i class="fab fa-python"></i></li>
          <li>Java<i class="fab fa-java"></i></li>
          <li>HTML5<i class="fab fa-html5"></i>, CSS3<i class="fab fa-css3-alt"></i>, podstawy JavaScript<i class="fab fa-js-square"></i></li>
        </ul>
      </section>

      <section id="portfolio">
        <h2>Portfolio</h2>
        <ol>
          <li>Projekt 1</li>
          <li>Projekt 2</li>
          <li>Projekt 3</li>
        </ol>
      </section>
      <section id="price-table">
        <table>
          <h2>Cennik</h2>
          <thead>
            <tr>
              <th>Usługa</th>
              <th>Cena</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Tworzenie stron internetowych</td>
              <td>300-1000 zł</td>
            </tr>
            <tr>
              <td>Tworzenie aplikacji mobilnych</td>
              <td>500-5000 zł</td>
            </tr>
          </tbody>
        </table>
      </section>
          <footer>
            <p>Wojciech Górecki</p>
          </footer>
    </div>
  )
}

export default App
