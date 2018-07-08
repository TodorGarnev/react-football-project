import React, { Component } from 'react'
import Match from './Match'
import Comments from './Comments'

export default class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      comments: [],
      currentComment: ''
    }
  }

  handleChange = e => {
    this.setState({
      currentComment: e.target.value
    })
  }

  addComment = () => {
    this.setState(prevState => ({
      comments: [...prevState.comments, this.state.currentComment]
    }))
  }

  deleteComment = id => {
    let filteredComments = this.state.comments.filter(item => item !== this.state.comments[id])
    this.setState({ comments: filteredComments })
  }

  render = () => {
    return (
      <div>
        <Match />
        <Comments
          comments={this.state.comments}
          text={this.state.currentComment}
          handleChange={this.handleChange}
          addComment={this.addComment}
          deleteComment={this.deleteComment}
        />
      </div>
    )
  }
}
