import './App.css'
import Navbar from './components/Nav/Navbar'
import AboutMe from './components/AboutMe/AboutMe'
import SkillsSection from './components/SkillsSection/SkillsSection'
import PriceTable from './components/PriceTable/PriceTable'
import ProjectSection from './components/ProjectSection/ProjectSection'
import Footer from './components/Footer/Footer'
function App() {

  return (
    <div>
      <Navbar/>
      <AboutMe/>
      <SkillsSection />
      <ProjectSection/>      
      <Footer/>
    </div>
  )
}

export default App
