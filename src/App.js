import React, { Component } from 'react'
import './App.css'
import Search from './Search.js'
import CurrentWeather from './CurrentWeather.js'
import data from './mockData.js'
import {getCurrLocation, getCurrDate} from './cleanData.js'

class App extends Component {
  constructor() {
    super()

    this.state = {
      currLocation: '',
      currDate: ''
    }
  }

  componentDidMount() {
    this.setState({
      currLocation: getCurrLocation(data),
      currDate: getCurrDate(data)
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Weatherly</h1>
        <CurrentWeather
        currLocation= {this.state.currLocation}
        currDate= {this.state.currDate}
        />
      </div>
    )
  }
}

export default App
