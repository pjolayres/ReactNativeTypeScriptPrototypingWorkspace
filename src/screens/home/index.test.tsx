import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import { NavigationScreenProp, NavigationRoute } from 'react-navigation';

import { Home } from '.';

beforeAll(async () => {
  jest.setTimeout(30 * 1000); // 30-second timeout
});

it('renders correctly', () => {
  const navigation: any = {
    navigate: jest.fn()
  };
  const setName = jest.fn<(name: string) => void>();
  const setVersion = jest.fn<(version: string) => void>();

  renderer.create(<Home name="test" version="1.0.0" navigation={navigation} setName={setName} setVersion={setVersion} logout={() => { return; }} />);
});
