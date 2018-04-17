import React from 'react'
import './styles/CurrentWeather.css'

export default function CurrentWeather(props){
  return (
    <section className="curr-container">
      <h2 className="curr-location">{props.cleanData.currentWeather.location}</h2>
      <div className="curr-data">
        <div className="curr-left">
          <h3 className ="curr-date">{props.cleanData.currentWeather.date} {props.cleanData.currentWeather.month}, {props.cleanData.currentWeather.day}</h3>
          <img alt="current weather condition"className="day-img" src={props.cleanData.currentWeather.currentImage}/>
          <h3>{props.cleanData.currentWeather.condition}</h3>
        </div>
      <div className="curr-right">
        <p className="day-summary">{props.cleanData.currentWeather.summary}</p>
        <h3 className="day-high-low">High {props.cleanData.currentWeather.currentHigh}° Low {props.cleanData.currentWeather.currentLow}°</h3>
      </div>
     </div>
    </section>
  )
}
