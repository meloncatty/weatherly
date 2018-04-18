import React from 'react'
import ReactDOM from 'react-dom'
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import TenDay from './TenDay.js'
import mockData from './helpers/mockData.js'
import cleanData from './helpers/cleanData.js'
configure({ adapter: new Adapter() })

describe('TenDay test', () => {
    it('should exist', () => {
      const output = shallow(<TenDay cleanData={cleanData(mockData)}/>)
      expect(output).toBeDefined()
    })

    it('should return correct number of cards', () => {
        const output = shallow(<TenDay cleanData={cleanData(mockData)}/>)
        expect(output.find('Card').length).toEqual(10)
    })

    it('should return a div', () => {
      const output = shallow(<TenDay cleanData={cleanData(mockData)}/>)
      expect(output.is('div')).toEqual(true)
    })
  })
