import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, configure } from 'enzyme';
import App from './App';
import Adapter from 'enzyme-adapter-react-16';
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
})
