import {
  Route,
  Routes,
  NavLink,
  BrowserRouter
} from "react-router-dom"
import './App.css'
import About from './views/AboutInfo.js'
import Skills from './views/MySkills.js'
import Projects from './views/MyProjects.js'
import Playground from './views/Playground.js'
import DogGallery from './views/DogGallery.js'

function App() {
  return ( 
    <div>
      <BrowserRouter>
          <NavLink to="/">About Anniina</NavLink>
          <NavLink to="/skills">Skills</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/playground">Playground</NavLink>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/doge" element={<DogGallery />} />
          <Route path="/playground" element={<Playground />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
