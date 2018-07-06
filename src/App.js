import React, { Component } from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import Home from './components/Home/Home'
import Form from './components/Forms/Form'
import Navigation from './components/Header/Navigation'
import Profile from './components/Home/Profile'
import AdminPanel from './components/Home/AdminPanel'
import Rules from './components/Home/Rules'
import Footer from './components/Header/Footer'

import './App.css'


class App extends Component {
  render() {
    return (
      <div className='App'>
        <Navigation />

        <section className='jumbotron main'>
          <Switch>
            <Route path='/' exact render={() => (
              localStorage.getItem('token') ? (<Redirect to='/home' />) : (<Redirect to='/login' />)
            )} />
            <Route path='/home' exact component={Home} />
            <Route path='/login' exact component={Form} />
            <Route path='/profile' exact component={Profile} />
            <Route path='/rules' exact component={Rules} />
            <Route path='/dashboard' exact component={AdminPanel} />
            <Redirect to='/' />
          </Switch>
        </section>

        <Footer />
      </div>
    )
  }
}

export default App
