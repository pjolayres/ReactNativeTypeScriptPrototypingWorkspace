import {
  NavigationActions,
  NavigationContainerComponent,
  DrawerActions,
} from 'react-navigation';

class NavigationImpl {
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

const Navigation = new NavigationImpl();

export default Navigation;
