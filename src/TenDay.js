import React from 'react'
import './TenDay.css'
import Card from './Card'

export default function SevenHour(props) {
  return (
    <div className="day-container">
      { props.cleanData.tenDay.map((object, index) => {
        return <Card
          key={ index }
          date={ object.month } 
          day={ object.day }
          image={ object.currentImage }
          high={ object.currentHigh }
          low={ object.currentLow }/>
        })
      }
    </div>
  )
}
