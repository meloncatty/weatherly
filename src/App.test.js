import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, configure, mount } from 'enzyme';
import App from './App';
import Adapter from 'enzyme-adapter-react-16';
import Welcome from './Welcome'
import Search from './Search'
import CurrentWeather from './CurrentWeather'
import SevenHour from './SevenHour'
import TenDay from './TenDay'

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
      expect(renderedApp.find(Welcome).length).toEqual(1);
    })

    it('should render the search the search functionality', () => {
      const renderedApp = mount(<App />)
      expect(renderedApp.find(Search).length).toEqual(1);
    })

    it('should render the current weather component', () => {
      const renderedApp = shallow(<App />)
      const cleanData = {CurrentWeather:{location:'Denver,CO'}}
      renderedApp.setState({cleanData:cleanData})
      expect(renderedApp.find(CurrentWeather).length).toEqual(1);
    })

    it('should have a seven hour component', () => {
      const renderedApp = shallow(<App />)
      const cleanData = {SevenHour:{location:'Denver,CO'}}
      renderedApp.setState({cleanData:cleanData})
      expect(renderedApp.find(SevenHour).length).toEqual(1);
    })

    it('should have a ten day component', () => {
      const renderedApp = shallow(<App />)
      const cleanData = {TenDay:{location:'Denver,CO'}}
      renderedApp.setState({cleanData:cleanData})
      expect(renderedApp.find(TenDay).length).toEqual(1);
    })
  })
})
