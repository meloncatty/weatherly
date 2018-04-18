import React from 'react'
import ReactDOM from 'react-dom'
import { shallow, configure } from 'enzyme'
import App from './App'
import Adapter from 'enzyme-adapter-react-16'
import CurrentWeather from './CurrentWeather'
import Data from './helpers/mockData'
import cleanData from './helpers/cleanData'

configure({ adapter: new Adapter() })

describe('CurrentWeather component', () => {
    it('should exist', () => {
      const output = shallow(<CurrentWeather cleanData={cleanData(Data)}/>)
      expect(output).toBeDefined()
    })
})

describe('CurrentWeather test', () => {
    it('should have current location', () => {
        const output = shallow(<CurrentWeather cleanData={cleanData(Data)}/>)
        expect(output.find('h2').text()).toEqual('Louisville, KY')
    })

    it('should have a class of current date', () => {
        const output = shallow(<CurrentWeather cleanData={cleanData(Data)}/>)
        console.log(output.find('.curr-date').text())
        expect(output.find('.curr-date').text()).toEqual('Wednesday December, 20')
    })

    it('should have summary class of current weather conditions', () => {
        const output = shallow(<CurrentWeather cleanData={cleanData(Data)}/>)
        expect(output.find('.day-summary').text()).toEqual('Sun and clouds mixed. High 51F. Winds NE at 10 to 15 mph.')
    })

    it('should have a class of the high and low temps', () => {
        const output = shallow(<CurrentWeather cleanData={cleanData(Data)}/>)
        expect(output.find('.day-high-low').text()).toEqual('High 51° Low 32°')
    })
})
