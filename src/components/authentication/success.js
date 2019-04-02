import React from 'react'
import './auth.css'
import firebase from 'firebase'


class Success extends React.Component {
  constructor() {
    super()
    this.state = {
    }
  }

  logOut() {
    firebase.auth().signOut().then(function() {
    }).catch(function(error) {
      // An error happened.
    })
  }


  render() {
    return (
      <div className="success">
        <button onClick={() => this.logOut()} type="button" classNameß="btn btn-dark">Log out</button>
      </div>
    )
  }
}


export default Success
