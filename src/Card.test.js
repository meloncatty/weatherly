import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, configure, mount } from 'enzyme';
import App from './App'
import Adapter from 'enzyme-adapter-react-16';
import Card from './Card'
import Data from './helpers/mockData'
import cleanData from './helpers/cleanData';

configure({ adapter: new Adapter() });

describe('Card test', () => {
    it('should exist', () => {
      const output = shallow(<Card cleanData={cleanData(Data)}/>)
      expect(output).toBeDefined()
    })
})

it('should have a class of hour-of-day', () => {
    const output = shallow(<Card  hours={'12:30'} image={'image.png'} temp={'47'}/>)
    expect(output.find('h4.hour-of-day').text()).toEqual('12:30')
})

it('should have a class of hour-temp', () => {
    const output = shallow(<Card  hours={'12:30'} image={'image.png'} temp={'47'}/>)
    expect(output.find('h4.hour-temp').text()).toEqual('47')
})

it('should have a class of day-date', () => {
    const output = shallow(<Card  date={'April, 19'} day={'Thursday'} image={'image.png'} high={'58'} low={'34'}/>)
    expect(output.find('h4.day-date').text()).toEqual('April, 19 Thursday')
})

it('should have a class of day-date', () => {
    const output = shallow(<Card  date={'April, 19'} day={'Thursday'} image={'image.png'} high={'58'} low={'34'}/>)
    expect(output.find('h4.day-temp').text()).toEqual('58°/ 34° ')
})