const getCurrLocation = (data) => {
  return data.current_observation.display_location.full
}

const getCurrDate = (data) => {
  const {pretty} = data.forecast.simpleforecast.forecastday[0].date
  return pretty.split(' ').slice(4).join(' ')
}

const getCurrCondition = (data) => {
  return data.forecast.simpleforecast.forecastday[0].conditions
}

const getCurrHigh = (data) => {
  const {fcttext} = data.forecast.txt_forecast.forecastday[0]
  return fcttext.split(' ').slice(0, 6).join(' ')
}

const getCurrLow = (data) => {
  const {fcttext} = data.forecast.txt_forecast.forecastday[1]
  return fcttext.split(' ').slice(0, 4).join(' ')
}

const getCurrTemp = (data) => {
  return data.current_observation.temperature_string
}

export {getCurrLocation,
        getCurrDate,
        getCurrCondition,
        getCurrHigh,
        getCurrLow,
        getCurrTemp}
