import {
    Link
  } from "react-router-dom"

function InfoCard(props) {
    return (
      <>
        { props.info.map((item, index) => {
         return <div key={index}>
                    <div>{item.title}</div>
                    <div>{item.name}</div>
                </div>
        })}
        <Link to={props.linkPath}>{props.linkName}</Link>
      </>
    )
  }
  
  export default InfoCard