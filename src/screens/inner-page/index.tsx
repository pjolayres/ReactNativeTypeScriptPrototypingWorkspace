import React, { Component, Dispatch } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { NavigationScreenProps } from 'react-navigation';

import StyledText from '../../components/styled-text';
import UnderlinedText from '../../components/underlined-text';
import { ReduxState, ActionTypes } from '../../state/types';
import { setName } from '../../state/user-data/actions';
import { setVersion } from '../../state/app-data/actions';
import { persistor } from '../../state/configureStore';
import { NavigationService } from '../../navigation';

interface Props extends NavigationScreenProps<Props>, ReduxStateProps, ActionProps {
  title: string;
}

const InnerPage: React.FunctionComponent<Props> = props => {
  const title = props.navigation.getParam('title', 'Inner Page');

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{title}</Text>
      <Text style={styles.text}>--------</Text>
      <TouchableOpacity onPress={() => NavigationService.goBack()}>
        <Text>Go Back</Text>
      </TouchableOpacity>
      <Text style={styles.text}>--------</Text>
      <Text style={styles.text}>Name: {props.name}</Text>
      <Text style={styles.text}>Version: {props.version}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  heading: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  text: {
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
}

const mapStateToProps = (state: ReduxState): ReduxStateProps => ({
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
)(InnerPage);
