/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * 
 * Generated with the TypeScript template
 * https://github.com/emin93/react-native-template-typescript
 * 
 * @format
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import StyledText from './components/styled-text';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export interface Props { }

interface State {
  list: Array<string>,
  object: Object
}

export default class App extends Component<Props, State> {
  static staticProp = 'Static Prop';

  constructor(props: Props) {
    super(props);

    const initialList = [ 'zero' ];
    const initialObject = {
      zero: '0'
    }

    this.state = {
      list: [...initialList, 'one', 'two', 'three'],
      object: {
        ...initialObject,
        one: '1',
        two: '2'
      }
    };
  }

  render() {
    const { list, object } = this.state;
    const listString = list.join(', ');
    const objectStrig = JSON.stringify(object);

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.tsx</Text>
        <Text style={styles.instructions}>{instructions}</Text>
        <Text style={styles.instructions}>------</Text>
        <Text style={styles.instructions}>{App.staticProp}</Text>
        <Text style={styles.instructions}>List: {listString}</Text>
        <Text style={styles.instructions}>Object: {objectStrig}</Text>
        <StyledText text="Styled text" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
