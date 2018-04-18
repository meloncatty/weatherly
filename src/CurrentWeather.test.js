import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, configure, mount } from 'enzyme';
import App from './App'
import Adapter from 'enzyme-adapter-react-16';
import CurrentWeather from './CurrentWeather'
import Data from './helpers/mockData'
import cleanData from './helpers/cleanData';

configure({ adapter: new Adapter() });

describe('CurrentWeather, component', () => {
    let wrapper;
  
    describe('CurrentWeather test', () => {
        it('should exist', () => {
          const output = shallow(<CurrentWeather cleanData={cleanData(Data)}/>)
          expect(output).toBeDefined()
        })
    })
    
    it('should have a class of current location', () => {
        const output = shallow(<CurrentWeather cleanData={cleanData(Data)}/>)
        expect(output.find('h2.curr-location').length).toEqual(1)
    })

    it('should have a class of current date', () => {
        const output = shallow(<CurrentWeather cleanData={cleanData(Data)}/>)
        expect(output.find('h3.curr-date').length).toEqual(1)
    })

    it('should have summary class of current weather conditions', () => {
        const output = shallow(<CurrentWeather cleanData={cleanData(Data)}/>)
        expect(output.find('p.day-summary').length).toEqual(1)
    })

    it('should have a class of the high and low temps', () => {
        const output = shallow(<CurrentWeather cleanData={cleanData(Data)}/>)
        expect(output.find('h3.day-high-low').length).toEqual(1)
    })
})
