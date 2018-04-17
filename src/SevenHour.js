import React from 'react'
import './HourCard.css'

export default function SevenHour(props) {
  return (
    <div className="hour-container">
      { props.cleanData.sevenHour.map((object, index) => {
        return (
          <section key = {index} className="hour-card">
            <h4 className="hour-of-day">{object.hours}</h4>
            <img alt="current weather condition"className="hour-img" src= {object.images}/>
            <h4 className="hour-temp">{object.temps}</h4>
          </section>
        )
      })
      }
    </div>
  )
}
