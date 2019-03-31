import React from 'react'
import './auth.css'



class SignUp extends React.Component {
  constructor() {
    super()
    this.state = {
      email: null,
      pass1: null,
      pass2: null,
      errorMessage: '',

    }
  }

  //checks password for upper/lower letters and numbers
  passwordStrength(pass) {
    let hasUpperCase = /[A-Z]/.test(pass)
    let hasLowerCase = /[a-z]/.test(pass)
    let hasNumbers = /\d/.test(pass)
    if (pass.length >= 8 && pass.length <= 20 && hasUpperCase && hasLowerCase && hasNumbers) {
        return true
    } else {
        return false
    }
  }

  //verifies passwords match
  verifyPassword(event, email, pass1, pass2) {
    event.preventDefault()
    if (pass1 === pass2 && this.passwordStrength(pass1)) {
      this.props.signUp(email, pass1)
    } else {
      this.setState({errorMessage: 'Please enter a valid password'})
    }
  }


  render() {
    return (
      <div>
      <h3> Sign Up </h3>
        <form onSubmit={(e) => this.verifyPassword(e, this.state.email, this.state.pass1, this.state.pass2)} className="border">
          <div class="form-group">
            <label for="email1">Email address</label>
            <input onChange={(e) => this.setState({email: e.target.value})} type="email" class="form-control" id="email1" aria-describedby="emailHelp" placeholder="Enter email" required/>
          </div>
          <div class="form-group">
            <label for="password1">Password</label>
            <input onChange={(e) => this.setState({pass1: e.target.value})} type="password" class="form-control" id="password1" placeholder="Password" required/>
            <small id="passwordHelpBlock" class="form-text text-muted">
              Your password must be 8-20 characters long, contain at least 1 uppercase letter, 1 lowercase letter and 1 number.
            </small>
          </div>
          <div class="form-group">
            <label for="password2">Verify Password</label>
            <input onChange={(e) => this.setState({pass2: e.target.value})}type="password" class="form-control" id="password2" placeholder="Verify Password" required/>
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
          <small className='ml-3 red-text'>{`${this.state.errorMessage}`}</small>
        </form>
        <div className='right-align'>
          <p> Already have an account? <span>
          <button onClick={() => this.props.toggle()} type="button" class="btn btn-primary ">Login!</button>
          </span>
          </p>
        </div>
      </div>
    )
  }
}


export default SignUp
