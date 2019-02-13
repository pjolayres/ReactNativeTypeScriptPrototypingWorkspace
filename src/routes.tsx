import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {
  createBottomTabNavigator,
  createAppContainer,
  NavigationContainerComponent,
  createDrawerNavigator,
  createSwitchNavigator,
  createStackNavigator
} from 'react-navigation';

import { ScreenParams } from '../types';

import Navigation from './navigation';
import Home from './screens/home';
import InnerPage from './screens/inner-page';
import Login from './screens/login';

const TabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      params: {
        title: 'Home',
        icon: {
          component: FontAwesome,
          name: 'home'
        }
      } as ScreenParams
    },
    InnerPage: {
      screen: InnerPage,
      params: {
        title: 'Settings',
        icon: {
          component: FontAwesome,
          name: 'cog'
        }
      }
    }
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const icon = (navigation.state && navigation.state.params && navigation.state.params.icon) || {
          component: FontAwesome,
          name: 'square-o'
        };

        return <icon.component name={icon.name} size={25} color={(tintColor as string) || '#000'} />;
      }
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
      style: {
        height: 60
      },
      tabStyle: {
        paddingTop: 5,
        paddingBottom: 5
      }
    }
  }
);

const AppStack = createDrawerNavigator(
  {
    Home: {
      screen: TabNavigator,
      params: {
        title: 'Home',
        icon: {
          component: FontAwesome,
          name: 'home'
        }
      }
    },
    Settings: {
      screen: InnerPage,
      params: {
        title: 'Settings',
        icon: {
          component: FontAwesome,
          name: 'cog'
        }
      }
    }
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: ({ navigation }) => ({
      drawerIcon: ({ focused, tintColor }) => {
        const icon = (navigation.state && navigation.state.params && navigation.state.params.icon) || {
          component: FontAwesome,
          name: 'square-o'
        };

        return <icon.component name={icon.name} size={25} color={(tintColor as string) || '#000'} />;
      }
    })
  }
);

const AuthStack = createStackNavigator({
  Auth: Login
});

const MainNavigator = createSwitchNavigator(
  {
    Auth: AuthStack,
    App: AppStack
  },
  {
    initialRouteName: 'Auth'
  }
);

const InnerAppContainer = createAppContainer(MainNavigator);

const AppContainer = () => (
  <>
    <InnerAppContainer ref={(navigation: NavigationContainerComponent) => Navigation.setNavigation(navigation)} />
  </>
);

export default AppContainer;
