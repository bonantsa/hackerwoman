import {
    Link
  } from "react-router-dom"

function BigHeader() {
  return (
    <div className="hero-section">
      <h1 className="big-header">
        <span>Hi there,</span>
        <span className="p-bottom--md">my name is</span>
        <div>
            <span>A</span>
            <span>N</span>
            <span>N</span>
            <Link to="/secret" className="text-decoration--none">I</Link>
            <span>I</span>
            <span>N</span>
            <span>A</span>
        </div>
      </h1>
      <img src={require('../content/woman.jpg')} alt="Nainen aurinkolasit päässä" />
    </div>
  )
}

export default BigHeader