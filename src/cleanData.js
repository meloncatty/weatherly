import React from 'react'

const getCurrLocation = (data) => {
  const {full} = data.current_observation.display_location
  return full
}

const getCurrDate = (data) => {
  const {pretty} = data.forecast.simpleforecast.forecastday[0].date
  return pretty.split(' ').slice(4).join(' ')
}


const getCurrCondition = (data) => {
  const {conditions} = data.forecast.simpleforecast.forecastday[0]
  return conditions
}


export {getCurrLocation, getCurrDate, getCurrCondition}
