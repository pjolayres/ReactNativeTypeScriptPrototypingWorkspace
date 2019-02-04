/**
 * 
 * @format
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export interface Props {
  text: String,
  number: Number
}

export default class StyledText extends Component<Props> {
  render() {
    const { text, number } = this.props;

    return (
      <View>
        <Text style={styles.text}>{number}: {text}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});