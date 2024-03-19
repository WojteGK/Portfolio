import './App.css'
import Navbar from './components/Nav/Navbar'
import AboutMe from './components/AboutMe/AboutMe'
import SkillsSection from './components/SkillsSection/SkillsSection'
import PriceTable from './components/PriceTable/PriceTable'
import ProjectSection from './components/ProjectSection/ProjectSection'
function App() {

  return (
    <div>
      <Navbar/>
      <AboutMe/>
      <SkillsSection/>
      <section id="what-i-do">
        <h2>Czym się zajmuję</h2>
        <p>Zajmuję się tworzeniem wszelakich aplikacji webowych, mobilnych i desktopowych. Używam technologii takich jak .NET, React czy Flask.</p>
        <br/>
      </section>

      
      <ProjectSection id="projects"/>      
      <PriceTable id="price-table"/>
    </div>
  )
}

export default App
