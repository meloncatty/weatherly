import React from 'react'
import ReactDOM from 'react-dom'
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import SevenHour from './SevenHour.js'
import mockData from './helpers/mockData.js'
import cleanData from './helpers/cleanData.js'
import Card from './Card.js'
configure({ adapter: new Adapter() })


describe('SevenHour test', () => {
  it('should exist', () => {
    const output = shallow(<SevenHour cleanData={cleanData(mockData)}/>)
    expect(output).toBeDefined()
  })

  it('should return correct number of cards', () => {
    const output = shallow(<SevenHour cleanData={cleanData(mockData)}/>)
    expect(output.find('Card').length).toEqual(7)
  })

  it('should return a div', () => {
    const output = shallow(<SevenHour cleanData={cleanData(mockData)}/>)
    expect(output.is('div')).toEqual(true)
  })
})
