import React, { Component, Dispatch } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import StyledText from '../../components/styled-text';
import UnderlinedText from '../../components/underlined-text';
import { ReduxState, ActionTypes } from '../../state/types';
import { setName } from '../../state/user-data/actions';
import { setVersion } from '../../state/app-data/actions';
import { persistor } from '../../state/configureStore';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' + 'Shake or press menu button for dev menu'
});

interface Props extends StateProps, ActionProps {}

interface State {
  list: string[];
  object: {
    zero: string;
    one: string;
    two: string;
  };
}

export class Main extends Component<Props, State> {
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
  }

  onChangeVersion = () => {
    this.props.setVersion('1.0.1');
  }

  saveState = () => {
    persistor.flush();
  }

  resetState = () => {
    persistor.purge();
  }

  render() {
    const { version, name } = this.props;
    const { list, object } = this.state;
    const listString = list.join(', ');
    const objectStrig = JSON.stringify(object);

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit Main.tsx</Text>
        <Text style={styles.instructions}>{instructions}</Text>
        <Text style={styles.instructions}>------</Text>
        <Text style={styles.instructions}>{Main.staticProp}</Text>
        <Text style={styles.instructions}>List: {listString}</Text>
        <Text style={styles.instructions}>Object: {objectStrig}</Text>
        <StyledText text="Styled text" />
        <UnderlinedText ref={this.underlinedText} text="Underlined text (Changing in 1s)" />
        <Text style={styles.instructions}>------</Text>
        <Text style={styles.instructions}>Name: {name}</Text>
        <Text style={styles.instructions}>Version: {version}</Text>
        <TouchableOpacity onPress={this.onChangeName}><Text>Change Name</Text></TouchableOpacity>
        <TouchableOpacity onPress={this.onChangeVersion}><Text>Change Version</Text></TouchableOpacity>
        <Text style={styles.instructions}>------</Text>
        <TouchableOpacity onPress={this.saveState}><Text>Save State</Text></TouchableOpacity>
        <TouchableOpacity onPress={this.resetState}><Text>Reset State</Text></TouchableOpacity>
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

interface StateProps {
  version: string;
  name: string;
}

interface ActionProps {
  setName: (name: string) => void;
  setVersion: (version: string) => void;
}

const mapStateToProps = (state: ReduxState): StateProps => ({
  version: state.appData.version,
  name: state.userData.name
});

const mapDispatchToProps = (dispatch: Dispatch<ActionTypes>): ActionProps => {
  return {
    setName: (name: string) => dispatch(setName(name)),
    setVersion: (version: string) => dispatch(setVersion(version))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
