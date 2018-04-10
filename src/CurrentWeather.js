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
    <div className="curr-weather">
      <h2>{this.props.currLocation}</h2>
      <h3>{this.props.currDate}</h3>
      <h3>Sunny</h3>
      <h3>74 Degrees</h3>
      <p>High of 80 degrees, low of 65 degrees</p>
      <p>Today is partly cloudy, 50% chance rain in afternoon.</p>
    </div>
  )
}
}

export default CurrentWeather
