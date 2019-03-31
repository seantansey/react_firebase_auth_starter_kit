import React from 'react'
import './auth.css'



class Success extends React.Component {
  constructor() {
    super()
    this.state = {
    }
  }

  logOut() {
    this.props.logOut()
  }

  render() {
    return (
      <div>
        <h3> Logged TF In! </h3>
        <button onClick={() => this.logOut()} type="button" class="btn btn-dark">Dark</button>
      </div>
    )
  }
}


export default Success
