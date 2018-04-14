import React, { Component } from 'react'
import './App.css'
import Search from './Search.js'
import CurrentWeather from './CurrentWeather.js'
import SevenHour from './SevenHour.js'
import TenDay from './TenDay.js'
import weatherData from './weatherData.js'
import {getCurrLocation, getCurrDate, getCurrCondition, getCurrTemp,  getCurrHigh, getCurrLow, getHourData} from './cleanData.js'

class App extends Component {
  constructor() {
    super()

    this.state = {
      currLocation: '',
      currDate: '',
      currCondition: '',
      currTemp: '',
      currHigh: '',
      currLow: '',
      hourOfDay: '',
      hourlyImg: '',
      hourlyTemp: '',
      hourData: []
    }

    this.getWeather = this.getWeather.bind(this)
  }

  componentDidMount() {
    this.getWeather('Denver')
  }

  getWeather(location) {
    return weatherData(location)
      .then(data => {
        console.log(data)
        let currLocation = getCurrLocation(data)
        let currDate = getCurrDate(data)
        let currCondition = getCurrCondition(data)
        let currTemp = getCurrTemp(data)
        let currHigh = getCurrHigh(data)
        let currLow = getCurrLow(data)
        let hourData = getHourData(data)
        this.setState({
          currLocation: currLocation,
          currDate: currDate,
          currCondition: currCondition,
          currTemp: currTemp,
          currHigh: currHigh,
          currLow: currLow,
          hourData: hourData 
        })
      })
      .catch(err => 'Location not found')
  }
  render() {
    return (
      <div className="App">
      <div className="flex-left">
      <h1>Weatherly</h1>
        <CurrentWeather
        currLocation= {this.state.currLocation}
        currDate= {this.state.currDate}
        currCondition = {this.state.currCondition}
        currTemp = {this.state.currTemp}
        currHigh= {this.state.currHigh}
        currLow= {this.state.currLow}
        />
        {this.state.hourData && <SevenHour 
        hourData = {this.state.hourData}
        />}
        </div>
        <div className="flex-right">
        <TenDay />
        </div>
      </div>
    )
  }
}

export default App