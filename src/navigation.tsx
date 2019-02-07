import { createStackNavigator, createAppContainer } from 'react-navigation';

import Home from './screens/home';
import InnerPage from './screens/inner-page';

const AppNavigator = createStackNavigator(
  {
    Home,
    InnerPage
  },
  {
    initialRouteName: 'Home'
  }
);

export const AppContainer = createAppContainer(AppNavigator);
