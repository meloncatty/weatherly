import React, { Component } from 'react'
import './App.css'
import Search from './Search.js'
import SevenHour from './SevenHour.js'
import TenDay from './TenDay.js'
import weatherData from './weatherData.js'
import cleanData from './cleanData.js'
import CurrentWeather from './CurrentWeather'
import Welcome from './Welcome'
import Header from './Header'


class App extends Component {
  constructor() {
    super()

    this.state = {
      location:'',
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
        console.log(data)
        this.setState({
         cleanData: cleanData(data)
        })
      })
      .catch(err => 'Location not found')
  }

  render() {
    return (
      <div className="App">
        {!this.state.cleanData &&
         <div className="welcome-screen">
         <Header />
          <Welcome location = {this.state.location}
          getWeather ={this.getWeather}/>
          </div>
        }
        {this.state.cleanData &&
        <div className="main-screen">
          <Header />
          <Search getWeather = {this.getWeather}/>
          <div className='weather-data'>
          <div className='curr-hour-data'>
          <CurrentWeather cleanData = {this.state.cleanData}/>
          <SevenHour cleanData = {this.state.cleanData}/>
          </div>
          <TenDay cleanData = {this.state.cleanData}/>
          </div>
          </div>
         }
         </div>
    )
  }
}

export default App
