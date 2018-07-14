import React, { Component } from 'react'
import MatchControler from './MatchControler'

export default class Match extends Component {
  constructor(props) {
    super(props)

    this.state = {
      game: {
        teamOneName: 'Team 1',
        teamOneScore: '0',
        teamTwoName: 'Team 2',
        teamTwoScore: '0'
      },
      isLoaded: false
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
        if (response.length > 0) {
          this.setState({
            game: response[response.length - 1],
            isLoaded: true
          })
        } else {
          this.setState({ isLoaded: true })
        }
      })
      .catch(err => console.log(err))
  }

  handleChange = e => {
    const name = e.target.name
    const value = e.target.value
    const newState = {}
    newState[name] = value

    this.setState({
      game: Object.assign(this.state.game, newState)
    })
  }

  addGame = () => {
    if (this.state.game.teamOneName === '' || this.state.game.teamTwoName === '') {
      console.log('Please fill the name of both teams!')
    } else {
      fetch(`https://baas.kinvey.com/appdata/kid_rJZtL7CMQ/games`, {
        method: 'POST',
        body: JSON.stringify({
          teamOneName: this.state.game.teamOneName,
          teamOneScore: this.state.game.teamOneScore,
          teamTwoName: this.state.game.teamTwoName,
          teamTwoScore: this.state.game.teamTwoScore
        }),
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Kinvey ' + localStorage.getItem('token'),
          'X-Kinvey-API-Version': '3',
        }
      })
        .then(data => data.json())
        .then(response => console.log(response))
        .catch(err => console.log(err))
    }
  }

  render = () => (
    <div>
      {this.state.isLoaded === true ?
        (<div className='mb-5'>
          <div className='d-sm-flex w-100 ml-auto mr-auto mb-5 text-white'>
            <div className='bg-info p-2 w-100 d-flex justify-content-between display-4'>
              <span>{this.state.game.teamOneName}</span>
              <span>{this.state.game.teamOneScore}</span>
            </div>
            <span className='bg-info p-1 display-4'>-</span>
            <div className='bg-info p-2 w-100 d-flex justify-content-between display-4 flex-sm-row-reverse'>
              <span>{this.state.game.teamTwoName}</span>
              <span >{this.state.game.teamTwoScore}</span>
            </div>
          </div>
          {this.props.user._kmd ?
            (this.props.user._kmd.roles !== undefined && this.props.user._kmd.roles.length > 0) &&
            <MatchControler
              game={this.state.game}
              handleChange={this.handleChange}
              addGame={this.addGame}
            />
            : null}
        </div>) :
        <div className='d-flex justify-content-center mb-5'>
          <i className="fa fa-refresh fa-spin fa-3x fa-fw"></i>
          <span className="sr-only">Loading...</span>
        </div>
      }
    </div>
  )
}