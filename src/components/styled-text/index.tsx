import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export interface Props {
  text: string;
  num?: number;
}

const StyledText: React.FunctionComponent<Props> = (props: Props) => {
  const { text, num } = props;

  return (
    <View style={styles.container}>
      {num && <Text style={styles.text}>{num}: </Text>}
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

StyledText.defaultProps = {
  num: 1
};

export default StyledText;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  },
  text: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
});
