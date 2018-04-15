import React from 'react'
import './TenDay.css'

export default function SevenHour(props) {
  return (
    <div className="day-container">
      { props.cleanData.tenDay.map(object => {
        return (
          <section className="day-card">
            <h4 className="day-date">{object.month} {object.day}</h4>
            <img className="day-image-desc" alt="clear" src={object.currentImage}></img>
            <h4 className="day-hi">{object.currentHigh}°</h4>
            <h4 className="day-lo">{object.currentLow}°</h4>
          </section>
        )
        })
      }
    </div>
  )
}
