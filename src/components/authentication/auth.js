import React from 'react'
import './auth.css'
import LogIn from './logIn'
import SignUp from './signUp'


class Auth extends React.Component {
  constructor() {
    super()
    this.state = {
      login: true
    }
    this.toggleLoginSignUp = this.toggleLoginSignUp.bind(this)
  }

  //toggles whether signup or login is visible
  toggleLoginSignUp() {
    return this.state.login ? this.setState({login: false}) : this.setState({login: true})
  }


  render() {
    return (
      <div className='center'>
        {this.state.login ? <LogIn toggle={this.toggleLoginSignUp} /> : <SignUp toggle={this.toggleLoginSignUp} />}
      </div>
    )
  }
}


export default Auth
