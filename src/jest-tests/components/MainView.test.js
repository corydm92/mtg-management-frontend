import React from 'react';
import { shallow } from 'enzyme';
import MainView from '../../js/components/MainView';

describe('MainView tests', () => {
  it('Renders the Component', () => {
    const component = shallow(<MainView />);

    const mainview = component.find("[data-testid='mainview']");

    expect(mainview).toHaveLength(1); // Tests for existance
  });
});