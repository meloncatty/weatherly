import React from 'react'
import ReactDOM from 'react-dom'
import { shallow, configure } from 'enzyme'
import Search from './Search'
import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() })

describe('CurrentWeather, component', () => {
  let renderedSearch = shallow(<Search />)

  describe('Search test', () => {
    it('should exist', () => {
      expect(renderedSearch).toBeDefined()
    })

    it('should have default state', () => {
      const searchInput = ''
      const suggestCities = []

      expect(renderedSearch.state('searchInput')).toEqual(searchInput)
      expect(renderedSearch.state('suggestCities')).toEqual(suggestCities)
    })

    it('should render with an input with a data list and a button', ()=> {
      expect(renderedSearch.find('input').length).toEqual(1);
      expect(renderedSearch.find('datalist').length).toEqual(1);
      expect(renderedSearch.find('button').length).toEqual(1);
    })

    it('should have a list of cities', () => {
      expect(renderedSearch.find('input').first().props().list).toEqual('cities')
    })
  })
})
