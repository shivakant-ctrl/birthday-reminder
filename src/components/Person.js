import React from "react"

function Person(props) {
  return (
    <div className="person">
      <img className="person-img" src={props.personData.image} alt={props.personData.name} />
      <div className="person-data">
        <h5 className="person-name">{props.personData.name}</h5>
        <p className="person-age">{props.personData.age} years</p>
      </div>
    </div>
  )
}

export default Person