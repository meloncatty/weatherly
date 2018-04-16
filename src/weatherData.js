import key from './apikey.js'

const root = 'http://api.wunderground.com/'

const weatherData = (location) => {
  return fetch(`${root}/api/${key}/geolookup/conditions/forecast10day/hourly/q/us/${location[1]}/${location[0]}.json`).then(data => data.json())
}

export default weatherData


