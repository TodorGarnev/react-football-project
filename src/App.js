import React, { Component } from 'react'
import Home from './components/Home/Home'


import logo from './logo.svg'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1 className='App-title'>Welcome to my app!</h1>
        </header>

        <section className='jumbotron main'>
          <Home />
        </section>
      </div>
    )
  }
}

export default App
