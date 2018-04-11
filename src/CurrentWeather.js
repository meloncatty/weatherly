import React, {Component} from 'react'
import './CurrentWeather.css'

class CurrentWeather extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }
  render() {
    console.log(this.props)
  return (
    <div className="curr-weather-div">
      <h2 className="curr-weather-location">{this.props.currLocation}</h2>
      <button className="forecast-button">7-Hour Forecast</button>
      <button className="forecast-button">10-Day Forecast</button>
      <div className="curr-weather-temp">
        <h3 className ="curr-weather-date">{this.props.currDate}</h3>
        <h3>{this.props.currCondition}</h3>
        <h3>74 Degrees</h3>
      </div>
      <p>High of 80 degrees, low of 65 degrees</p>
      <p>Today is partly cloudy, 50% chance rain in afternoon.</p>
    </div>
  )
}
}

export default CurrentWeather
