import React from 'react'
import './CurrentWeather.css'

export default function CurrentWeather(props){
  return (
    <section className="curr-container">
    <h2 className="curr-location">{props.cleanData.currentWeather.location}</h2>
    <div className="curr-data">
      <div className="curr-left">
        <h3 className ="curr-date">{props.cleanData.currentWeather.date} <br/> {props.cleanData.currentWeather.month}, {props.cleanData.currentWeather.day}</h3>
        <img alt="current weather condition"className="day-img" src={props.cleanData.currentWeather.currentImage}/>
        <h3>{props.cleanData.currentWeather.condition}</h3>
      </div>
      <div className="curr-right">
        <p>{props.cleanData.currentWeather.summary}</p>
        <p>High of {props.cleanData.currentWeather.currentHigh}°</p>
        <p>Low of {props.cleanData.currentWeather.currentLow}°</p>
      </div>
    </div>
  </section>
  )
}
