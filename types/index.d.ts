import { NavigationScreenConfig } from "react-navigation";

interface FunctionComponentScreen<T> extends React.FunctionComponent<T> {
  navigationOptions?: NavigationScreenConfig<{}>;
}

interface ScreenParams {
  title: string,
  icon: {
    component: any,
    name: string
  }
}