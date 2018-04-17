import React from 'react'
import './styles/SevenHour.css'
import Card from './Card.js'

export default function SevenHour(props) {
  return (
    <div className="hour-container">
      { props.cleanData.sevenHour.map((object, index) => {
        return <Card
          key={ index }
          hours={ object.hours}
          image={ object.images }
          temp={object.temps}/>

      })
    }
    </div>
  )
}
