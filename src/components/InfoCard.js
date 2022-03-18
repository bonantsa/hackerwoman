import {
    Link
  } from "react-router-dom"

function InfoCard(props) {
    return (
      <>
        { props.info.map((item, index) => {
         return <div key={index}>
                    <div>{item.name}</div>
                    <h2>{item.title}</h2>
                </div>
        })}
        <Link to={props.linkPath}>{props.linkName}</Link>
      </>
    )
  }
  
  export default InfoCard