import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import { InnerPage } from '.';

// jest.mock('react-native-vector-icons/FontAwesome', () => 'Icon');

beforeAll(async () => {
  jest.setTimeout(30 * 1000); // 30-second timeout
});

it('renders correctly', () => {
  const title = 'title';
  const navigation: any = {
    getParam: jest.fn(() => title)
  };
  const setName = jest.fn<(name: string) => void>();
  const setVersion = jest.fn<(version: string) => void>();

  const tree = renderer.create(<InnerPage setName={setName} setVersion={setVersion} navigation={navigation} name="Test Name" version="Test Version" />).toJSON();

  expect(tree).toMatchSnapshot();
});
