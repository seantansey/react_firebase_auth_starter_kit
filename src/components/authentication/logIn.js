import React from 'react'
import './auth.css'
import firebase from 'firebase'


class LogIn extends React.Component {
  constructor() {
    super()
    this.state = {
      email: null,
      password: null,
      errorMessage: ''
    }
    this.logIn = this.logIn.bind(this)
  }

  //firebase login and error handling
  logIn(email, password) {
    let that = this
    firebase.auth().signInWithEmailAndPassword(email, password)
      .catch(function(error) {
        let errorCode = error.code
        let errorMessage = error.message
        that.setState({errorMessage: errorMessage})
      })
  }

  //verifies login credentials and logs user in
  onSubmit(e, email, password) {
    e.preventDefault()
    this.logIn(email, password)
  }


  render() {
    return (
      <div>
        <h3> Login </h3>
        <form onSubmit={(e) => this.onSubmit(e, this.state.email, this.state.password)} className="border">
          <div className="form-group">
            <label htmlFor="email1">Email address</label>
            <input onChange={(e) => this.setState({email: e.target.value})} type="email" className="form-control" id="email1" aria-describedby="emailHelp" placeholder="Enter email" required/>
          </div>
          <div className="form-group">
            <label htmlFor="password1">Password</label>
            <input onChange={(e) => this.setState({password: e.target.value})} type="password" className="form-control" id="password1" placeholder="Password" required/>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
          <small className='ml-3 red-text'>{`${this.state.errorMessage}`}</small>
        </form>
        <div className='right-align'>
          <p>New user? <span>
          <button onClick={() => this.props.toggle()} type="button" className="btn btn-primary ">Sign Up!</button>
          </span>
          </p>
        </div>
      </div>
    )
  }
}


export default LogIn
