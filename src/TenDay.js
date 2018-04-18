import React from 'react'
import './styles/TenDay.css'
import Card from './Card'

export default function TenDay(props) {
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
