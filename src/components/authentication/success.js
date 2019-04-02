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
      <div className="success">
        <button onClick={() => this.logOut()} type="button" classNameß="btn btn-dark">Log out</button>
      </div>
    )
  }
}


export default Success
