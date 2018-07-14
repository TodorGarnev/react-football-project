import React, { Component } from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import Home from './components/Home/Home'
import Form from './components/Form/Form'
import Navigation from './components/Navigation/Navigation'
import Profile from './components/Profile/Profile'
import AdminPanel from './components/AdminPanel/AdminPanel'
import Rules from './components/Rules/Rules'
import Footer from './components/Footer/Footer'

import './App.css'


class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      user: {}
    }
  }

  getCurrentUser = data => {
    this.setState({ user: data })
  }

  render() {
    return (
      <div className='App'>
        <Navigation user={this.state.user} />

        <section className='jumbotron main'>
          <Switch>
            <Route path='/' exact render={() =>
              localStorage.getItem('token') ? (<Redirect to='/home' />) : (<Redirect to='/signup' />)
            }
            />
            <Route path='/signup' exact render={props =>
              <Form
                {...props}
                getCurrentUser={this.getCurrentUser}
              />}
            />
            <Route path='/login' exact render={props =>
              <Form
                {...props}
                getCurrentUser={this.getCurrentUser}
              />}
            />
            <Route path='/home' exact render={props =>
              <Home
                {...props}
                user={this.state.user}
              />}
            />
            <Route path='/profile' exact render={props =>
              <Profile
                {...props}
                user={this.state.user}
              />}
            />
            <Route path='/dashboard' exact component={AdminPanel} />
            <Route path='/rules' exact component={Rules} />
            <Redirect to='/' />
          </Switch>
        </section>

        <Footer />
      </div>
    )
  }
}

export default App
