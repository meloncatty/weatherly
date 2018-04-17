import React from 'react'

export default function Card(props){
   
   if(props.hours){
       return (
            <section className="hour-card">
                <h4 className="hour-of-day">{props.hours}</h4>
                <img alt="current weather condition"className="hour-img" src= {props.image}/>
                <h4 className="hour-temp">{props.temp}</h4>
            </section>
       )
    }
    if(props.day){
        return (
            <section className="day-card">
                <h4 className="day-date">{props.date} {props.day}</h4>
                <img className="day-image-desc" alt="clear" src={props.image}></img>
                <h4 className="day-temp">{props.high}°/ {props.low}° </h4>
            </section>
        )
    }

}

