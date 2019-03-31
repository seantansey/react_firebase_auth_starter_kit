import React from 'react'
import './auth.css'



class SignUp extends React.Component {
  constructor() {
    super()
    this.state = {
      email: null,
      pass1: null,
      pass2: null,

    }
  }

  verifyPassword(event, email, pass1, pass2) {
    if (pass1 === pass2) {
      this.props.signUp(email, pass1)
    } else {
      event.preventDefault()
      console.log('ahh fuckin hell man', pass1, pass2)
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
              Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
            </small>
          </div>
          <div class="form-group">
            <label for="password2">Verify Password</label>
            <input onChange={(e) => this.setState({pass2: e.target.value})}type="password" class="form-control" id="password2" placeholder="Verify Password" required/>
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
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
