import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Card, CardSection, Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBIH2CmyJUvfojYWhmAV6Lzml79JM64isM',
      authDomain: 'auth-7f1c0.firebaseapp.com',
      databaseURL: 'https://auth-7f1c0.firebaseio.com',
      projectId: 'auth-7f1c0',
      storageBucket: 'auth-7f1c0.appspot.com',
      messagingSenderId: '562548220283',
      appId: '1:562548220283:web:1b6457a4229982e6'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <Card>
            <CardSection>
              <Button onPress={() => firebase.auth().signOut()}>
                Log Out
              </Button>
            </CardSection>
          </Card>
        );
      case false:
        return <LoginForm />;
      default:
        return (
          <Card>
            <CardSection>
              <Spinner />
            </CardSection>
          </Card>
        );
    }
  }

  render() {
    return (
      <View>
        <Header headerText='Authentication' />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
