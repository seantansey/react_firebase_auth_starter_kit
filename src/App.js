import React, { Component } from 'react'
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


  render() {
    return (
      <div className="App">
        {this.state.loggedIn ? <Success /> : <Auth />  }
      </div>
    )
  }
}

export default App;
