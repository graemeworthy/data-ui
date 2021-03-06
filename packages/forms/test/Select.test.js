import React from 'react';
import { shallow } from 'enzyme';
import ReactSelect from 'react-select';

import Select from '../src/Select';

describe('<Select />', () => {
  test('it should be defined', () => {
    expect(Select).toBeDefined();
  });

  test('It should render a ReactSelect', () => {
    const wrapper = shallow(<Select />);
    expect(wrapper.is(ReactSelect)).toBe(true);
  });
});
