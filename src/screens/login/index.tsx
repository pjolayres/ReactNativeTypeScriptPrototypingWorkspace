import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { NavigationScreenProps } from 'react-navigation';
import { Action } from 'redux';

import { ReduxState } from '../../state/types';
import { login, logout } from '../../state/user-data/actions';

interface Props extends NavigationScreenProps<Props>, ReduxStateProps, ActionProps {
  title: string;
}

interface State {
  isLoading: boolean;
  error?: string;
}

class Login extends Component<Props, {}> {
  state = {
    isLoading: false,
    error: null
  };

  componentDidMount() {
    if (this.props.isLoggedIn) {
      this.props.navigation.navigate('App');
    }
  }

  onLogin = async () => {
    this.setState({
      isLoading: true,
      error: null
    });

    try {
      await this.props.login('user', 'pass');

      this.props.navigation.navigate('App');
    } catch (ex) {
      this.setState({
        isLoading: false,
        error: ex.message
      });
    }
  };

  onInvalidLogin = async () => {
    this.setState({
      isLoading: true,
      error: null
    });

    try {
      await this.props.login('user', 'wrong-pass');
    } catch (ex) {
      this.setState({
        error: ex
      });
    } finally {
      this.setState({
        isLoading: false
      });
    }
  };

  render() {
    const { isLoading, error } = this.state;
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.onLogin}>
          <Text>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.onInvalidLogin}>
          <Text>Login (Invalid)</Text>
        </TouchableOpacity>
        {isLoading && (
          <>
            <Text>-------------</Text>
            <Text>Loading</Text>
          </>
        )}
        {error && (
          <>
            <Text>-------------</Text>
            <Text>{error}</Text>
          </>
        )}
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
  }
});

interface ReduxStateProps {
  isLoggedIn: boolean;
}

interface ActionProps {
  login: (username: string, password: string) => Promise<boolean>;
}

const mapStateToProps = (state: ReduxState): ReduxStateProps => ({
  isLoggedIn: state.userData.isLoggedIn
});

const mapDispatchToProps = (dispatch: ThunkDispatch<ReduxState, {}, Action>): ActionProps => {
  return {
    login: (username: string, password: string) => dispatch(login(username, password))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
