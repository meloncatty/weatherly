import React from 'react'
import './Welcome.css'
import Search from './Search'

export default function Welcome(props) {
    return (
        <div className='welcome-search'>

            <Search className="welcome-search" getWeather = {props.getWeather}/>
        </div>
    )
}
