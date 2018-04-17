import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SevenHour from './SevenHour.js'
import mockData from './mockData.js'
import cleanData from './cleanData.js'
configure({ adapter: new Adapter() });


describe('SevenHour test', () => {
  it('should exist', () => {
    const output = shallow(<SevenHour cleanData={cleanData(mockData)}/>)
    expect(output).toBeDefined()
  })

  it('should return correct number of cards', () => {
    const output = shallow(<SevenHour cleanData={cleanData(mockData)}/>)
    expect(output.find('.hour-of-day').length).toEqual(7)
  })
})
