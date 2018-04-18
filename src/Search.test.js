import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Search from './Search.js'
import mockData from './helpers/mockData.js'
import cleanData from './helpers/cleanData.js'
configure({ adapter: new Adapter() });



describe('Search test', () => {
    it('should exist', () => {
      const output = shallow(<Search cleanData={cleanData(mockData)}/>)
      expect(output).toBeDefined()
    })

    it('should have and initial state that includes searchInput and SuggestCities', () => {
        const output = shallow(<Search cleanData={cleanData(mockData)}/>)
        expect(output.state()).toEqual(
            {
                searchInput : '',
                suggestCities: []
            }
        )
    })
})