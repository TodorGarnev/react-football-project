import React, { Component } from 'react'
import Match from './Match/Match'
import Comments from './Comments/Comments'

export default class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      comments: [],
      currentComment: '',
      isLoaded: false
    }
  }

  componentDidMount = () => {
    fetch(`https://baas.kinvey.com/appdata/kid_rJZtL7CMQ/comments`, {
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
            comments: response,
            isLoaded: true
          })
        } else {
          this.setState({ isLoaded: true })
        }
      })
      .catch(err => console.log(err))
  }

  handleChange = e => {
    this.setState({
      currentComment: e.target.value
    })
  }

  addComment = () => {
    if (this.state.currentComment === '') {
      console.log('Please write a comment')
    } else {
      fetch(`https://baas.kinvey.com/appdata/kid_rJZtL7CMQ/comments`, {
        method: 'POST',
        body: JSON.stringify({
          id: this.props.user._id,
          comment: this.state.currentComment,
          author: this.props.user.username
        }),
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Kinvey ' + localStorage.getItem('token'),
          'X-Kinvey-API-Version': '3',
        }
      })
        .then(data => data.json())
        .then(response => {
          if (response.error === undefined) {
            const latestComment = {
              comment: this.state.currentComment,
              author: this.props.user.username
            }
            this.setState({
              comments: [...this.state.comments, latestComment],
              currentComment: ''
            })
          }
        })
        .catch(err => console.log(err))
    }
  }

  deleteComment = id => {
    fetch(`https://baas.kinvey.com/appdata/kid_rJZtL7CMQ/comments/${id}/?hard=true`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Kinvey ' + localStorage.getItem('token'),
        'X-Kinvey-API-Version': '3',
      }
    })
      .then(response => {
        if (response.status === 200) {
          const filteredComments = this.state.comments.filter(comment => comment._id !== id)
          this.setState({ comments: filteredComments })
        }
      })
      .catch(err => console.log(err))
  }

  deleteAllComments = () => {
    fetch(`https://baas.kinvey.com/appdata/kid_rJZtL7CMQ/comments?query={}&sort=id`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Basic a2lkX3JKWnRMN0NNUTo3Mjg4NTAyMjc0YzI0YmRmOWE5YmE5ZWE3ZTM3ZGFlZg==',
        'X-Kinvey-API-Version': '3',
      }
    })
      .then(response => {
        this.setState({ comments: [] })
      })
      .catch(err => console.log(err))
  }

  render = () => {
    return (
      <div>
        {this.state.isLoaded ?
          <div>
            <Match
              user={this.props.user}
            />
            <Comments
              user={this.props.user}
              comments={this.state.comments}
              currentComment={this.state.currentComment}
              handleChange={this.handleChange}
              addComment={this.addComment}
              deleteComment={this.deleteComment}
              deleteAllComments={this.deleteAllComments}
            />
          </div> :
          <div className='d-flex justify-content-center'>
            <i className="fa fa-refresh fa-spin fa-3x fa-fw"></i>
            <span className="sr-only">Loading...</span>
          </div>
        }
      </div>
    )
  }
}
