import React from 'react'
import './Welcome.css'
import Search from './Search'

export default function Welcome(props) {
    return (
        <div className='welcome-search'>
            <h3 className="welcome message">Welcome to Weatherly! Enter a city and 
                chek out its forecast, if you're into that sort of thing.</h3> 
            <Search className="welcome-search" getWeather = {props.getWeather}/>
        </div>
    )
}
