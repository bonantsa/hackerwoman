import {
    NavLink
} from "react-router-dom"

function NavBar() {
    return (
        <div className="nav">
            <NavLink to="/" className="nav-link">About Anniina</NavLink>
            <div>
                <NavLink to="/skills" className="nav-link">Skills</NavLink>
                <NavLink to="/projects" className="nav-link">Projects</NavLink>
                <NavLink to="/playground" className="nav-link">Playground</NavLink>
            </div>
        </div>
    )
  }
  
  export default NavBar