import React from 'react';
import App from './App';
import { shallow } from 'enzyme';


describe('App', () => {
  let wrapper

  beforeEach(() => 
  wrapper = shallow(<App />));

  it('should render 9 divs with default state', () => {
    expect(wrapper.find('div').length).toEqual(9)
    
  });
  

  
  
});
