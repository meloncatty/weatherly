import React, {Component} from 'react'
// import HourCard from './HourCard.js'
import './HourCard.css'
import './SevenHour.css'

class SevenHour extends Component {
  constructor(props) {
    super()

  }

  render() {
    return(
      <div className="hour-container">
      <section className="hour-card">
        <h4 className="hour-of-day">1PM</h4>
        <h5 className="image-desc">I'm an image</h5>
        <h4 className="hour-temh5">60°</h4>
      </section>
      <section className="hour-card">
        <h4 className="hour-of-day">1PM</h4>
        <h5 className="image-desc">I'm an image</h5>
        <h4 className="hour-temh5">60°</h4>
      </section>
      <section className="hour-card">
        <h4 className="hour-of-day">1PM</h4>
        <h5 className="image-desc">I'm an image</h5>
        <h4 className="hour-temh5">60°</h4>
      </section>
      <section className="hour-card">
        <h4 className="hour-of-day">1PM</h4>
        <h5 className="image-desc">I'm an image</h5>
        <h4 className="hour-temh5">60°</h4>
      </section>
      <section className="hour-card">
        <h4 className="hour-of-day">1PM</h4>
        <h5 className="image-desc">I'm an image</h5>
        <h4 className="hour-temh5">60°</h4>
      </section>
      <section className="hour-card">
        <h4 className="hour-of-day">1PM</h4>
        <h5 className="image-desc">I'm an image</h5>
        <h4 className="hour-temp">60°</h4>
      </section>
      <section className="hour-card">
        <h4 className="hour-of-day">1PM</h4>
        <h5 className="image-desc">I'm an image</h5>
        <h4 className="hour-temp">60°</h4>
      </section>
      </div>
    )
  }
}

export default SevenHour
