import React, { Component } from 'react';
import { createStackNavigator, createAppContainer, NavigationActions, NavigationContainerComponent } from 'react-navigation';

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
}

export const NavigationService = new NavigationServiceImpl();

const InnerAppContainer = createAppContainer(AppNavigator);

export const AppContainer = () => (
  <>
    <InnerAppContainer ref={(navigation: NavigationContainerComponent) => NavigationService.setNavigation(navigation)} />
  </>
);
