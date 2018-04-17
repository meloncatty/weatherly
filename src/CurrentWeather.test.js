import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, configure, mount } from 'enzyme';
import App from './App'
import Adapter from 'enzyme-adapter-react-16';
import CurrentWeather from './CurrentWeather'
import Data from './mockData'

configure({ adapter: new Adapter() });

describe('current weather renders the correct markups', () => {


    
})