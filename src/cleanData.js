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

const getHourData = (data) => {
  const getHours = data.hourly_forecast.map(obj => 
    obj.FCTTIME.hour).slice(0,7)
  const getHourTemps = data.hourly_forecast.map(obj => 
    obj.temp.english).slice(0,7)
  const getHourImg = data.hourly_forecast.map(obj =>
    obj.icon_url).slice(0,7)
    const hourData = {hours:getHours, temp:getHourTemps, image:getHourImg}
   return hourData
}


export {getCurrLocation,
        getCurrDate,
        getCurrCondition,
        getCurrHigh,
        getCurrLow,
        getCurrTemp,
       getHourData}
