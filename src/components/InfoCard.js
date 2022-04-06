import {
    Link
  } from "react-router-dom"

function InfoCard(props) {
    return (
      <div className="content">
        <img src={props.img.src} alt={props.img.alt} />
        <div>
          { props.info.map((item, index) => {
          return <div key={index} className="m-bottom--xl">
                      <div>{item.name}</div>
                      <h2>{item.title}</h2>
                  </div>
          })}
          <Link to={props.linkPath}>{props.linkName}</Link>
        </div>
      </div>
    )
  }
  
  export default InfoCard