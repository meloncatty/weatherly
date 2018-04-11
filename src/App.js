import React, { Component } from 'react'
import './App.css'
import Search from './Search.js'
import CurrentWeather from './CurrentWeather.js'
import data from './mockData.js'
import {getCurrLocation, getCurrDate, getCurrCondition, getCurrTemp,  getCurrHigh, getCurrLow} from './cleanData.js'

class App extends Component {
  constructor() {
    super()

    this.state = {
      currLocation: '',
      currDate: '',
      currCondition: '',
      currTemp: '',
      currHigh: '',
      currLow: ''
    }
  }

  componentDidMount() {
    this.setState({
      currLocation: getCurrLocation(data),
      currDate: getCurrDate(data),
      currCondition: getCurrCondition(data),
      currTemp: getCurrTemp(data),
      currHigh: getCurrHigh(data),
      currLow: getCurrLow(data)
      weatherImg:
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Weatherly</h1>
        <CurrentWeather
        currLocation= {this.state.currLocation}
        currDate= {this.state.currDate}
        currCondition = {this.state.currCondition}
        currTemp = {this.state.currTemp}
        currHigh= {this.state.currHigh}
        currLow= {this.state.currLow}
        />
      </div>
    )
  }
}

export default App
