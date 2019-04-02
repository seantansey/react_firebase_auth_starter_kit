import React, { Component } from 'react';
import './App.css';
import Auth from './components/authentication/auth'
import Success from './components/authentication/success'
import firebase from 'firebase'
import FirebaseApp from './components/firebase'

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
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .catch(function(error) {
        var errorCode = error.code
        var errorMessage = error.message
        console.log(errorCode, errorMessage)
    });
  }

  logIn(email, password) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .catch(function(error) {
        var errorCode = error.code
        var errorMessage = error.message
        console.log(errorCode, errorMessage)
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
        {this.state.loggedIn ? <Success logOut={this.logOut}/> : <Auth signUp={this.signUp} logIn={this.logIn} />  }
      </div>
    );
  }
}

export default App;
