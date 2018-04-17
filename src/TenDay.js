import React from 'react'
import './styles/TenDay.css'
import Card from './Card'

export default function SevenHour(props) {
  return (
    <div className="day-container">
      { props.cleanData.tenDay.slice(1).map(object => {
        return (
          <section className="day-card">
            <h4 className="day-date">{object.month} {object.day}</h4>
            <img className="day-image-desc" alt="clear" src={object.currentImage}></img>
            <h4 className="day-temp">{object.currentHigh}° | <span class='dailyLow'>{object.currentLow}°</span> </h4>
          </section>
        )
        })
      }
    </div>
  )
}
