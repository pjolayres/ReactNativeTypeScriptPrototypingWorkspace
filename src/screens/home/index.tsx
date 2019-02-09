import React, { Component, Dispatch } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { NavigationScreenProps, NavigationScreenProp, NavigationRoute } from 'react-navigation';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

import StyledText from '../../components/styled-text';
import UnderlinedText from '../../components/underlined-text';
import { ReduxState, ActionTypes } from '../../state/types';
import { setName, logout } from '../../state/user-data/actions';
import { setVersion } from '../../state/app-data/actions';
import { NavigationService } from '../../navigation';
import { persistor } from '../../state/configureStore';
import { ThunkDispatch } from 'redux-thunk';
import { Action } from 'redux';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' + 'Shake or press menu button for dev menu'
});

interface Props extends NavigationScreenProps<Props>, ReduxStateProps, ActionProps {}

interface State {
  list: string[];
  object: {
    zero: string;
    one: string;
    two: string;
  };
}

export class Home extends Component<Props, State> {
  static navigationOptions = {
    title: 'Home'
  };

  static staticProp = 'Static Prop';

  private underlinedText = React.createRef<UnderlinedText>();

  constructor(props: Props) {
    super(props);

    const initialList = ['zero'];
    const initialObject = {
      zero: '0'
    };

    this.state = {
      list: [...initialList, 'one', 'two', 'three'],
      object: {
        ...initialObject,
        one: '1',
        two: '2'
      }
    };
  }

  componentDidMount() {
    setTimeout(() => {
      if (this.underlinedText.current) {
        this.underlinedText.current.changeText('Underlined text (Changed)');
      }
    }, 1000);
  }

  onChangeName = () => {
    this.props.setName(new Date().toISOString());
  };

  onChangeVersion = () => {
    this.props.setVersion('1.0.1');
  };

  onResetState = () => {
    persistor.purge();
  }

  onLogout = () => {
    this.props.logout();

    this.props.navigation.navigate('Auth');
  }

  render() {
    const { version, name } = this.props;
    const { list, object } = this.state;
    const listString = list.join(', ');
    const objectStrig = JSON.stringify(object);

    return (
      <View style={styles.container}>
        <FontAwesomeIcon name="rocket" size={30} color="#900" />
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit Home.tsx</Text>
        <Text style={styles.instructions}>{instructions}</Text>
        <Text style={styles.instructions}>------</Text>
        <Text style={styles.instructions}>{Home.staticProp}</Text>
        <Text style={styles.instructions}>List: {listString}</Text>
        <Text style={styles.instructions}>Object: {objectStrig}</Text>
        <StyledText text="Styled text" />
        <UnderlinedText ref={this.underlinedText} text="Underlined text (Changing in 1s)" />
        <Text style={styles.instructions}>------</Text>
        <TouchableOpacity onPress={this.onChangeName}>
          <Text>Change Name</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.onChangeVersion}>
          <Text>Change Version</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('InnerPage')}>
          <Text>Go to Inner Page</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => NavigationService.toggleDrawer()}>
          <Text>Toggle Drawer</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.onLogout}>
          <Text>Logout</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.onResetState}>
          <Text>Reset State</Text>
        </TouchableOpacity>
        <Text style={styles.instructions}>------</Text>
        <Text style={styles.instructions}>------</Text>
        <Text style={styles.instructions}>Name: {name}</Text>
        <Text style={styles.instructions}>Version: {version}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
});

interface ReduxStateProps {
  version: string;
  name: string;
}

interface ActionProps {
  setName: (name: string) => void;
  setVersion: (version: string) => void;
  logout: () => void;
}

const mapStateToProps = (state: ReduxState): ReduxStateProps => ({
  version: state.appData.version,
  name: state.userData.name
});

const mapDispatchToProps = (dispatch: ThunkDispatch<ReduxState, {}, Action>): ActionProps => {
  return {
    setName: (name: string) => dispatch(setName(name)),
    setVersion: (version: string) => dispatch(setVersion(version)),
    logout: () => dispatch(logout())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
