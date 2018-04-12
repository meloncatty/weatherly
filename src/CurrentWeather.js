import React, {Component} from 'react'
import './CurrentWeather.css'

class CurrentWeather extends Component {
  constructor(props) {
    super()

  }
  render() {
  return (
    <section className="curr-container">
      <h2 className="curr-location">{this.props.currLocation}</h2>
      <div className="curr-data-container">
        <div className="curr-temp">
          <h3 className ="curr-date">{this.props.currDate}</h3>
          <h3>{this.props.currCondition}</h3>
        </div>
        <div className="curr-condition">
          <h3>{this.props.currTemp}</h3>
          <p>{this.props.currHigh}</p>
          <p>{this.props.currLow}</p>
        </div>
      </div>
    </section>
  )
}
}

export default CurrentWeather
