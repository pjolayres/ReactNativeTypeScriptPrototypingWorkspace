import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export interface Props {
  text: string;
}

export interface State {
  text: string;
}

export default class UnderlinedText extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      text: props.text
    };
  }

  componentDidMount() {
    // this.state.text = 'Invaild change'; // <-- Compile-time error
  }

  changeText = (text: string) => {
    this.setState({
      text
    });
  };

  render() {
    const { text } = this.state;

    return (
      <View style={styles.container}>
        <Text style={styles.text}>{text}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  },
  text: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
    textDecorationLine: 'underline'
  }
});
