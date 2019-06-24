import React from 'react';
import { shallow } from 'enzyme';
import Movie from '../components/Movie';

describe('Checking for movie components part', () => {
  test('Check for Image', () => {
    const component = shallow(<Movie />);
    expect(component.find('.image')).to.have.lengthOf(1);
  });
  test('Check for Movie Name', () => {
    const component = shallow(<Movie />);
    expect(component.find('.movie-name')).to.have.lengthOf(1);
  });
  test('Check for Movie Type', () => {
    const component = shallow(<Movie />);
    expect(component.find('.movie-type')).to.have.lengthOf(1);
  });
  test('Check for Rating', () => {
    const component = shallow(<Movie />);
    expect(component.find('.movie-rating')).to.have.lengthOf(1);
  });
});
