import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
import Home from './components/Home/Home'
import Form from './components/Forms/Form'
import Navigation from './components/Header/Navigation'
import Profile from './components/Home/Profile'
import AdminPanel from './components/Home/AdminPanel';

import './App.css'


class App extends Component {
  render() {
    return (
      <div className='App'>
        <Navigation />

        <section className='jumbotron main'>
          <Route path='/' render={() => (
            localStorage.getItem('token') ? (<Redirect to='/home' />) : (<Form />)
          )} />
          <Route path='/login' component={Form} />
          <Route path='/profile' component={Profile} />
          <Route path='/dashboard' component={AdminPanel} />
        </section>
      </div>
    )
  }
}

export default App
