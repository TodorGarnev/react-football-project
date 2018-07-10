import React, { Component } from 'react'
import SignUp from './SignUp'
import LogIn from './LogIn'
import Clarification from './Clarification'

export default class Form extends Component {
  constructor(props) {
    super(props)

    this.state = {
      route: '',
      form: {}
    }
  }

  // setRoute = route => this.setState({route})

  setLogin = e => {
    e.preventDefault()
    this.setState({
      route: 'login'
    })
  }

  setSignUp = e => {
    e.preventDefault()
    this.setState({
      route: ''
    })
  }

  handleChange = e => {
    const name = e.target.name
    const value = e.target.value
    const newState = {}
    newState[name] = value

    this.setState({
      form: Object.assign(this.state.form, newState)
    })

    // this.setState({
    //   form[name]: value
    // })
  }

  handleSignUp = e => {
    e.preventDefault()

    if (this.state.form.email === '' || this.state.form.email === undefined || this.state.form.password === '' || this.state.form.password === undefined || this.state.form.password.length < 5 || this.state.form.username === '' || this.state.form.username === undefined) {
      console.log('Please insert correct email!')
    } else {
      fetch(`https://baas.kinvey.com/user/kid_rJZtL7CMQ`, {
        method: 'POST',
        body: JSON.stringify(this.state.form),
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Basic ' + btoa('kid_rJZtL7CMQ:c79e8a7612e9464d8d0493ccaf9f5e54'),
          'X-Kinvey-API-Version': '3',
        }
      })
        .then(data => data.json())
        .then(response => {
          // console.log(response)
          if (response.error === undefined) {
            localStorage.setItem('token', response._kmd.authtoken)
            this.props.history.push('/')
            this.props.getCurrentUser(response)
          }
        })
        .catch(err => console.log(err))
    }
  }

  handleLogin = e => {
    e.preventDefault()

    fetch(`https://baas.kinvey.com/user/kid_rJZtL7CMQ/login`, {
      method: 'POST',
      body: JSON.stringify(this.state.form),
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Basic ' + btoa('kid_rJZtL7CMQ:c79e8a7612e9464d8d0493ccaf9f5e54'),
        'X-Kinvey-API-Version': '3',
      }
    })
      .then(data => data.json())
      .then(response => {
        console.log(response)
        if (response.error === undefined) {
          localStorage.setItem('token', response._kmd.authtoken)
          this.props.history.push('/')
          this.props.getCurrentUser(response)
        }
      })
      .catch(err => console.log(err))
  }

  showForm = () => {
    if (this.state.route === 'login') {
      return <LogIn
        handleChange={this.handleChange}
        handleLogin={this.handleLogin}
      />
    }

    return <SignUp
      handleChange={this.handleChange}
      handleSignUp={this.handleSignUp}
    />
  }

  render = () => (
    <div className='form'>
      {this.showForm()}
      <Clarification
        route={this.state.route}
        setLogin={this.setLogin}
        setSignUp={this.setSignUp}
      />
    </div>
  )

}