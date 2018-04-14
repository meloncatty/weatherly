import React from 'react'
import './HourCard.css'

export default function SevenHour(props) {
  // console.log(hourData)
  return (
    <div>
      { props.cleanData.sevenHour.map(object => {
        return (
          <div className="hour-card">
            <h4 className="hour-of-day">{object.hours}</h4>
            <img alt="current weather condition"className="image-desc" src= {object.images}/>
            <h4 className="hour-temp">{object.temps}</h4>
          </div>
        )
      })
    }
    </div>
  )

    // return (
    //  <section className="hour-container">
    //    {hours}
    //   </section>
    // )
}