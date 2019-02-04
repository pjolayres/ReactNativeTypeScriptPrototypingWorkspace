/**
 * 
 * @format
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export interface Props {
  text: String,
  number?: Number
}

const StyledText = (props: Props) => {
  const { text, number } = props;

  return (
    <View style={styles.container}>
      {number && <Text style={styles.text}>{number}: </Text>}
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

StyledText.defaultProps = {
  number: 1
}

export default StyledText;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  },
  text: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});