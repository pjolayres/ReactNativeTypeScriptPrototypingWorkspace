import React, { Component } from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { createBottomTabNavigator, createAppContainer, NavigationActions, NavigationContainerComponent, createDrawerNavigator, DrawerActions } from 'react-navigation';
import { SafeAreaView, Platform, View } from 'react-native';

import Home from './screens/home';
import InnerPage from './screens/inner-page';

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
    Home,
    InnerPage: {
      screen: InnerPage,
      params: {
        title: 'Settings'
      }
    }
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName: string = '';
        if (routeName === 'Home') {
          iconName = 'home';
        } else if (routeName === 'InnerPage') {
          iconName = 'pagelines';
        }

        // You can return any component that you like here!
        return <FontAwesome name={iconName} size={25} color={(tintColor as string) || '#000'} />;
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

const DrawerNavigator = createDrawerNavigator(
  {
    DrawerHome: {
      screen: TabNavigator
    },
    DrawerScreen1: {
      screen: InnerPage,
      params: {
        title: 'Drawer Screen 1'
      }
    }
  }
);

const InnerAppContainer = createAppContainer(DrawerNavigator);

export const AppContainer = () => (
  <>
    <InnerAppContainer ref={(navigation: NavigationContainerComponent) => NavigationService.setNavigation(navigation)} />
  </>
);
