import {
  Route,
  Routes,
  NavLink,
  BrowserRouter
} from "react-router-dom"
import './App.scss'

import About from './views/AboutInfo.js'
import Skills from './views/MySkills.js'
import Projects from './views/MyProjects.js'
import Playground from './views/Playground.js'
import DogGallery from './views/DogGallery.js'
import NavBar from './components/NavBar.js'

function App() {
  return ( 
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/doge" element={<DogGallery />} />
          <Route path="/playground" element={<Playground />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App
