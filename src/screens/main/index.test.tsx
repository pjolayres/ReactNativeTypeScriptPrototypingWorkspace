import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import { Main } from '.';

beforeAll(async () => {
  jest.setTimeout(30 * 1000); // 30-second timeout
});

it('renders correctly', () => {
  renderer.create(<Main name="test" version="1.0.0" />);
});
