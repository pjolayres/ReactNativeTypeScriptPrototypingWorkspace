import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import { Home } from '.';

// jest.mock('react-native-vector-icons/FontAwesome', () => 'Icon');

beforeAll(async () => {
  jest.setTimeout(30 * 1000); // 30-second timeout
});

it('renders correctly', () => {
  const navigation: any = {
    navigate: jest.fn()
  };
  const setName = jest.fn<(name: string) => void>();
  const setVersion = jest.fn<(version: string) => void>();
  const logout = jest.fn<() => void>();

  const tree = renderer.create(
    <Home
      name="test"
      version="1.0.0"
      navigation={navigation}
      setName={setName}
      setVersion={setVersion}
      logout={logout}
    />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
