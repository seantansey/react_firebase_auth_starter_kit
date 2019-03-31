import React, { Component } from 'react';
import './App.css';
import SignUp from './components/authentication/signUp'
import LogIn from './components/authentication/logIn'
import Auth from './components/authentication/auth'
import Success from './components/authentication/success'
import firebase from 'firebase'

// Initialize Firebase
  var config = {
    apiKey: "AIzaSyBTl4qYZKfWP5Z9Zv43eIJz2jcSI_q8LiY",
    authDomain: "react-auth-bb933.firebaseapp.com",
    databaseURL: "https://react-auth-bb933.firebaseio.com",
    projectId: "react-auth-bb933",
    storageBucket: "",
    messagingSenderId: "980821584369"
  };
  firebase.initializeApp(config);


class App extends Component {
  constructor() {
    super()
    this.state = {
      loggedIn: false

    }
    this.signUp = this.signUp.bind(this)
    this.logIn = this.logIn.bind(this)
    this.logOut = this.logOut.bind(this)
  }

  componentDidMount() {
    //monitors for auth status changes to log user in
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({loggedIn: true})
      } else {
        this.setState({loggedIn: false})
      }
    })
  }

  signUp(email, password) {
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });
  }

  logIn(email, password) {
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    })
  }

  logOut() {
    firebase.auth().signOut().then(function() {
    }).catch(function(error) {
      // An error happened.
    })
  }


  render() {
    return (
      <div className="App">
        {this.state.loggedIn ? <Success logOut={this.logOut}/> : <Auth signUp={this.signUp} logIn={this.logIn}/> }
      </div>
    );
  }
}

export default App;
