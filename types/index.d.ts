import { NavigationScreenConfig } from 'react-navigation';
import { Icon } from 'react-native-vector-icons/Icon';

interface FunctionComponentScreen<T> extends React.FunctionComponent<T> {
  navigationOptions?: NavigationScreenConfig<{}>;
}

interface ScreenParams {
  title: string;
  icon: {
    component: typeof Icon;
    name: string;
  };
}
