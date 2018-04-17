import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, configure, mount } from 'enzyme';
import App from './App'
import Adapter from 'enzyme-adapter-react-16';
import CurrentWeather from './CurrentWeather'
import Data from './mockData'
import cleanData from './cleanData';

configure({ adapter: new Adapter() });

describe('CurrentWeather, component', () => {
    let wrapper;
  
        beforeEach(() => {
            wrapper = mount(<CurrentWeather data={Data} />)
          })
  
    it('should be a thing', () => {
    //   const wrapper = shallow(<CurrentWeather />)
      expect(wrapper).toBeDefined()
    })
  
  })
