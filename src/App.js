import React, { Component } from 'react'
import './styles/App.css'
import Search from './Search.js'
import SevenHour from './SevenHour.js'
import TenDay from './TenDay.js'
import weatherData from './helpers/weatherData.js'
import cleanData from './helpers/cleanData.js'
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
    if(localStorage.length >= 1) {
      this.getFromStorage()
    }
  }

  getWeather(location) {
    let searchWord = location.split(',')
     weatherData(searchWord)
        .then(data => {
          this.sendToStorage(searchWord)
          this.setState({
           cleanData: cleanData(data),
          })
        })
        .catch(err => alert('Location not found'))
  }

  sendToStorage(city) {
    localStorage.setItem('city', city)
  }

  getFromStorage() {
      const getLocation = localStorage.getItem('city')
      this.getWeather(getLocation)
  }

  render() {
    return (
      <div className="App">
        {!this.state.cleanData &&
         <div className="main-search">
          <Header />
          <Welcome location = {this.state.location}
                   getWeather ={this.getWeather}/>
         </div>
        }
        {this.state.cleanData &&
          <div className='main-wrapper'>
            <div className="main-search">
              <Header />
              <Search getWeather = {this.getWeather}/>
            </div>

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
