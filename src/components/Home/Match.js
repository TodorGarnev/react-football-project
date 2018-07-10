import React, { Component } from 'react'
import MatchControler from './MatchControler'

export default class Match extends Component {
  constructor(props) {
    super(props)

    this.state = {
      game: {
        teamOneName: '',
        teamTwoName: ''
      }
    }
  }

  componentDidMount = () => {
    fetch(`https://baas.kinvey.com/appdata/kid_rJZtL7CMQ/games`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Kinvey ' + localStorage.getItem('token'),
        'X-Kinvey-API-Version': '3',
      }
    })
      .then(data => data.json())
      .then(response => {
        console.log(response)
        this.setState({
          game: response[response.length - 1]
        })
      })
      .catch(err => console.log(err))
  }

  handleChange = e => {
    const name = e.target.name
    const value = e.target.value
    const newState = {}
    newState[name] = value
    console.log(this.state)
    this.setState({
      game: Object.assign(this.state.game, newState)
    })
  }

  addGame = () => {
    if (this.state.game.teamOneName === undefined || this.state.game.teamTwoName === undefined || this.state.game.teamOneName === '' || this.state.game.teamTwoName === '') {
      console.log('Please fill the name of both teams!')
    } else {
      fetch(`https://baas.kinvey.com/appdata/kid_rJZtL7CMQ/games`, {
        method: 'POST',
        body: JSON.stringify({
          teamOneName: this.state.game.teamOneName,
          teamOneScore: this.state.game.teamOneScore || 0,
          teamTwoName: this.state.game.teamTwoName,
          teamTwoScore: this.state.game.teamTwoScore || 0
        }),
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Kinvey ' + localStorage.getItem('token'),
          'X-Kinvey-API-Version': '3',
        }
      })
        .then(data => data.json())
        .then(response => {
          console.log(response)
          if (response.error === undefined) {

          }
        })
        .catch(err => console.log(err))
    }
  }

  render = () => (
    <div className='mb-5'>
      <div className='d-sm-flex w-100 ml-auto mr-auto mb-5 text-white'>
        <div className='bg-info p-2 w-100 d-flex justify-content-between display-4'>
          <span>{this.state.game ? this.state.game.teamOneName : 'Team 1'}</span>
          <span>{this.state.game ? this.state.game.teamOneScore : '?'}</span>
        </div>
        <div className='bg-info p-2 w-100 d-flex justify-content-between display-4 flex-sm-row-reverse'>
          <span>{this.state.game ? this.state.game.teamTwoName : 'Team 2'}</span>
          <span >{this.state.game ? this.state.game.teamTwoScore : '?'}</span>
        </div>
      </div>
      {this.props.user._kmd ?
        (this.props.user._kmd.roles !== undefined && this.props.user._kmd.roles.length > 0) &&
        <MatchControler
          game={this.state.game}
          handleChange={this.handleChange}
          addGame={this.addGame}
        />
        : ''}
    </div>
  )
}