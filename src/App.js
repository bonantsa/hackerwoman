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

function App() {
  return ( 
    <div>
      <BrowserRouter>
        <ul>
          <li><NavLink to="/">About Anniina</NavLink></li>
          <li><NavLink to="/skills">Skills</NavLink></li>
          <li><NavLink to="/projects">Projects</NavLink></li>
          <li><NavLink to="/playground">Playground</NavLink></li>
        </ul>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/playground" element={<Playground />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
