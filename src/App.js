import React, { Component } from 'react'
import './App.css'
import Search from './Search.js'
import SevenHour from './SevenHour.js'
import TenDay from './TenDay.js'
import weatherData from './weatherData.js'
import cleanData from './cleanData.js'
import CurrentWeather from './CurrentWeather'


class App extends Component {
  constructor() {
    super()

    this.state = {
      location:'Denver, CO',
      cleanData: null
    }
    this.getWeather = this.getWeather.bind(this)
  }

  componentDidMount() {
    this.getWeather(this.state.location)
  }

  getWeather(location) {
  let searchWord = location.split(',')
   weatherData(searchWord)
      .then(data => {
        this.setState({
         cleanData: cleanData(data)
        })
      })
      .catch(err => 'Location not found')
  }
  render() {
    return (
      this.state.cleanData &&
      <div className="App">
        <Search getWeather = {this.getWeather}/>
         <h1>Weatherly</h1>
         <CurrentWeather cleanData = {this.state.cleanData}/>
         <SevenHour cleanData = {this.state.cleanData}/>
         <TenDay cleanData = {this.state.cleanData}/>
      </div>
    )
  }
}

export default App
