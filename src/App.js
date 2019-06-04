import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
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
}

  render() {
    return (
      <View>
        <Header headerText='Authentication' />
        <LoginForm />
      </View>
    );
  }
}

export default App;
