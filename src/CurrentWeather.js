import React from 'react'
import './CurrentWeather.css'

export default function CurrentWeather(props){
  return (
    <div>
          <section className="curr-container">
          <h2 className="curr-location">{props.cleanData.currentWeather.location}</h2>
          <div className="curr-data-container">
            <div className="curr-temp">
              <h3 className ="curr-date">{props.cleanData.currentWeather.month}, {props.cleanData.currentWeather.day}</h3>
              <img alt="current weather condition"className="image-desc" src= {props.cleanData.currentWeather.currentImage}/>
              <h3>{props.cleanData.currentWeather.condition}</h3>
            </div>
            <div className="curr-condition">
              <h3>50</h3>
              <p>{props.cleanData.currentWeather.currentHigh}</p>
              <p>{props.cleanData.currentWeather.currentLow}</p>
            </div>
          </div>
        </section>
    </div>
  )
}


