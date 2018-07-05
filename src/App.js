import React, { Component } from 'react'
import Home from './components/Home/Home'
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
          <Home />
          <Profile />
          <AdminPanel />
        </section>
      </div>
    )
  }
}

export default App
