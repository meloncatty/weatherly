import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import TenDay from './TenDay.js'
import mockData from './mockData.js'
import cleanData from './cleanData.js'
configure({ adapter: new Adapter() });

describe('TenDay test', () => {
    it('should exist', () => {
      const output = shallow(<TenDay cleanData={cleanData(mockData)}/>)
      expect(output).toBeDefined()
    })
    it('should return correct number of cards', () => {
        const output = shallow(<TenDay cleanData={cleanData(mockData)}/>)
        expect(output.find('.day-date').length).toEqual(10)
      })
    
      it('should have a class for the date for each card', () => {
        const output = shallow(<TenDay cleanData={cleanData(mockData)}/>)
        expect(output.find('h4.day-date').length).toEqual(10)
      })
    
      it('should have a class for the hour temp for each card', () => {
        const output = shallow(<TenDay cleanData={cleanData(mockData)}/>)
        expect(output.find('h4.day-temp').length).toEqual(10)
      })
    })
    
