import React from 'react';
import { shallow } from 'enzyme';

import AggregatePanel from '../src/components/AggregatePanel';
import SubTree from '../src/components/SubTree';
import XAxis from '../src/components/XAxis';
import YAxis from '../src/components/YAxis';
import ZeroLine from '../src/components/ZeroLine';

import { width, height, graph, scales } from '../src/fixtures/testFixtures';

describe('<AggregatePanel />', () => {
  const props = {
    xScale: scales.ELAPSED_TIME_SCALE,
    yScale: scales.EVENT_COUNT_SCALE,
    timeScale: scales.ELAPSED_TIME_SCALE,
    colorScale: scales.NODE_COLOR_SCALE,
    nodeSorter: () => -1,
    width,
    height,
    graph,
  };

  test('it should be defined', () => {
    expect(AggregatePanel).toBeDefined();
  });

  test('it should render an svg', () => {
    const wrapper = shallow(<AggregatePanel {...props} />);
    expect(wrapper.find('svg').length).toBe(1);
  });

  test('it should render an XAxis', () => {
    const wrapper = shallow(<AggregatePanel {...props} />);
    expect(wrapper.find(XAxis).length).toBe(1);
  });

  test('it should render an YAxis', () => {
    const wrapper = shallow(<AggregatePanel {...props} />);
    expect(wrapper.find(YAxis).length).toBe(1);
  });

  test('it should render a ZeroLine', () => {
    const wrapper = shallow(<AggregatePanel {...props} />);
    expect(wrapper.find(ZeroLine).length).toBe(1);
  });

  test('it should render a SubTree', () => {
    const wrapper = shallow(<AggregatePanel {...props} />);
    expect(wrapper.find(SubTree).length).toBe(1);
  });
});
