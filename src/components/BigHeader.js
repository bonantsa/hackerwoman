import {
    Link
  } from "react-router-dom"

function BigHeader() {
  return (
    <>
      <h1 className="big-header">
        <span>Hi there,</span>
        <span>my name is</span>
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
    </>
  )
}

export default BigHeader