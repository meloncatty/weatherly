import React, {Component} from 'react'
import './HourCard.css'

class SevenHour extends Component {
  constructor(props) {
    super()

  }

  render() {
    return(
      <section className="hour-container">
        <div className="hour-card">
          <h4 className="hour-of-day">1PM</h4>
          <h5 className="image-desc">I'm an image</h5>
          <h4 className="hour-temp">60°</h4>
        </div>
        <div className="hour-card">
          <h4 className="hour-of-day">1PM</h4>
          <h5 className="image-desc">I'm an image</h5>
          <h4 className="hour-temp">60°</h4>
        </div>
        <div className="hour-card">
          <h4 className="hour-of-day">1PM</h4>
          <h5 className="image-desc">I'm an image</h5>
          <h4 className="hour-temp">60°</h4>
        </div>
        <div className="hour-card">
          <h4 className="hour-of-day">1PM</h4>
          <h5 className="image-desc">I'm an image</h5>
          <h4 className="hour-temp">60°</h4>
        </div>
        <div className="hour-card">
          <h4 className="hour-of-day">1PM</h4>
          <h5 className="image-desc">I'm an image</h5>
          <h4 className="hour-temp">60°</h4>
        </div>
        <div className="hour-card">
          <h4 className="hour-of-day">1PM</h4>
          <h5 className="image-desc">I'm an image</h5>
          <h4 className="hour-temp">60°</h4>
        </div>
        <div className="hour-card last-card">
          <h4 className="hour-of-day">1PM</h4>
          <h5 className="image-desc">I'm an image</h5>
          <h4 className="hour-temp">60°</h4>
        </div>
      </section>
    )
  }
}

export default SevenHour
