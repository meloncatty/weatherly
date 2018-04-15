import React from 'react'

export default function cleanData(data) {
  const cleanData = {
    currentWeather: {
      location: data.current_observation.display_location.full,
      month: data.forecast.simpleforecast.forecastday[0].date.monthname,
      date: data.forecast.txt_forecast.forecastday[0].title,
      day: data.forecast.simpleforecast.forecastday[0].date.day,
      currentHigh: data.forecast.simpleforecast.forecastday[0].high.fahrenheit,
      currentLow: data.forecast.simpleforecast.forecastday[0].low.fahrenheit,
      condition: data.current_observation.weather,
      summary: data.forecast.txt_forecast.forecastday[0].fcttext,
      currentImage: data.current_observation.icon_url
    },
    sevenHour: data.hourly_forecast.slice(0,7).map((hour) => {
      return {
        hours: hour.FCTTIME.civil,
        temps: hour.temp.english,
        images: hour.icon_url
      }
    }),
    tenDay: data.forecast.simpleforecast.forecastday.map((day) => {
      return {
        day: day.date.day,
        currentHigh: day.high.fahrenheit,
        currentLow: day.low.fahrenheit,
        currentImage: day.icon_url
      }
    })
  }
  return cleanData
}
