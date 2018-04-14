
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
    })
  }
  return cleanData
}

// data.forecast.simpleforecast.forecastday.map
// 
// month: day.date.monthname,
// day: day.date.day,
// currentHigh: day.high.fahrenheit,
// currentLow: day.low.fahrenheit,
// condition: day.conditions,
// currentImage: day.icon_url
// 
// const getCurrLocation = (data) => {
  //   return data.current_observation.display_location.full
  // }
  
  // const getCurrDate = (data) => {
    //   const {pretty} = data.forecast.simpleforecast.forecastday[0].date
    //   return pretty.split(' ').slice(4).join(' ')
    // }
    
    // const getCurrCondition = (data) => {
      //   return data.forecast.simpleforecast.forecastday[0].conditions
      // }
      
      // const getCurrHigh = (data) => {
        //   const {fcttext} = data.forecast.txt_forecast.forecastday[0]
        //   return fcttext.split(' ').slice(0, 6).join(' ')
        // }
        
        // const getCurrLow = (data) => {
          //   const {fcttext} = data.forecast.txt_forecast.forecastday[1]
          //   return fcttext.split(' ').slice(0, 4).join(' ')
          // }
          
          // const getCurrTemp = (data) => {
            //   return data.current_observation.temperature_string
            // }
            
            // CurrentWeather: {
              // date: data.forecast.simpleforecast.forecastday[0].date
              //   return pretty.split(' ').slice(4).join(' ');
              // condition: data.forecast.simpleforecast.forecastday[0].conditions;
              // currentHigh: data.forecast.txt_forecast.forecastday[0].fcttext
              //   return fcttext.split(' ').slice(0, 6).join(' ');
              // currentLow:data.forecast.txt_forecast.forecastday[1].fcttext
              //   return fcttext.split(' ').slice(0, 4).join(' ');
              // currentTemp: data.current_observation.temperature_string;
              // }