import React from 'react'
import Card from './Card'
import './styles/SevenHour.css'

export default function SevenHour(props) {
  return (
    <div className="hour-container">
      { props.cleanData.sevenHour.map((object, index) => {
        return <Card
          key={ index }
          hours={ object.hours }
          image={ object.images }
          temp={object.temps}/>
        
      })
    }
    </div>
  )
}