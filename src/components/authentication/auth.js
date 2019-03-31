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
        {this.state.login ? <LogIn toggle={this.toggleLoginSignUp} logIn={this.props.logIn}/> : <SignUp toggle={this.toggleLoginSignUp} signUp={this.props.signUp}/>}

      </div>
    )
  }
}


export default Auth
