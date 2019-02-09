import React, { Component } from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {
  createBottomTabNavigator,
  createAppContainer,
  NavigationActions,
  NavigationContainerComponent,
  createDrawerNavigator,
  DrawerActions,
  createSwitchNavigator,
  createStackNavigator
} from 'react-navigation';
import { SafeAreaView, Platform, View } from 'react-native';

import Home from './screens/home';
import InnerPage from './screens/inner-page';
import Login from './screens/login';

class NavigationServiceImpl {
  private navigation: NavigationContainerComponent | null = null;

  setNavigation(navigation: NavigationContainerComponent) {
    this.navigation = navigation;
  }

  navigate(routeName: string, params: any) {
    if (!this.navigation) {
      return;
    }

    this.navigation.dispatch(
      NavigationActions.navigate({
        routeName,
        params
      })
    );
  }

  goBack(key?: string | null) {
    if (!this.navigation) {
      return;
    }

    this.navigation.dispatch(
      NavigationActions.back({
        key
      })
    );
  }

  openDrawer() {
    if (!this.navigation) {
      return;
    }

    this.navigation.dispatch(DrawerActions.openDrawer());
  }

  closeDrawer() {
    if (!this.navigation) {
      return;
    }

    this.navigation.dispatch(DrawerActions.closeDrawer());
  }

  toggleDrawer() {
    if (!this.navigation) {
      return;
    }

    this.navigation.dispatch(DrawerActions.toggleDrawer());
  }
}

export const NavigationService = new NavigationServiceImpl();

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
      }
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

export const AppContainer = () => (
  <>
    <InnerAppContainer ref={(navigation: NavigationContainerComponent) => NavigationService.setNavigation(navigation)} />
  </>
);
