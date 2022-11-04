import React from "react"
import Person from "./Person"
import data from "../data"

const newData = data.map((item) => {
  return (
    <Person key={item.id} personData={item} />
  )
})

function Main() {

  const [birthdayData, setBirthdayData] = React.useState(newData)

  console.log(birthdayData)

  function clearBirthdayData() {
    setBirthdayData(() => [])
  }

  return (
    <main className="main">
      <div className="birthday-card">
        <h1 className="main-heading">{birthdayData.length} Birthdays Today</h1>
        {birthdayData}
        <button className="button" onClick={clearBirthdayData}>Clear All</button>
      </div>
    </main>
  )
}

export default Main