import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, configure, mount } from 'enzyme';
import App from './App';
import Adapter from 'enzyme-adapter-react-16';
require('jest-localstorage-mock')
window.localStorage = global.localStorage
configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('App test', () => {
  describe('App defaults', () => {
    it('should have default state', () => {
      const renderedApp = shallow(<App />)
      const location = ''
      const cleanData = null

      expect(renderedApp.state('location')).toEqual(location)
      expect(renderedApp.state('cleanData')).toEqual(cleanData)
    })

  })

  it('should have componentDidMount and getWeather methods', () => {
    const renderedApp = shallow(<App />)
    expect(typeof renderedApp.instance().componentDidMount).toEqual('function');
    expect(typeof renderedApp.instance().getWeather).toEqual('function');
  });

  describe('App UI test', () => {
    it('should render the home screen', () => {
      const renderedApp = shallow(<App />)
      expect(renderedApp.find('Welcome').length).toEqual(1);
    })

    it('should render the search functionality', () => {
      const renderedApp = mount(<App />)
      expect(renderedApp.find("Search").length).toEqual(1);
    })

  })
})
