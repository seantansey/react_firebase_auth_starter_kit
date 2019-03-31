import React from 'react'
import './auth.css'



class LogIn extends React.Component {
  constructor() {
    super()
    this.state = {
      email: null,
      password: null,
    }
  }

  onSubmit(email, password) {
    this.props.logIn(email, password)
  }

  render() {
    return (
      <div>
        <h3> Login </h3>
        <form onSubmit={(e) => this.onSubmit(this.state.email, this.state.password)} className="border">
          <div class="form-group">
            <label for="email1">Email address</label>
            <input onChange={(e) => this.setState({email: e.target.value})} type="email" class="form-control" id="email1" aria-describedby="emailHelp" placeholder="Enter email" />
          </div>
          <div class="form-group">
            <label for="password1">Password</label>
            <input onChange={(e) => this.setState({password: e.target.value})} type="password" class="form-control" id="password1" placeholder="Password" />
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
        <div className='right-align'>
          <p>New user? <span>
          <button onClick={() => this.props.toggle()} type="button" class="btn btn-primary ">Sign Up!</button>
          </span>
          </p>
        </div>
      </div>
    )
  }
}


export default LogIn