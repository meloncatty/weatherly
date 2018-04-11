import React, {Component} from 'react'
import './CurrentWeather.css'

class CurrentWeather extends Component {
  constructor(props) {
    super()

  }
  render() {
  return (
    <div className="curr-weather-div">
      <h2 className="curr-weather-location">{this.props.currLocation}</h2>

      
      <div className="curr-weather-temp">
        <h3 className ="curr-weather-date">{this.props.currDate}</h3>
        <h3>{this.props.currCondition}</h3>
        <h3>{this.props.currTemp}</h3>
      </div>
      <p>{this.props.currHigh}</p>
      <p>{this.props.currLow}</p>
    </div>
  )
}
}

export default CurrentWeather
