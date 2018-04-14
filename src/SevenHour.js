import React, {Component} from 'react'
import './HourCard.css'

export default function drawSevenHourCards(props) {
  // console.log(hourData)
  const hours = props.hourData.map(object => {
    return (
            <div className="hour-card">
              <h4 className="hour-of-day">{object.hours}</h4>
              <h5 className="image-desc">I'm an image</h5>
              <h4 className="hour-temp">60°</h4>
            </div>
          )
        })
    return (
     <section className="hour-container">
       {hours}
      </section>
    )
}