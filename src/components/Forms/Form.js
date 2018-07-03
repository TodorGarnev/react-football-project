import React, { Component } from 'react'
import SignUp from './SignUp'
import LogIn from './LogIn'
import Clarification from './Clarification'

export default class Form extends Component {
  constructor(props) {
    super(props)

    this.state = {
      route: ''
    }
  }

  setLogIn = e => {
    e.preventDefault()
    this.setState({ route: 'login' })
  }

  setSignUp = e => {
    e.preventDefault()
    this.setState({ route: '' })
  }

  showForm = () => {
    if (this.state.route === 'login') {
      return <LogIn />
    }

    return <SignUp />
  }

  render = () => (
    <div className='form'>
      {this.showForm()}
      <Clarification
        route={this.state.route}
        setLogIn={this.setLogIn}
        setSignUp={this.setSignUp}
      />
    </div>
  )

}