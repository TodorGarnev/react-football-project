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
  constructor(props) {
    super(props)

    this.state = {
      user: {}
    }
  }

  // componentDidMount = () => {
  //   fetch('https://baas.kinvey.com/user/kid_rJZtL7CMQ', {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       Authorization: 'Kinvey ' + localStorage.getItem('token'),
  //       'X-Kinvey-API-Version': '3',
  //     }
  //   })
  //     .then(data => data.json())
  //     .then(response => {
  //       console.log(response)
  //       this.setState({
  //         users: response
  //       })
  //     })
  //     .catch(err => console.log(err))
  // }

  getCurrentUser = data => {
    this.setState({ user: data })
  }


  render() {
    return (
      <div className='App'>
        <Navigation user={this.state.user} />

        <section className='jumbotron main'>
          <Switch>
            <Route path='/' exact render={() => (
              localStorage.getItem('token') ? (<Redirect to='/home' />) : (<Redirect to='/login' />)
            )} />
            <Route path='/home' exact component={Home} />
            <Route path='/login' exact render={props =>
              <Form
                {...props}
                getCurrentUser={this.getCurrentUser}
              />
            }
            />
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
